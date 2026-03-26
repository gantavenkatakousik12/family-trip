"use client";

import { useState } from "react";
import { itinerary, type ItineraryDay, type Activity } from "../data/trip-data";

function CityIcon({ city }: { city: string }) {
  if (city === "train") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4 11h16" stroke="currentColor" strokeWidth="2" />
        <circle cx="8.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (city === "delhi") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M5 21V9l7-6 7 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  // Temple icon for spiritual cities
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L9 6H4v2h16V6h-5L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 8v12M10 8v12M14 8v12M18 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ActivityRow({ activity }: { activity: Activity }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        padding: "10px 0",
        borderBottom: "1px solid #f0ede8",
      }}
    >
      {/* Time badge */}
      <div style={{ flexShrink: 0, minWidth: 72 }}>
        {activity.time && (
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: "#777777",
              background: "#f0ede8",
              borderRadius: "6px",
              padding: "3px 7px",
              lineHeight: 1.4,
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {activity.time}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "13px",
            fontWeight: activity.highlight ? 600 : 400,
            color: activity.highlight ? "#1a1a1a" : "#444444",
            lineHeight: 1.5,
          }}
        >
          {activity.highlight && (
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c47a2a",
                marginRight: 6,
                verticalAlign: "middle",
                flexShrink: 0,
              }}
            />
          )}
          {activity.text}
        </div>
        {activity.tip && (
          <div
            style={{
              marginTop: "5px",
              fontSize: "11px",
              color: "#c47a2a",
              fontWeight: 500,
              display: "flex",
              alignItems: "flex-start",
              gap: "5px",
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              style={{ flexShrink: 0, marginTop: 1 }}
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {activity.tip}
          </div>
        )}
      </div>
    </div>
  );
}

function DayCard({
  day,
  isSelected,
  onClick,
}: {
  day: ItineraryDay;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: 80,
        padding: "12px 8px",
        borderRadius: "14px",
        border: isSelected
          ? `2px solid ${day.accentColor}`
          : "2px solid #e8e5e0",
        background: isSelected ? day.bgGradient : "white",
        cursor: "pointer",
        textAlign: "center",
        transition: "all 0.2s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: isSelected ? "rgba(255,255,255,0.6)" : "#aaaaaa",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Day
      </span>
      <span
        style={{
          fontSize: "22px",
          fontWeight: 800,
          lineHeight: 1,
          color: isSelected ? "white" : "#1a1a1a",
        }}
      >
        {day.day}
      </span>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 500,
          color: isSelected ? "rgba(255,255,255,0.55)" : "#777777",
          lineHeight: 1.3,
          maxWidth: 68,
          textAlign: "center",
        }}
      >
        {day.cityLabel}
      </span>
    </button>
  );
}

export default function Itinerary() {
  const [selectedDay, setSelectedDay] = useState(0);
  const day = itinerary[selectedDay];

  return (
    <section
      id="itinerary"
      style={{
        background: "#f9f8f6",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#777777">
              <rect x="3" y="4" width="18" height="18" rx="3" stroke="#777777" strokeWidth="2" fill="none" />
              <line x1="3" y1="9" x2="21" y2="9" stroke="#777777" strokeWidth="2" />
            </svg>
            <span style={{ fontSize: "12px", color: "#777777", fontWeight: 500 }}>
              Day-by-Day Plan
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
            Your 7-Day{" "}
            <em style={{ fontStyle: "normal", color: "#c47a2a" }}>Itinerary</em>
          </h2>
          <p
            style={{
              color: "#777777",
              fontSize: "14px",
              marginTop: "10px",
              lineHeight: 1.6,
              maxWidth: "520px",
            }}
          >
            Select a day to see the full schedule, tips, and timing.
          </p>
        </div>

        {/* Day selector scrollable row */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "8px",
            marginBottom: "28px",
            scrollbarWidth: "none",
          }}
        >
          {itinerary.map((d, i) => (
            <DayCard
              key={d.day}
              day={d}
              isSelected={i === selectedDay}
              onClick={() => setSelectedDay(i)}
            />
          ))}
        </div>

        {/* Selected day detail */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            border: "1.5px solid #e8e5e0",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
          }}
        >
          {/* Day header */}
          <div
            style={{
              background: day.bgGradient,
              padding: "24px 28px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Day {day.day}
                </span>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.3)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "11px",
                  }}
                >
                  <CityIcon city={day.city} />
                  {day.cityLabel}
                </span>
              </div>
              <h3
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {day.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "13px",
                  marginTop: "4px",
                }}
              >
                {day.subtitle}
              </p>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <CityIcon city={day.city} />
            </div>
          </div>

          {/* Activities */}
          <div style={{ padding: "0 28px 8px" }}>
            {day.activities.map((activity, i) => (
              <ActivityRow key={i} activity={activity} />
            ))}
          </div>

          {/* Footer nav */}
          <div
            style={{
              padding: "16px 28px 20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
              disabled={selectedDay === 0}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "1.5px solid #e8e5e0",
                borderRadius: "50px",
                padding: "8px 16px",
                fontSize: "13px",
                color: selectedDay === 0 ? "#cccccc" : "#1a1a1a",
                cursor: selectedDay === 0 ? "not-allowed" : "pointer",
                fontWeight: 500,
                transition: "all 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous
            </button>
            <button
              onClick={() =>
                setSelectedDay(Math.min(itinerary.length - 1, selectedDay + 1))
              }
              disabled={selectedDay === itinerary.length - 1}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background:
                  selectedDay === itinerary.length - 1 ? "#cccccc" : "#1a1a1a",
                border: "1.5px solid #1a1a1a",
                borderRadius: "50px",
                padding: "8px 16px",
                fontSize: "13px",
                color:
                  selectedDay === itinerary.length - 1 ? "#888888" : "white",
                cursor:
                  selectedDay === itinerary.length - 1
                    ? "not-allowed"
                    : "pointer",
                fontWeight: 500,
                opacity: selectedDay === itinerary.length - 1 ? 0.5 : 1,
                transition: "all 0.15s",
              }}
            >
              Next Day
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
