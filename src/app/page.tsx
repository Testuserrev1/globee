"use client";

import { useEffect, useState } from "react";

const DISPLAY_DURATION_MS = 5000;

function Globe() {
  return (
    <div className="globe-wrap" aria-hidden="true">
      <div className="globe-orbit globe-orbit-one" />
      <div className="globe-orbit globe-orbit-two" />
      <div className="globe">
        <span className="globe-line globe-line-horizontal" />
        <span className="globe-line globe-line-vertical" />
        <span className="globe-land globe-land-one" />
        <span className="globe-land globe-land-two" />
        <span className="globe-land globe-land-three" />
      </div>
    </div>
  );
}

export default function Home() {
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    if (!isExploring) return;

    const timeoutId = window.setTimeout(() => {
      setIsExploring(false);
    }, DISPLAY_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isExploring]);

  return (
    <main className="hello-page">
      <div className="ambient-glow ambient-glow-top" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-bottom" aria-hidden="true" />

      <section className="hello-card" aria-live="polite">
        <p className="eyebrow">A tiny hello from here</p>

        {isExploring ? (
          <div className="experience-state">
            <Globe />
            <p className="state-label">Hello, world</p>
            <p className="state-detail">Taking a quick look around...</p>
          </div>
        ) : (
          <div className="cta-state">
            <h1>Hello<span className="period">.</span></h1>
            <p className="intro">A small invitation to see a little more of the world.</p>
            <button type="button" className="hello-button" onClick={() => setIsExploring(true)}>
              <span>Show me the world</span>
              <span className="button-arrow" aria-hidden="true">↗</span>
            </button>
          </div>
        )}

        <div className="card-footer">
          <span className="footer-dot" aria-hidden="true" />
          <span>{isExploring ? "World view active" : "Ready when you are"}</span>
        </div>
      </section>
    </main>
  );
}
