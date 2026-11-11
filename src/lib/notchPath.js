// Rounded clip paths for the carved panels. Points run clockwise; an optional third value sets that corner's radius.
export function roundedPolygon(points, radius) {
  const n = points.length;
  let d = "";
  for (let i = 0; i < n; i++) {
    const prev = points[(i - 1 + n) % n];
    const cur = points[i];
    const next = points[(i + 1) % n];
    const inLen = Math.hypot(cur[0] - prev[0], cur[1] - prev[1]);
    const outLen = Math.hypot(next[0] - cur[0], next[1] - cur[1]);
    if (inLen < 0.5 || outLen < 0.5) continue;
    const r = Math.max(0, Math.min(cur[2] ?? radius, inLen / 2, outLen / 2));
    const inDir = [(cur[0] - prev[0]) / inLen, (cur[1] - prev[1]) / inLen];
    const outDir = [(next[0] - cur[0]) / outLen, (next[1] - cur[1]) / outLen];
    const a = [cur[0] - inDir[0] * r, cur[1] - inDir[1] * r];
    const b = [cur[0] + outDir[0] * r, cur[1] + outDir[1] * r];
    // y points down: a positive cross product is a clockwise (convex) turn
    const sweep = inDir[0] * outDir[1] - inDir[1] * outDir[0] > 0 ? 1 : 0;
    d += `${d ? "L" : "M"}${a[0].toFixed(1)} ${a[1].toFixed(1)}A${r.toFixed(1)} ${r.toFixed(1)} 0 0 ${sweep} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  }
  return `${d}Z`;
}

// Hero panel. shelf: top-left nav bite; steps: bottom-left staircase ({ top, right } per line);
// topRight/bottomRight: tile bites with `inner` radius; scale < 1 shrinks it for the opening.
export function framePath(w, h, { shelf, steps, topRight, bottomRight, inner, scale = 1 }, radius) {
  const pts = [];
  pts.push(shelf ? [shelf.w, 0] : [0, 0]);
  if (topRight) {
    pts.push([w - topRight.w, 0], [w - topRight.w, topRight.h, inner], [w, topRight.h]);
  } else {
    pts.push([w, 0]);
  }
  if (bottomRight) {
    pts.push([w, h - bottomRight.h], [w - bottomRight.w, h - bottomRight.h, inner], [w - bottomRight.w, h]);
  } else {
    pts.push([w, h]);
  }
  if (steps?.length) {
    const last = steps[steps.length - 1];
    pts.push([last.right, h]);
    for (let i = steps.length - 1; i >= 0; i--) {
      const s = steps[i];
      const above = steps[i - 1];
      pts.push([s.right, s.top]);
      pts.push(above ? [above.right, s.top] : [0, s.top]);
    }
  } else {
    pts.push([0, h]);
  }
  if (shelf) pts.push([0, shelf.h], [shelf.w, shelf.h]);
  if (scale !== 1) {
    const cx = w / 2;
    const cy = h / 2;
    return roundedPolygon(
      pts.map(([x, y, r]) => [cx + (x - cx) * scale, cy + (y - cy) * scale, r]),
      radius * scale,
    );
  }
  return roundedPolygon(pts, radius);
}

// Card with a bottom-right bite for a round button.
export function cardPath(w, h, bite, radius) {
  return roundedPolygon(
    [
      [0, 0],
      [w, 0],
      [w, h - bite.h],
      [w - bite.w, h - bite.h],
      [w - bite.w, h],
      [0, h],
    ],
    radius,
  );
}
