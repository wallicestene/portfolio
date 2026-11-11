/* eslint-disable react/prop-types */

// Rolling digits; remount (or change `id`) to replay.
export function Odometer({ value, id = "" }) {
  return (
    <span className="odo" aria-hidden="true">
      {[...String(value)].map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={`${id}-${i}`} className="odo__col" style={{ "--d": ch, "--i": i }}>
            <span className="odo__reel">
              {"01234567890123456789".split("").map((n, k) => (
                <span key={k}>{n}</span>
              ))}
            </span>
          </span>
        ) : (
          <span key={`${id}-${i}`} className="odo__sym" style={{ "--i": i }}>
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
