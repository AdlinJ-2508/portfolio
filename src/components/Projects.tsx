const Projects = () => {
  const projects = [
    {
      num: "01",
      title: "Edutwin",
      desc: "An online learning platform where students can access courses, learning materials, and track their progress efficiently.",
      tags: ["React", "Node.js", "MongoDB"],
      type: "Web Platform",
    },
    {
      num: "02",
      title: "AI Chatbot",
      desc: "Intelligent chatbot capable of answering user queries using AI and Natural Language Processing.",
      tags: ["Python", "NLP", "AI"],
      type: "AI / ML",
    },
     
  
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "5rem 3.5rem",
        background: "#f5f0ea",
        fontFamily: "'Montserrat', sans-serif",
        borderTop: "1px solid #ddd9d3",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "1.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <p
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#888580",
            fontWeight: 400,
          }}
        >
          Work
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#1a1a18",
            margin: 0,
          }}
        >
          Projects
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "0",
          border: "1px solid #ddd9d3",
        }}
      >
        {projects.map(({ num, title, desc, tags, type }, i) => (
          <div
            key={num}
            style={{
              padding: "2.5rem 2rem",
              borderRight: i < projects.length - 1 ? "1px solid #ddd9d3" : "none",
              background: "#f5f0ea",
              transition: "background 0.25s",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#f5f0ea";
            }}
          >
            {/* Top row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "#888580",
                }}
              >
                ({num})
              </span>
              <span
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c0392b",
                  fontWeight: 500,
                  border: "1px solid rgba(192,57,43,0.3)",
                  padding: "3px 10px",
                }}
              >
                {type}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#1a1a18",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {title}
            </h3>

            {/* Divider */}
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "#c0392b",
              }}
            />

            {/* Desc */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "#555",
                margin: 0,
                flex: 1,
              }}
            >
              {desc}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#1a1a18",
                    border: "1px solid #ddd9d3",
                    padding: "4px 10px",
                    fontWeight: 400,
                    background: "transparent",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover arrow */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "1.5rem",
                fontSize: "1rem",
                color: "#c0392b",
                opacity: 0,
                transition: "opacity 0.2s, transform 0.2s",
              }}
              className="card-arrow"
            >
              →
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#ddd9d3" }} />
        <a
          href="https://github.com/AdlinJ-2508"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1a1a18",
            textDecoration: "none",
            padding: "0.8rem 2rem",
            border: "1px solid #1a1a18",
            fontWeight: 400,
            transition: "background 0.25s, color 0.25s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#1a1a18";
            (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0ea";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#1a1a18";
          }}
        >
          View All on GitHub →
        </a>
        <div style={{ flex: 1, height: "1px", background: "#ddd9d3" }} />
      </div>

      <style>{`
        div:hover > .card-arrow { opacity: 1 !important; transform: translateX(4px); }
        @media (max-width: 768px) {
          #projects > div:nth-child(2) > div {
            border-right: none !important;
            border-bottom: 1px solid #ddd9d3;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;