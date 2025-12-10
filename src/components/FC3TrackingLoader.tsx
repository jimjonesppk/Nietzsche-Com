import React from "react";

/**
 * FC3-style "TRACKING" loader component (fixed animation reach)
 * Single-file React component — drop into your project and import.
 * Props:
 *  - label: text shown to the left (default: "TRACKING")
 *  - width: width of the bar (default: 260)
 *  - height: height of the bar (default: 18)
 *  - speed: seconds for a full back-and-forth cycle (default: 2.1)
 *  - bg: background/track color
 *  - accent: moving block color
 */

export default function FC3TrackingLoader({
  label = "TRACKING",
  width = 260,
  height = 18,
  speed = 2.1,
  bg = "rgba(255,255,255,0.06)",
  accent = "rgba(255,255,255,0.95)",
}) {
  const barStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  // width of the moving segment in px. Keep a minimum so it looks good at small sizes.
  const segmentWidth = Math.max(12, Math.floor(width * 0.18));
  // compute rightmost position such that the segment's right edge lines up with the track's right edge
  const maxLeft = width - segmentWidth;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div style={{ color: "#fff", fontFamily: "monospace", letterSpacing: 1.5 }}>
        {label}
      </div>

      <div
        className="fc3-tracking-wrap"
        style={barStyle}
        aria-hidden
      >
        <div className="fc3-track" />
        <div
          className="fc3-segment"
          style={{ width: segmentWidth }}
        />
        {/* ticks in the middle to mimic the image */}
        <div className="fc3-tick left" />
        <div className="fc3-tick right" />

        <style>{`
          .fc3-tracking-wrap{ 
            position: relative;
            box-sizing: border-box;
            border-radius: 2px;
            overflow: hidden;
            background: ${bg};
            border: 1px solid rgba(255,255,255,0.16);
            display: inline-block;
          }

          .fc3-track{
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .fc3-segment{
            position: absolute;
            top: 50%;
            left: 0px; /* start flush to left */
            transform: translateY(-50%);
            height: calc(100% - 4px);
            border-radius: 1px;
            background: linear-gradient(90deg, rgba(255,255,255,0.98), rgba(240,240,240,0.95));
            box-shadow: 0 0 8px rgba(255,255,255,0.08) inset;
            animation: fc3-slide ${speed}s ease-in-out infinite;
          }

          /* small twin center ticks */
          .fc3-tick{
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2px;
            margin: auto 0;
            height: 70%;
            background: rgba(255,255,255,0.18);
            mix-blend-mode: screen;
          }
          /* nudge the ticks slightly toward center so they visually match the original */
          .fc3-tick.left{ left: calc(50% - 10px); }
          .fc3-tick.right{ left: calc(50% + 8px); }


          @keyframes fc3-slide{
            0%{ left: 0px; }
            25%{ left: calc(${Math.round(maxLeft * 0.45)}px); }
            50%{ left: ${Math.round(maxLeft)}px; }
            75%{ left: calc(${Math.round(maxLeft * 0.45)}px); }
            100%{ left: 0px; }
          }

          /* respect reduced motion */
          @media (prefers-reduced-motion: reduce){
            .fc3-segment{ animation: none; }
          }
        `}</style>
      </div>
    </div>
  );
}
