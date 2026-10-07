import { ImageResponse } from "next/og";

export const alt = "Xamzayevich — Senior Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "radial-gradient(circle at 20% 10%, #2a2470 0%, #05060a 55%)", color: "#f4f5f8" }}>
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#8b90a0" }}>XAMZAYEVICH.UZ</div>
        <div style={{ fontSize: 120, fontWeight: 700, marginTop: 24, letterSpacing: -4 }}>Xamzayevich</div>
        <div style={{ fontSize: 60, marginTop: 8, color: "#7aa2ff" }}>Senior Developer</div>
      </div>
    ),
    size,
  );
}
