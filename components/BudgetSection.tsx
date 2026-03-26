"use client";

const BUDGET_3 = [
  {
    item: "Flights: Vijayawada ↔ Delhi (round trip for 3, approx.)",
    cost: "₹40,000–₹50,000",
  },
  {
    item: "Delhi → Varanasi (Shiv Ganga Express, 3AC overnight, for 3)",
    cost: "₹7,200–₹9,900",
  },
  { item: "Varanasi Hotel (2 nights × ₹1,500)", cost: "₹3,000" },
  { item: "Varanasi activities (boat, entry, guide)", cost: "₹2,000" },
  { item: "Varanasi → Ayodhya (private cab, ~5 hrs)", cost: "₹2,500" },
  { item: "Ayodhya Hotel (1 night)", cost: "₹1,000" },
  { item: "Ayodhya activities & local transport", cost: "₹1,500" },
  { item: "Ayodhya → Delhi (cab/bus/train, ~6 hrs, for 3)", cost: "₹3,000–₹4,500" },
  { item: "Food (7 days × ₹200/person/day × 3)", cost: "₹4,200" },
  { item: "Miscellaneous (autos, tips, shopping)", cost: "₹3,000" },
];

const TRAVEL_TIPS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    tip: "Book Sugam Darshan FREE for Ram Mandir at srjbtkshetra.in",
    link: "https://srjbtkshetra.in",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    tip: "Book train tickets on IRCTC app — AP Express (20805) is best daily option",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    tip: "Arrive at Dashashwamedh Ghat by 17:30 for front-row Ganga Aarti seating",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 3l18 18M10.5 10.677A2 2 0 0012 14a2 2 0 001.338-3.476M12 8v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    tip: "Carry cash — many ghats, temples and dhabas are cash-only",
  },
];

export default function BudgetSection() {
  return (
    <section
      id="budget"
      style={{
        background: "white",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#777777" strokeWidth="2" />
              <path d="M14.5 8H10a2 2 0 000 4h4a2 2 0 010 4H9.5M12 6v2M12 16v2" stroke="#777777" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: "12px", color: "#777777", fontWeight: 500 }}>
              Cost Breakdown
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Budget{" "}
            <em style={{ fontStyle: "normal", color: "#c47a2a" }}>Planner</em>
          </h2>
          <p
            style={{
              color: "#777777",
              fontSize: "14px",
              marginTop: "10px",
              lineHeight: 1.6,
              maxWidth: "500px",
            }}
          >
            Flight + train mix. Flights only for Vijayawada ↔ Delhi (round trip),
            trains/cabs between Delhi, Varanasi and Ayodhya. All prices
            approximate for 3 members.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
            maxWidth: "720px",
          }}
          className="md:grid-cols-2"
        >
          {/* Budget table */}
          <div
            style={{
              background: "#f9f8f6",
              borderRadius: "20px",
              border: "1.5px solid #e8e5e0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "18px 20px",
                borderBottom: "1.5px solid #e8e5e0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a" }}>
                For 3 Members
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#2d7a4f",
                  background: "#2d7a4f1a",
                  border: "1px solid #2d7a4f30",
                  borderRadius: "50px",
                  padding: "4px 10px",
                }}
              >
                Budget Mode
              </span>
            </div>
            <div style={{ padding: "0 20px" }}>
              {BUDGET_3.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "11px 0",
                    borderBottom: i < BUDGET_3.length - 1 ? "1px solid #e8e5e0" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#555555",
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {row.item}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.cost}
                  </span>
                </div>
              ))}
            </div>
            {/* Total */}
            <div
              style={{
                padding: "16px 20px",
                background: "#1a1a1a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>
                Total Estimate
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#f0a030",
                }}
              >
                ₹70,000–₹85,000
              </span>
            </div>
          </div>

          {/* Tips + upgrade note */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Upgrade note */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e0e00, #3a1800)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#f0a030",
                  marginBottom: "8px",
                }}
              >
                📝 Budget Note
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Flight budget is based on recent searches: around
                <strong style={{ color: "#f0a030" }}> ₹45,000</strong> round trip
                for 3 members (Vijayawada ↔ Delhi). Prices change a lot — check
                once with your exact dates on your preferred booking app.
              </p>
            </div>

            {/* Travel tips */}
            <div
              style={{
                background: "#f9f8f6",
                borderRadius: "16px",
                border: "1.5px solid #e8e5e0",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  marginBottom: "14px",
                }}
              >
                Quick Tips
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {TRAVEL_TIPS.map((t, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        color: "#c47a2a",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {t.icon}
                    </div>
                    <div style={{ fontSize: "12px", color: "#555555", lineHeight: 1.5 }}>
                      {t.link ? (
                        <>
                          {t.tip.replace(/ at .*$/, "")}{" "}
                          <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#c47a2a",
                              fontWeight: 600,
                              textDecoration: "none",
                            }}
                          >
                            srjbtkshetra.in ↗
                          </a>
                        </>
                      ) : (
                        t.tip
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
