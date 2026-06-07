const skills = [
  { name: "Python", category: "Language" },
  { name: "C", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Framework" },
  { name: "Git", category: "Tool" },
  { name: "MongoDB", category: "Database" },
];

const categoryOrder = ["Language", "Framework", "Tool", "Database"];

const Skills = () => {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section
      id="skills"
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
          Expertise
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
          Skills
        </h2>
      </div>

      {/* Grouped rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {grouped.map(({ cat, items }, gi) =>
          items.length === 0 ? null : (
            <div
              key={cat}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                borderTop: "1px solid #ddd9d3",
                borderBottom:
                  gi === grouped.filter((g) => g.items.length > 0).length - 1
                    ? "1px solid #ddd9d3"
                    : "none",
              }}
            >
              {/* Category label */}
              <div
                style={{
                  padding: "1.8rem 0",
                  borderRight: "1px solid #ddd9d3",
                  paddingRight: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.88rem",
                    fontStyle: "italic",
                    color: "#888580",
                  }}
                >
                  {cat}
                </span>
              </div>

              {/* Skills in this category */}
              <div
                style={{
                  padding: "1.8rem 0 1.8rem 2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                {items.map(({ name }) => (
                  <span
                    key={name}
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#1a1a18",
                      border: "1px solid #ddd9d3",
                      padding: "0.55rem 1.2rem",
                      fontWeight: 400,
                      background: "transparent",
                      cursor: "default",
                      transition: "background 0.2s, color 0.2s, border-color 0.2s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "#1a1a18";
                      el.style.color = "#f5f0ea";
                      el.style.borderColor = "#1a1a18";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "transparent";
                      el.style.color = "#1a1a18";
                      el.style.borderColor = "#ddd9d3";
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      {/* Bottom stat strip */}
      <div
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid #ddd9d3",
          borderBottom: "1px solid #ddd9d3",
        }}
      >
        {[
          { value: `${skills.length}`, label: "Technologies" },
          { value: "3+", label: "Languages" },
          { value: "1+", label: "Years Learning" },
        ].map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              padding: "2rem 1.5rem",
              borderRight: i < 2 ? "1px solid #ddd9d3" : "none",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "#1a1a18",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#888580",
                fontWeight: 400,
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;