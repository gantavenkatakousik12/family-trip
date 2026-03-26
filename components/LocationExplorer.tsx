"use client";

import { useState } from "react";
import {
  locations,
  cityColors,
  cityGradients,
  type Location,
} from "../data/trip-data";

type CityKey = "varanasi" | "ayodhya" | "delhi" | "agra_optional";

const CITIES: { key: CityKey; label: string; emoji: string; desc: string }[] = [
  {
    key: "varanasi",
    label: "Varanasi",
    emoji: "🕉",
    desc: "Ancient city of light — Ghats, Kashi Vishwanath & Ganga Aarti",
  },
  {
    key: "ayodhya",
    label: "Ayodhya",
    emoji: "🛕",
    desc: "Birthplace of Lord Rama — Ram Mandir & Saryu Aarti",
  },
  {
    key: "delhi",
    label: "Delhi",
    emoji: "🏯",
    desc: "Capital transit point — India Gate, Red Fort & street food",
  },
  {
    key: "agra_optional",
    label: "Agra (Optional)",
    emoji: "🏛",
    desc: "Taj Mahal, Agra Fort — add if time permits",
  },
];

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LocationCard({
  location,
  city,
}: {
  location: Location;
  city: CityKey;
}) {
  const color = cityColors[city] ?? "#777777";
  const gradient = cityGradients[city] ?? "linear-gradient(135deg,#333,#555)";

  return (
    <div
      style={{
        borderRadius: "16px",
        border: "1.5px solid #e8e5e0",
        overflow: "hidden",
        background: "white",
        transition: "all 0.2s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.03)")
      }
    >
      {/* Color gradient placeholder */}
      <div
        style={{
          height: "110px",
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle dot pattern */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "12px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <MapPinIcon />
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 16px" }}>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.3,
            marginBottom: "6px",
          }}
        >
          {location.name}
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            marginBottom: "12px",
            fontFamily: "monospace",
          }}
        >
          {location.coordinates.lat.toFixed(4)}, {location.coordinates.lng.toFixed(4)}
        </div>
        <a
          href={location.map_link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 600,
            color: color,
            textDecoration: "none",
            background: `${color}14`,
            border: `1px solid ${color}30`,
            borderRadius: "50px",
            padding: "6px 12px",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${color}22`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${color}14`;
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Open in Maps
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
      </div>
    </div>
  );
}

export default function LocationExplorer() {
  const [activeCity, setActiveCity] = useState<CityKey>("varanasi");

  const cityData = CITIES.find((c) => c.key === activeCity)!;
  const cityLocs: Location[] = locations[activeCity] ?? [];

  return (
    <section
      id="places"
      style={{
        background: "white",
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
            <MapPinIcon />
            <span style={{ fontSize: "12px", color: "#777777", fontWeight: 500 }}>
              Places to Visit
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
            Explore{" "}
            <em style={{ fontStyle: "normal", color: "#c47a2a" }}>
              Locations
            </em>
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
            Tap any card to open Google Maps navigation directly.
          </p>
        </div>

        {/* City tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {CITIES.map((city) => {
            const isActive = activeCity === city.key;
            const color = cityColors[city.key] ?? "#777";
            return (
              <button
                key={city.key}
                onClick={() => setActiveCity(city.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "9px 18px",
                  borderRadius: "50px",
                  border: isActive
                    ? `2px solid ${color}`
                    : "1.5px solid #e8e5e0",
                  background: isActive ? color : "white",
                  color: isActive ? "white" : "#555555",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <span style={{ fontSize: "14px" }}>{city.emoji}</span>
                {city.label}
              </button>
            );
          })}
        </div>

        {/* City description */}
        <div
          style={{
            background: "#f9f8f6",
            border: "1.5px solid #e8e5e0",
            borderRadius: "14px",
            padding: "14px 18px",
            marginBottom: "24px",
            fontSize: "13px",
            color: "#555555",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#1a1a1a" }}>
            {cityData.emoji} {cityData.label}
          </strong>{" "}
          — {cityData.desc}
        </div>

        {/* Location grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "14px",
          }}
        >
          {cityLocs.map((loc) => (
            <LocationCard key={loc.name} location={loc} city={activeCity} />
          ))}
        </div>

        {/* Transport nodes callout */}
        <div
          style={{
            marginTop: "40px",
            background: "linear-gradient(135deg, #0a1828, #1a3050)",
            borderRadius: "20px",
            padding: "24px 28px",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
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
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
              <path d="M12 7v5l3 3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Transport Nodes
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {locations.transport_nodes.map((node) => (
                <a
                  key={node.name}
                  href={node.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.08)")
                  }
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  {node.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
