"use client";

import { useEffect, useState } from "react";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  accent: "#ffd60a",
  fontPair: "instrument-geist",
  dark: false,
} /*EDITMODE-END*/;

const ACCENTS = [
  { label: "Amber", val: "#ffd60a" },
  { label: "Ember", val: "#ff5722" },
  { label: "Mint", val: "#00d4aa" },
  { label: "Iris", val: "#7c5cff" },
  { label: "Ink", val: "#141311" },
];

const FONT_PAIRS = [
  { id: "instrument-geist", label: "Instrument + Geist", display: '"Instrument Serif"', body: '"Geist"' },
  { id: "fraunces-inter", label: "Fraunces + Inter", display: '"Fraunces"', body: '"Inter"' },
  { id: "jetbrains-inter", label: "JetBrains + Inter", display: '"JetBrains Mono"', body: '"Inter"' },
  { id: "eb-geist", label: "EB Garamond + Geist", display: '"EB Garamond"', body: '"Geist"' },
];

export default function Tweaks({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  const [active, setActive] = useState(false);
  const [accent, setAccent] = useState(TWEAK_DEFAULTS.accent);
  const [fontPair, setFontPair] = useState(TWEAK_DEFAULTS.fontPair);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const data = e.data as { type?: string } | undefined;
      if (data?.type === "__activate_edit_mode") setActive(true);
      if (data?.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--accent", accent);
    root.setProperty("--accent-soft", accent + "33");
    root.setProperty("--accent-ink", accent === "#141311" ? "#f7f4ee" : "#141311");
  }, [accent]);

  useEffect(() => {
    const pair = FONT_PAIRS.find((p) => p.id === fontPair) || FONT_PAIRS[0];
    const root = document.documentElement.style;
    root.setProperty("--f-display", `${pair.display}, Georgia, serif`);
    root.setProperty("--f-body", `${pair.body}, -apple-system, sans-serif`);
  }, [fontPair]);

  if (!active) return null;
  return (
    <div className="tweaks">
      <h5>
        Tweaks{" "}
        <span className="x" onClick={() => setActive(false)}>
          ×
        </span>
      </h5>
      <div className="tweak-group">
        <label>Accent color</label>
        <div className="swatches">
          {ACCENTS.map((a) => (
            <div
              key={a.val}
              className={`swatch ${accent === a.val ? "active" : ""}`}
              style={{ background: a.val }}
              title={a.label}
              onClick={() => {
                setAccent(a.val);
                window.parent.postMessage(
                  { type: "__edit_mode_set_keys", edits: { accent: a.val } },
                  "*"
                );
              }}
            />
          ))}
        </div>
      </div>
      <div className="tweak-group">
        <label>Typography</label>
        <div className="font-options">
          {FONT_PAIRS.map((p) => (
            <button
              key={p.id}
              className={`font-opt ${fontPair === p.id ? "active" : ""}`}
              onClick={() => {
                setFontPair(p.id);
                window.parent.postMessage(
                  { type: "__edit_mode_set_keys", edits: { fontPair: p.id } },
                  "*"
                );
              }}
              style={{ fontFamily: p.display + ", serif" }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <div className="tweak-group">
        <label>Theme</label>
        <div className="font-options">
          <button
            className={`font-opt ${!dark ? "active" : ""}`}
            onClick={() => setDark(false)}
          >
            Light
          </button>
          <button
            className={`font-opt ${dark ? "active" : ""}`}
            onClick={() => setDark(true)}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
