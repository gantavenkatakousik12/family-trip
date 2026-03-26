import imagesPinsRaw from "../images-pins.json";
import youtubeVideosRaw from "../youtube-videos.json";

// ─── Location types ───────────────────────────────────────────────────────────
export type Location = {
  name: string;
  coordinates: { lat: number; lng: number };
  map_link: string;
};

export type LocationsData = {
  varanasi: Location[];
  ayodhya: Location[];
  delhi: Location[];
  agra_optional: Location[];
  transport_nodes: Location[];
};

export const locations: LocationsData = imagesPinsRaw as LocationsData;

// ─── Video types ──────────────────────────────────────────────────────────────
export type Video = {
  title: string;
  language: string;
  purpose: string;
  youtube_url: string;
};

export type VideoCategory =
  | "full_trip_overview"
  | "varanasi"
  | "ganga_aarti"
  | "ayodhya"
  | "transport_and_navigation";

export type VideosData = Record<VideoCategory, Video[]>;

export const videos: VideosData = (youtubeVideosRaw as { video_references: VideosData })
  .video_references;

export function getYouTubeId(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : "";
}

export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

// ─── Itinerary types ──────────────────────────────────────────────────────────
export type Activity = {
  time?: string;
  text: string;
  highlight?: boolean;
  tip?: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  subtitle: string;
  city: string;
  cityLabel: string;
  accentColor: string;
  bgGradient: string;
  activities: Activity[];
};

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Night Departure",
    subtitle: "Bhimavaram → Vijayawada",
    city: "vijayawada",
    cityLabel: "Vijayawada",
    accentColor: "#2d7a4f",
    bgGradient: "linear-gradient(135deg, #1a2e1f, #2d4a30)",
    activities: [
      { time: "Evening", text: "Travel Bhimavaram → Vijayawada Junction" },
      {
        time: "03:40 AM",
        text: "Board AP Express (20805) or Tamil Nadu SF (12621) from BZA",
        highlight: true,
        tip: "Best choice: AP Express — daily, comfortable 3AC",
      },
      { text: "~26 hour journey to New Delhi" },
    ],
  },
  {
    day: 2,
    title: "Train Journey",
    subtitle: "On Train — Central India",
    city: "train",
    cityLabel: "En Route",
    accentColor: "#6a4fa0",
    bgGradient: "linear-gradient(135deg, #1a0a2e, #2a1a40)",
    activities: [
      { text: "Full day rolling through scenic Central India" },
      { text: "Rest, enjoy views through Madhya Pradesh & UP" },
      {
        text: "Option: Duronto Express (12269) departs 12:20 PM Day 1 — arrives Delhi morning",
        highlight: false,
      },
    ],
  },
  {
    day: 3,
    title: "Delhi Arrival",
    subtitle: "Delhi Sightseeing (Optional)",
    city: "delhi",
    cityLabel: "New Delhi",
    accentColor: "#1a5a9a",
    bgGradient: "linear-gradient(135deg, #0a1828, #1a3050)",
    activities: [
      { time: "Morning", text: "Arrive New Delhi (NDLS / NZM)" },
      {
        time: "Morning/Afternoon",
        text: "India Gate, Red Fort, Chandni Chowk street food",
        highlight: true,
      },
      {
        time: "20:05",
        text: "Board Shiv Ganga Express (12560) → arrive Varanasi 06:10 Day 4",
        highlight: true,
        tip: "Best pick — overnight train saves a hotel night",
      },
    ],
  },
  {
    day: 4,
    title: "Arrive Varanasi",
    subtitle: "Ghats + Grand Ganga Aarti",
    city: "varanasi",
    cityLabel: "Varanasi",
    accentColor: "#c47a2a",
    bgGradient: "linear-gradient(135deg, #1e0e00, #3a1e05)",
    activities: [
      {
        time: "06:10 AM",
        text: "Arrive Varanasi, check-in near Dashashwamedh Ghat area",
      },
      {
        time: "06:30–08:00",
        text: "Sunrise boat ride on the Ganges ⭐",
        highlight: true,
        tip: "₹200–₹400/person shared • ₹800–₹1,500 private for group",
      },
      {
        time: "08:00–10:00",
        text: "Kashi Vishwanath Temple darshan — arrive early to beat crowds",
        highlight: true,
      },
      { time: "10:00–13:00", text: "Manikarnika Ghat, Assi Ghat walk" },
      { time: "Afternoon", text: "Rest at hotel" },
      {
        time: "18:00–19:30",
        text: "Grand Ganga Aarti at Dashashwamedh Ghat ⭐⭐",
        highlight: true,
        tip: "Most spectacular. Arrive by 17:30 for good seating",
      },
    ],
  },
  {
    day: 5,
    title: "Full Varanasi Day",
    subtitle: "Temples, Sarnath + Night Departure",
    city: "varanasi",
    cityLabel: "Varanasi",
    accentColor: "#c47a2a",
    bgGradient: "linear-gradient(135deg, #1e0e00, #3a1e05)",
    activities: [
      {
        time: "05:30–07:00",
        text: "Early morning Ghat walk: Assi → Dashashwamedh → Manikarnika",
      },
      { time: "07:00–08:00", text: "Morning Aarti at Assi Ghat (quieter, spiritual)" },
      {
        time: "08:00–10:00",
        text: "Sarnath Buddhist site — Dhamek Stupa, Deer Park",
        highlight: true,
        tip: "10 km from Varanasi — 2 hrs. Grab an auto",
      },
      {
        time: "10:30–12:00",
        text: "Kashi Vishwanath Corridor, Annapurna Temple",
      },
      {
        time: "12:00–13:00",
        text: "Lunch at Deena Chat Bhandar — famous Kashi kachori & chaat",
        tip: "Don't skip!",
      },
      {
        time: "13:00–17:00",
        text: "BHU Vishwanath Temple, Durga Kund Mandir, Ramnagar Fort (by boat)",
      },
      {
        time: "18:00–20:00",
        text: "Evening Ganga Aarti Day 2 — you know the flow now ⭐",
        highlight: true,
      },
      {
        time: "21:00–22:00",
        text: "Depart Varanasi → Ayodhya (overnight cab/bus, ~5 hrs)",
        highlight: true,
        tip: "Private cab ₹2,500–₹4,000 total for group",
      },
    ],
  },
  {
    day: 6,
    title: "Ayodhya Pilgrimage",
    subtitle: "Ram Mandir + Full Day",
    city: "ayodhya",
    cityLabel: "Ayodhya",
    accentColor: "#9a3a1a",
    bgGradient: "linear-gradient(135deg, #1e0500, #3a1005)",
    activities: [
      { time: "05:00 AM", text: "Reach Ayodhya, freshen up at hotel/dharamshala" },
      {
        time: "05:30 AM",
        text: "Hanuman Garhi Temple ⭐ — 76 steps, panoramic view of Ayodhya",
        highlight: true,
        tip: "Tradition: visit Hanuman Garhi before Ram Mandir",
      },
      {
        time: "07:00–09:00",
        text: "Ram Janmabhoomi / Ram Mandir ⭐⭐⭐",
        highlight: true,
        tip: "Book Sugam Darshan FREE online at srjbtkshetra.in — saves queues",
      },
      {
        time: "09:30–12:30",
        text: "Kanak Bhawan (golden temple), Dashrath Mahal, Nageshwarnath Temple",
      },
      { time: "12:30–14:00", text: "Sita Ki Rasoi, Lunch (free Prasad at temples)" },
      {
        time: "15:00–16:30",
        text: "Ram Ki Paidi Ghats / Saryu River front walk",
        highlight: true,
      },
      {
        time: "17:00–18:30",
        text: "Saryu River Evening Aarti ⭐⭐ (similar to Varanasi)",
        highlight: true,
      },
      {
        time: "19:00–20:00",
        text: "Guptar Ghat — where Lord Rama took Jal Samadhi",
      },
    ],
  },
  {
    day: 7,
    title: "Return Journey",
    subtitle: "Ayodhya → Delhi → Vijayawada",
    city: "vijayawada",
    cityLabel: "Vijayawada",
    accentColor: "#2d7a4f",
    bgGradient: "linear-gradient(135deg, #1a2e1f, #2d4a30)",
    activities: [
      {
        text: "Option A: Train Ayodhya → Delhi (~7–8 hrs) + Delhi → Vijayawada overnight",
      },
      {
        text: "Option B (Recommended): Cab → Delhi Airport → Flight to Vijayawada",
        highlight: true,
        tip: "IndiGo/Air India: ₹3,500–₹6,000/person. ~2 hrs flight",
      },
      {
        text: "Budget check: 3 members full trip ≈ ₹75,000–₹95,000 ✅",
        highlight: true,
      },
      { text: "Arrive Vijayawada → Bhimavaram/Chirala by bus/cab" },
    ],
  },
];

// ─── City color map ───────────────────────────────────────────────────────────
export const cityColors: Record<string, string> = {
  varanasi: "#c47a2a",
  ayodhya: "#9a3a1a",
  delhi: "#1a5a9a",
  agra_optional: "#6a4fa0",
  transport_nodes: "#4a7a6a",
};

export const cityGradients: Record<string, string> = {
  varanasi: "linear-gradient(135deg, #3a1e05, #6a3a0a)",
  ayodhya: "linear-gradient(135deg, #3a1005, #6a2010)",
  delhi: "linear-gradient(135deg, #0a1828, #1a3050)",
  agra_optional: "linear-gradient(135deg, #1a0a2e, #302050)",
  transport_nodes: "linear-gradient(135deg, #0a1e1a, #1a3530)",
};

export const videoCategoryLabels: Record<VideoCategory, string> = {
  full_trip_overview: "Full Trip Overview",
  varanasi: "Varanasi",
  ganga_aarti: "Ganga Aarti",
  ayodhya: "Ayodhya",
  transport_and_navigation: "Transport & Navigation",
};
