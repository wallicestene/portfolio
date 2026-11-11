/* eslint-disable react/prop-types */
import { useId } from "react";
// Pesapal RDBMS architecture: clients → execute() router → table engine → JSON files.

const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';
const SANS = "var(--font-display)";

const clients = [
  { x: 220, title: "REPL", sub: "npm run repl" },
  { x: 545, title: "REST API", sub: "POST /api/sql" },
  { x: 870, title: "Demo app", sub: "React + axios" },
];
const statements = ["CREATE TABLE", "SELECT", "WHERE", "JOIN", "INSERT", "UPDATE", "DELETE", "DESCRIBE"];
const files = ["rooms.json", "guests.json", "bookings.json"];

function Box({ x, y, w, h, children, active }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" className={`ed-box${active ? " ed-box--active" : ""}`} />
      {children}
    </g>
  );
}

function Label({ y, children }) {
  return (
    <text x="40" y={y} className="ed-label" fontFamily={SANS}>
      {children}
    </text>
  );
}

export function EngineDiagram({ title = "How the Pesapal RDBMS is built" }) {
  const uid = useId().replace(/:/g, "");
  const path = "M365 120 C365 150 690 150 690 180 L690 300 L690 360 L690 510 L690 570";
  return (
    <svg viewBox="0 0 1200 660" className="engine-diagram" role="img" aria-labelledby={`${uid}-t ${uid}-d`}>
      <title id={`${uid}-t`}>{title}</title>
      <desc id={`${uid}-d`}>
        The REPL, a REST API and a demo app send SQL to one execute function. It matches each statement,
        turns WHERE into equality filters and runs JOIN as a nested loop, then hands rows to the table engine,
        which checks types, keys and unique indexes and saves each table as a JSON file.
      </desc>
      <rect width="1200" height="660" className="ed-bg" />

      <Label y="86">Clients</Label>
      {clients.map((c, i) => (
        <Box key={c.title} x={c.x} y={40} w={290} h={80} active={i === 0}>
          <text x={c.x + 24} y={74} className="ed-title" fontFamily={SANS}>{c.title}</text>
          <text x={c.x + 24} y={100} className="ed-sub" fontFamily={MONO}>{c.sub}</text>
        </Box>
      ))}

      <path d="M365 120 C365 150 690 150 690 180" className="ed-wire" />
      <path d="M690 120 L690 180" className="ed-wire" />
      <path d="M1015 120 C1015 150 690 150 690 180" className="ed-wire" />

      <Label y="246">Query layer</Label>
      <Box x={220} y={180} w={940} h={120}>
        <text x={244} y={216} className="ed-title" fontFamily={MONO}>execute(sql)</text>
        <text x={244} y={252} className="ed-tokens" fontFamily={MONO}>
          {statements.map((s, i) => (
            <tspan key={s} dx={i === 0 ? 0 : 22}>{s}</tspan>
          ))}
        </text>
        <text x={244} y={282} className="ed-sub" fontFamily={SANS}>
          Each statement is matched by pattern · WHERE becomes AND-ed equality filters · JOIN runs as a nested loop
        </text>
      </Box>

      <path d="M690 300 L690 360" className="ed-wire" />

      <Label y="441">Table engine</Label>
      <Box x={220} y={360} w={940} h={150}>
        <text x={244} y={398} className="ed-title" fontFamily={MONO}>createTable()</text>
        <text x={244} y={436} className="ed-key" fontFamily={SANS}>Types</text>
        <text x={360} y={436} className="ed-sub" fontFamily={MONO}>INTEGER · TEXT · REAL · BOOLEAN · DATE</text>
        <text x={244} y={464} className="ed-key" fontFamily={SANS}>Keys</text>
        <text x={360} y={464} className="ed-sub" fontFamily={MONO}>PRIMARY KEY · UNIQUE · NOT NULL · AUTOINCREMENT</text>
        <text x={244} y={492} className="ed-key" fontFamily={SANS}>Indexes</text>
        <text x={360} y={492} className="ed-sub" fontFamily={SANS}>a Set per key column, checked on every write</text>
      </Box>

      <path d="M690 510 L690 570" className="ed-wire" />

      <Label y="608">On disk</Label>
      <text x={220} y={556} className="ed-sub" fontFamily={MONO}>data/hotel_db/</text>
      {files.map((f, i) => (
        <Box key={f} x={220 + i * 325} y={570} w={290} h={64}>
          <text x={220 + i * 325 + 24} y={609} className="ed-title ed-title--small" fontFamily={MONO}>{f}</text>
        </Box>
      ))}
      <text x={1160} y={556} className="ed-sub" fontFamily={SANS} textAnchor="end">save() after every write · load() on start</text>

      {/* query packet: REPL → disk */}
      <path id={`${uid}-r`} d={path} fill="none" stroke="none" />
      <circle r="6" className="ed-packet">
        <animateMotion dur="3.6s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.8;1" calcMode="linear">
          <mpath href={`#${uid}-r`} />
        </animateMotion>
      </circle>
    </svg>
  );
}
