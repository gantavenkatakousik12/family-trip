import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GVK Family Trips � North India Pilgrimage",
  description:
    "7-Day North India Pilgrimage: Vijayawada to Delhi to Varanasi to Ayodhya. Day-wise itinerary, places, maps, and video guides.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
