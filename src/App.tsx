import { useState, useEffect } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FDFCF9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 1.2s ease",
      }}
    >
      {/* Decorative circle — top right */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "#A8B8A8",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      {/* Decorative circle — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "-250px",
          left: "-250px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          backgroundColor: "#A8B8A8",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 24px",
          maxWidth: "640px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#3D4B3D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                stroke="white"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M12 2C12 2 9 7 9 12s3 10 3 10"
                stroke="white"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M12 2C12 2 15 7 15 12s-3 10-3 10"
                stroke="white"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M2 12h20"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M17 6C14.5 7.5 9.5 7.5 7 6"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M7 18C9.5 16.5 14.5 16.5 17 18"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M8 3.5C10 8 10 16 8 20.5"
                stroke="white"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#1a1a1a",
            }}
          >
            Sweetwater
          </span>
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            opacity: 0.4,
            marginBottom: "48px",
          }}
        >
          Est. 2018 // Alpharetta, GA
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(48px, 8vw, 80px)",
            lineHeight: 0.95,
            margin: "0 0 48px 0",
            color: "#1a1a1a",
          }}
        >
          Something
          <br />
          <em style={{ color: "#3D4B3D" }}>New</em>
          <br />
          is Growing.
        </h1>

        {/* Vertical divider */}
        <div
          style={{
            width: "1px",
            height: "64px",
            backgroundColor: "#1a1a1a",
            opacity: 0.15,
            marginBottom: "48px",
          }}
        />

        {/* Body message */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(26, 26, 26, 0.55)",
            maxWidth: "480px",
            marginBottom: "48px",
          }}
        >
          We're tending to our digital garden. A fresh new experience is on the
          way — rooted in everything we love about urban agriculture.
        </p>

        {/* Contact */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#3D4B3D",
          }}
        >
          info@sweetwaterurbanfarms.com
        </p>
      </div>

      {/* Footer */}
      <p
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          opacity: 0.3,
          whiteSpace: "nowrap",
        }}
      >
        © 2026 Sweetwater Urban Farms
      </p>
    </div>
  );
}
