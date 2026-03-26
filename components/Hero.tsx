"use client";

const ROUTE = ["Vijayawada", "Delhi", "Varanasi", "Ayodhya", "Vijayawada"];

const STATS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: "7 Days",
    label: "3 Nights Train + 2 Hotels",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
        <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: "3–4 Members",
    label: "Family Pilgrimage",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    value: "4 Cities",
    label: "Delhi · Varanasi · Ayodhya",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: "₹80K–₹90K",
    label: "For 3 Members (Budget Mode)",
  },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background:
          "linear-gradient(160deg, #0d0400 0%, #200a00 20%, #3a1800 45%, #2a0e00 70%, #0d0300 100%)",
        overflow: "hidden",
        padding: "0 0 0 0",
      }}
    >
      {/* Decorative glow orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(196,122,42,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(154,58,26,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Subtle dot grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,200,100,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "120px 24px 48px",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(196,122,42,0.2)",
            border: "1px solid rgba(196,122,42,0.4)",
            borderRadius: "50px",
            padding: "6px 14px 6px 8px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "rgba(196,122,42,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0a030">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span
            style={{ color: "rgba(255,200,100,0.9)", fontSize: "12px", fontWeight: 500 }}
          >
            North India Pilgrimage 2026
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            color: "white",
            fontSize: "clamp(36px, 7vw, 62px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          GVK Family{" "}
          <em
            style={{
              fontStyle: "normal",
              background: "linear-gradient(90deg, #f0a030, #c47a2a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Yatra
          </em>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(14px, 2vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: "520px",
            marginBottom: "36px",
          }}
        >
          7 days · 4 sacred cities · everything you need from train times and temple
          darshan to maps and video guides.
        </p>

        {/* Route strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0",
            marginBottom: "40px",
          }}
        >
          {ROUTE.map((city, i) => (
            <div
              key={city + i}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                style={{
                  color: i === 0 || i === ROUTE.length - 1
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(240,160,48,0.9)",
                  fontSize: "12px",
                  fontWeight: i === 0 || i === ROUTE.length - 1 ? 400 : 600,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background:
                    i === 0 || i === ROUTE.length - 1
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(196,122,42,0.15)",
                  border:
                    i === 0 || i === ROUTE.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(196,122,42,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                {city}
              </span>
              {i < ROUTE.length - 1 && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ margin: "0 2px", flexShrink: 0 }}
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}>
          <a
            href="#itinerary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#c47a2a",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              padding: "13px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#a8621e")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#c47a2a")
            }
          >
            View Day Plan
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#places"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "13px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
          >
            Explore Places
          </a>
        </div>

        {/* Stat cards row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ color: "rgba(240,160,48,0.85)" }}>{s.icon}</div>
              <div>
                <div
                  style={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "11px",
                    marginTop: "3px",
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
