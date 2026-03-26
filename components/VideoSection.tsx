"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import {
  videos,
  videoCategoryLabels,
  getYouTubeThumbnail,
  getYouTubeId,
  type VideoCategory,
  type Video,
} from "../data/trip-data";

const CATEGORIES: VideoCategory[] = [
  "full_trip_overview",
  "varanasi",
  "ganga_aarti",
  "ayodhya",
  "transport_and_navigation",
];

const CATEGORY_ICONS: Record<VideoCategory, ReactElement> = {
  full_trip_overview: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  varanasi: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L9 6H4v2h16V6h-5L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 8v12M18 8v12M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ganga_aarti: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  ayodhya: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  transport_and_navigation: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 11h16" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

const LANG_COLORS: Record<string, string> = {
  Telugu: "#2d7a4f",
  Hindi: "#c47a2a",
  English: "#1a5a9a",
  "Hindi/English": "#6a4fa0",
};

function VideoCard({ video }: { video: Video }) {
  const thumbnailUrl = getYouTubeThumbnail(video.youtube_url);
  const videoId = getYouTubeId(video.youtube_url);
  const langColor = LANG_COLORS[video.language] ?? "#777777";

  return (
    <div
      style={{
        borderRadius: "16px",
        border: "1.5px solid #e8e5e0",
        overflow: "hidden",
        background: "white",
        transition: "box-shadow 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Thumbnail */}
      <a
        href={video.youtube_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          position: "relative",
          height: "150px",
          flexShrink: 0,
          overflow: "hidden",
          background: "#1a1a1a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          width={480}
          height={360}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.04)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Play overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.3)",
            transition: "background 0.2s",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#1a1a1a"
              style={{ marginLeft: 2 }}
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
        </div>
      </a>

      {/* Card body */}
      <div
        style={{
          padding: "14px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        {/* Language + purpose badges */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              color: langColor,
              background: `${langColor}14`,
              border: `1px solid ${langColor}30`,
              borderRadius: "50px",
              padding: "3px 8px",
            }}
          >
            {video.language}
          </span>
        </div>

        <h4
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {video.title}
        </h4>

        <p
          style={{
            fontSize: "12px",
            color: "#777777",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {video.purpose}
        </p>

        <a
          href={video.youtube_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#1a1a1a",
            textDecoration: "none",
            marginTop: "auto",
            paddingTop: "4px",
          }}
        >
          Watch on YouTube
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
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

export default function VideoSection() {
  const [activeCategory, setActiveCategory] =
    useState<VideoCategory>("full_trip_overview");

  const categoryVideos = videos[activeCategory] ?? [];

  return (
    <section
      id="videos"
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <polygon
                points="23 7 16 12 23 17 23 7"
                stroke="#777777"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="5"
                width="15"
                height="14"
                rx="2"
                stroke="#777777"
                strokeWidth="2"
              />
            </svg>
            <span style={{ fontSize: "12px", color: "#777777", fontWeight: 500 }}>
              Video Guides
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
            Watch Before{" "}
            <em style={{ fontStyle: "normal", color: "#c47a2a" }}>You Go</em>
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
            Curated videos in Telugu, Hindi & English — temple darshan, transport
            tips, and navigation help.
          </p>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "4px",
            marginBottom: "32px",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "9px 18px",
                  borderRadius: "50px",
                  border: isActive
                    ? "2px solid #1a1a1a"
                    : "1.5px solid #e8e5e0",
                  background: isActive ? "#1a1a1a" : "white",
                  color: isActive ? "white" : "#555555",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: isActive ? "rgba(255,255,255,0.7)" : "#777777" }}>
                  {CATEGORY_ICONS[cat]}
                </span>
                {videoCategoryLabels[cat]}
              </button>
            );
          })}
        </div>

        {/* Video grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {categoryVideos.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>

        {/* No videos fallback */}
        {categoryVideos.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#aaaaaa",
              fontSize: "14px",
            }}
          >
            No videos available for this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
