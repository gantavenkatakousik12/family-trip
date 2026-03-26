"use client";

const QUICK_LINKS = [
  { label: "Day-by-Day Itinerary", href: "#itinerary" },
  { label: "Places to Visit", href: "#places" },
  { label: "Video Guides", href: "#videos" },
  { label: "Budget Planner", href: "#budget" },
];

const KEY_BOOKINGS = [
  { label: "IRCTC Train Booking", href: "https://www.irctc.co.in" },
  { label: "Ram Mandir Darshan", href: "https://srjbtkshetra.in" },
  { label: "Google Maps — Varanasi Ghats", href: "https://www.google.com/maps/search/varanasi+ghats" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "rgba(255,255,255,0.7)",
        padding: "60px 24px 32px",
        borderTop: "1.5px solid #2a2a2a",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: "rgba(196,122,42,0.2)",
                  border: "1px solid rgba(196,122,42,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L9 6H4v2h16V6h-5L12 2z" fill="rgba(240,160,48,0.8)" />
                  <path d="M6 8v12M10 8v12M14 8v12M18 8v12" stroke="rgba(240,160,48,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 20h16" stroke="rgba(240,160,48,0.9)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "15px" }}>
                  GVK Family Trips
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>
                  North India Pilgrimage
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "240px",
              }}
            >
              7-day family pilgrimage: Vijayawada → Delhi → Varanasi → Ayodhya.
              Everything in one place.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              On This App
            </div>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Key bookings */}
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              Book Online
            </div>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {KEY_BOOKINGS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f0a030")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            GVK Family Trips · Personal travel planner. Train fares are approximate — verify on IRCTC.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "12px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
              }
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
