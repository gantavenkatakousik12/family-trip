"use client";

const ROUTE = ["Vijayawada", "Delhi", "Varanasi", "Ayodhya", "Vijayawada"];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "80svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: "url('/bg/image2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        overflow: "hidden",
        padding: "0 0 0 0",
      }}
    >
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,4,0,0.55) 0%, rgba(10,4,0,0.4) 40%, rgba(10,4,0,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          padding: "120px 24px 48px",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
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
          Detailed Plan
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
      </div>
    </section>
  );
}
