const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        background: "#1a1a18",
        color: "#f5f0ea",
        padding: "4rem 3.5rem",
        margin: "0 1.5rem 2.5rem",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
        Get In Touch
      </p>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          color: "#f5f0ea",
          marginBottom: "3rem",
        }}
      >
        Contact
      </h2>

      {/* Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr 1fr",
          gap: "3.5rem",
          alignItems: "start",
        }}
      >
        {/* Circle CTA */}
        <a
          href="mailto:adlinkumar2508@gmail.com"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            background: "#f5f0ea",
            color: "#1a1a18",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            flexShrink: 0,
            transition: "background 0.25s, transform 0.2s",
            fontWeight: 500,
            lineHeight: 1.6,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#c0392b";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#f5f0ea";
            (e.currentTarget as HTMLAnchorElement).style.color = "#1a1a18";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          <span>GET IN</span>
          <span>TOUCH</span>
        </a>

        {/* Info block */}
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#f5f0ea",
              marginBottom: "1rem",
            }}
          >
            Adlin Kumar
          </h3>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#a0998f",
            }}
          >
            AI & Data Science student, open to collaborations,
            internships, and exciting projects. Feel free to
            reach out — let's build something meaningful together.
          </p>
        </div>

        {/* Links block */}
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#f5f0ea",
              marginBottom: "1.2rem",
            }}
          >
            Reach Me At
          </h3>

          {[
            {
              num: "(01)",
              label: "Email",
              value: "adlinkumar2508@gmail.com",
              href: "mailto:adlinkumar2508@gmail.com",
            },
            {
              num: "(02)",
              label: "GitHub",
              value: "github.com/AdlinJ-2508",
              href: "https://github.com/AdlinJ-2508",
            },
            {
              num: "(03)",
              label: "LinkedIn",
              value: "linkedin.com/in/AdlinKumar",
              href: "https://linkedin.com/in/AdlinKumar",
            },
          ].map(({ num, label, value, href }) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "52px 1fr",
                alignItems: "center",
                padding: "0.95rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "#888580",
                }}
              >
                {num}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#888580",
                    marginBottom: "0.2rem",
                    fontWeight: 400,
                  }}
                >
                  {label}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.78rem",
                    color: "#c0392b",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#f5f0ea")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#c0392b")
                  }
                >
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          marginTop: "3.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#888580",
          }}
        >
          © 2026 Adlin Kumar
        </span>
        <a
          href="#hero"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888580",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#f5f0ea")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#888580")
          }
        >
          Back to Top ↑
        </a>
      </div>
    </section>
  );
};

export default Contact;