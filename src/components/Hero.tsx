import { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  });

  return (
    <section
      id="hero"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        fontFamily: "'Montserrat', sans-serif",
        background: "#f5f0ea",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          padding: "7rem 3.5rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Label */}
        <p
          style={{
            ...fadeStyle(0),
            fontSize: "0.68rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#888580",
            marginBottom: "1.2rem",
            fontWeight: 400,
          }}
        >
          Portfolio &nbsp;/&nbsp; 2026
        </p>

        {/* Name */}
        <h1
          style={{
            ...fadeStyle(160),
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.5rem, 6vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            color: "#1a1a18",
            marginBottom: "1.4rem",
          }}
        >
          ADLIN<br />
          <em style={{ fontWeight: 400, fontStyle: "italic" }}>Kumar</em>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            ...fadeStyle(300),
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#888580",
            marginBottom: "2.5rem",
            fontWeight: 400,
          }}
        >
          Aspiring AI &amp; Data Science Engineer
        </p>

        {/* Tagline with accent line */}
        <div
          style={{
            ...fadeStyle(440),
            display: "flex",
            gap: "1.2rem",
            alignItems: "flex-start",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              width: "1px",
              background: "#c0392b",
              height: "64px",
              marginTop: "4px",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "#888580",
            }}
          >
            Passionate about AI, Data Science &amp; Full Stack
            Development — building innovative solutions to
            real-world problems.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ ...fadeStyle(580), display: "flex", gap: "1rem" }}>
          <a
            href="#projects"
            style={{
              padding: "0.85rem 2rem",
              background: "#1a1a18",
              color: "#f5f0ea",
              textDecoration: "none",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "background 0.25s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#c0392b";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a1a18";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              padding: "0.85rem 2rem",
              background: "transparent",
              color: "#1a1a18",
              border: "1px solid #1a1a18",
              textDecoration: "none",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "background 0.25s, color 0.25s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a1a18";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0ea";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1a1a18";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            ...fadeStyle(720),
            position: "absolute",
            bottom: "2.5rem",
            left: "3.5rem",
            fontSize: "0.62rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#888580",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "40px",
              height: "1px",
              background: "#888580",
            }}
          />
          Scroll to explore
        </div>
      </div>

      {/* RIGHT — decorative photo block */}
      <div
        style={{
          background: "linear-gradient(160deg, #c9bfb4 0%, #a89a8c 55%, #7a6f68 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          padding: "2.5rem",
          minHeight: "100vh",
        }}
      >
        {/* Overlay monogram */}
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, opacity: 0.12 }}
          viewBox="0 0 600 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="serif"
            fontSize="200"
            fill="#fff"
          >
            AK
          </text>
        </svg>

        {/* Bottom caption */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "0.3rem",
            }}
          >
            
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            
          </p>
        </div>

        {/* Rotating star */}
        <span
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            fontSize: "1.4rem",
            color: "#c0392b",
            animation: "spin-slow 8s linear infinite",
          }}
        >
          ✦
        </span>
      </div>

      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          #hero { grid-template-columns: 1fr !important; }
          #hero > div:last-child { min-height: 40vh !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;