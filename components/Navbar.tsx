"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Itinerary", href: "#itinerary" },
  { label: "Places", href: "#places" },
  { label: "Videos", href: "#videos" },
  { label: "Budget", href: "#budget" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src="/logo/image.png"
            alt="Varanasi Logo"
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <div
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            GVK Family Trips
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>
            Family Yatra 2026
          </div>
        </div>
      </a>

      {/* Desktop pill nav */}
      <div
        className="hidden md:flex"
        style={{
          alignItems: "center",
          gap: "2px",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "50px",
          padding: "5px 6px",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "13px",
              padding: "7px 18px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 400,
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex md:hidden"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "10px",
          padding: "9px 10px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Toggle menu"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          {open ? (
            <>
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <line
                x1="3"
                y1="7"
                x2="21"
                y2="7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="3"
                y1="17"
                x2="21"
                y2="17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "72px",
            left: "16px",
            right: "16px",
            background: "rgba(15,8,0,0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
            padding: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.85)",
                fontSize: "14px",
                fontWeight: 400,
                padding: "13px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
