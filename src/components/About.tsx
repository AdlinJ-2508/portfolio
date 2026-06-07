const About = () => {
  return (
    <section
      id="about"
      className="relative mx-6 my-10 overflow-hidden"
      style={{
        background: "#f5f0ea",
        border: "1px solid #ddd9d3",
        borderRadius: "0",
        padding: "4rem 3.5rem",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Top-left corner accent */}
      <span
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          fontSize: "1.2rem",
          color: "#c0392b",
          display: "inline-block",
          animation: "spin-slow 8s linear infinite",
        }}
      >
        ✦
      </span>

      {/* Section label */}
      <p
        style={{
          fontSize: "0.68rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#888580",
          marginBottom: "1rem",
          fontWeight: 400,
        }}
      >
        Who I Am
      </p>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          color: "#1a1a18",
          marginBottom: "1.6rem",
        }}
      >
        About <em style={{ fontWeight: 400, fontStyle: "italic" }}>Me</em>
      </h2>

      {/* Red divider */}
      <div
        style={{
          width: "48px",
          height: "2px",
          background: "#c0392b",
          marginBottom: "2.2rem",
        }}
      />

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left col */}
        <div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              lineHeight: 1.85,
              color: "#444",
              marginBottom: "1.4rem",
            }}
          >
            Hello! I'm{" "}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#1a1a18",
              }}
            >
              Adlin Kumar
            </span>
            , a first-year Artificial Intelligence and Data Science student
            with a strong passion for technology and innovation.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              lineHeight: 1.85,
              color: "#444",
            }}
          >
            I am constantly learning new technologies and building projects to
            improve my skills and gain practical experience. As a lifelong
            learner, I strive to stay updated with the latest trends in
            technology.
          </p>
        </div>

        {/* Right col — interest tags */}
        <div>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#888580",
              marginBottom: "1.2rem",
              fontWeight: 400,
            }}
          >
            My Interests
          </p>
          {[
            { num: "(01)", label: "AI & Data Science" },
            { num: "(02)", label: "Full Stack Development" },
            { num: "(03)", label: "Machine Learning" },
            { num: "(04)", label: "Problem Solving" },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                alignItems: "center",
                padding: "1rem 0",
                borderBottom: "1px solid #ddd9d3",
                cursor: "default",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "rgba(192,57,43,0.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "transparent")
              }
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "#888580",
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1a1a18",
                  fontWeight: 400,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "1.3rem",
                  color: "#c0392b",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default About;