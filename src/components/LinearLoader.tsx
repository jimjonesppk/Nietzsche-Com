 import React, { type CSSProperties, useEffect, useRef, useState } from "react"

type Props = {
  label?: string
  height?: number
  speed?: number
  segWidthPct?: number
  trackBg?: string
  segBg?: string
  maxWidth?: number | string
}

export default function LinearLoader({
  label = "TRACKING",
  height = 18,
  speed = 1.6,
  segWidthPct = 0.10, // slimmer by default to match reference
  trackBg = "rgba(10,10,10,0.85)",
  segBg = "#d946ef",
  maxWidth,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const segRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const runningRef = useRef(false)

  const [measuredWidth, setMeasuredWidth] = useState(0)

  const segW = Math.max(6, Math.round(measuredWidth * segWidthPct))
  const maxX = Math.max(0, measuredWidth - segW)
  const period = Math.max(150, speed * 1000)

  const maxXRef = useRef(maxX)
  const periodRef = useRef(period)
  maxXRef.current = maxX
  periodRef.current = period

  useEffect(() => {
    const wrapEl = wrapRef.current
    if (!wrapEl) return

    const measure = () => {
      const w = Math.round(wrapEl.getBoundingClientRect().width)
      setMeasuredWidth((prev) => (prev === w ? prev : w))
    }

    const ro = new ResizeObserver(() => measure())
    ro.observe(wrapEl)
    measure()

    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const segEl = segRef.current
    const wrapEl = wrapRef.current
    if (!segEl || !wrapEl) return

    runningRef.current = true
    startRef.current = null

    function step(ts: number) {
      if (!runningRef.current) return
      if (startRef.current == null) startRef.current = ts

      const elapsed = ts - startRef.current
      const t = (elapsed % periodRef.current) / periodRef.current
      const factor = t < 0.5 ? t * 2 : 2 * (1 - t)
      const x = Math.round(factor * maxXRef.current)

      segEl.style.transform = `translateX(${x}px) translateY(-50%)`
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      runningRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      startRef.current = null
    }
  }, [measuredWidth])

  // === Visual styles (tuned to match the reference) ===
  const containerStyle: CSSProperties = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    width: "100%",
  }

  const labelStyle: CSSProperties = {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#E5E7EB",
    letterSpacing: 1.2,
    minWidth: 64,
  }

  // outer shell — gives the outer thin border + slight padding to create double-border look
  const outerStyle: CSSProperties = {
    width: "100%",
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
    padding: 4,
    borderRadius: 8,
    display: "inline-block",
    boxSizing: "border-box",
    // subtle outer stroke (slightly brighter than track)
    border: "1px solid rgba(255,255,255,0.08)",
    background: "transparent",
  }

  // actual track (measured by ResizeObserver via wrapRef)
  const trackStyle: CSSProperties = {
    width: "100%",
    height: `${height}px`,
    borderRadius: 6,
    position: "relative",
    overflow: "hidden",
    // dark recessed track
    background: trackBg,
    // inner border to make it look like inset panel
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
  }

  // moving thin white rectangle
  const segStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateX(0px) translateY(-50%)",
    height: `calc(100% - 6px)`,
    width: `${segW}px`,
    background: segBg,
    borderRadius: 2,
    // give it a faint inner stroke so it reads crisp on dark bg
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
    willChange: "transform",
  }

  // thin center divider (slightly translucent white)
  const centerStyle: CSSProperties = {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 2,
    transform: "translateX(-50%)",
    background: "rgba(255,255,255,0.6)",
    borderRadius: 1,
    mixBlendMode: "screen",
    opacity: 0.95,
  }

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>{label}</div>

      <div style={outerStyle} aria-hidden>
        <div ref={wrapRef} style={trackStyle}>
          <div ref={segRef} style={segStyle} />
          <div style={centerStyle} />
        </div>
      </div>
    </div>
  )
}
