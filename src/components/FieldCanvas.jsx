/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

// Animated WebGL contour field.
const FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;
uniform float uPointerOn;
uniform vec3 uC0;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

void main() {
  float aspect = uRes.x / uRes.y;
  vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);
  float t = uTime * 0.04;

  // pointer lift
  vec2 m = (uPointer - 0.5) * vec2(aspect, 1.0);
  float lift = exp(-dot(p - m, p - m) * 4.0) * uPointerOn;

  // domain-warped base field
  vec2 q = vec2(fbm(p * 0.55 + vec2(0.0, t)), fbm(p * 0.55 + vec2(5.2, -t * 0.8)));
  vec2 r = vec2(fbm(p * 0.8 + 2.4 * q + vec2(1.7, 9.2) + t * 0.5), fbm(p * 0.8 + 2.4 * q + vec2(8.3, 2.8) - t * 0.4));
  float h = fbm(p * 0.7 + 2.0 * r);
  vec2 w = p + (r - 0.5) * 1.5 + (m - p) * lift * 0.08;

  // colour folds
  float fold = sin((w.x * 0.95 - w.y * 0.7) * 4.6 + t * 1.6) * 0.5 + 0.5;
  float body = sin((w.x * 0.35 + w.y * 1.05) * 2.2 - t * 0.9) * 0.5 + 0.5;
  vec3 col = mix(uC0, uC1, smoothstep(0.05, 0.95, body));
  col = mix(col, uC2, pow(fold, 1.6) * (0.55 + 0.45 * body));
  col = mix(col, uC3, pow(fold, 9.0) * 0.85);

  // contour lines, brighter near the pointer
  float c = h * 18.0;
  float lw = fwidth(c);
  float dist = 0.5 - abs(fract(c) - 0.5);
  float line = 1.0 - smoothstep(0.0, lw * 0.85, dist);
  col = mix(col, mix(uC2, uC3, 0.75), line * (0.07 + 0.3 * lift));

  // top-left light and grain
  col *= 0.86 + 0.24 * smoothstep(1.35, 0.0, length(vUv - vec2(0.2, 0.85)));
  col += (hash(gl_FragCoord.xy + fract(uTime * 7.0) * 91.0) - 0.5) * 0.05;
  outColor = vec4(col, 1.0);
}`;

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(s));
    return null;
  }
  return s;
}

// Graphite palette.
const COLOURS = ["#060708", "#1c2422", "#82968f", "#e6f6ef"];

export function FieldCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl2", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) {
      canvas?.setAttribute("data-fallback", "");
      return;
    }
    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (name) => gl.getUniformLocation(prog, name);
    const uRes = u("uRes");
    const uTime = u("uTime");
    const uPointer = u("uPointer");
    const uPointerOn = u("uPointerOn");
    ["uC0", "uC1", "uC2", "uC3"].forEach((name, i) => gl.uniform3fv(u(name), hexToRgb(COLOURS[i])));

    const still = prefersReducedMotion();
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, on: 0, ton: 0 };
    let raf = 0;
    let visible = true;
    const start = performance.now() - 40000; // start mid-drift so the first frame already has shape

    const resize = () => {
      // Soft field: render below device resolution, capped near 0.6MP.
      const base = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
      const area = canvas.clientWidth * canvas.clientHeight * base * base;
      const scale = area > 600000 ? base * Math.sqrt(600000 / area) : base;
      const w = Math.max(1, Math.round(canvas.clientWidth * scale));
      const h = Math.max(1, Math.round(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    const draw = (now) => {
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      pointer.on += (pointer.ton - pointer.on) * 0.05;
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform1f(uPointerOn, pointer.on);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // ~30fps is enough for a slow drift
    let last = 0;
    const loop = (now) => {
      if (now - last > 30) {
        last = now;
        draw(now);
      }
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    resize();
    if (still) draw(start + 40000);
    else raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      resize();
      if (still) draw(start + 40000);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === "visible";
      if (visible && !still && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    const onVis = () => {
      visible = document.visibilityState === "visible";
      if (visible && !still && !raf) raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVis);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = (e.clientX - r.left) / r.width;
      pointer.ty = 1 - (e.clientY - r.top) / r.height;
      pointer.ton = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom ? 1 : 0;
    };
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!still && fine) window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      // Keep the context: StrictMode remounts, and a lost context can't be reused.
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return <canvas ref={canvasRef} className={`field ${className}`} aria-hidden="true" />;
}
