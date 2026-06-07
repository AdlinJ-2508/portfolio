import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.3rem 3rem",
        background: "#f5f0ea",
        borderBottom: scrolled
          ? "1px solid #ddd9d3"
          : "1px solid transparent",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 18px rgba(26,26,24,0.06)" : "none",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1rem",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#1a1a18",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.9rem",
            color: "#c0392b",
            display: "inline-block",
            animation: "spin-slow 8s linear infinite",
          }}
        >
          ✦
        </span>
        Adlin Kumar
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.8rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="nav-desktop-links"
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#1a1a18",
                fontWeight: 400,
                position: "relative",
                paddingBottom: "3px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#c0392b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#1a1a18";
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Social icons — desktop */}
      <div
        style={{ display: "flex", gap: "1.2rem" }}
        className="nav-social"
      >
        {[
          { label: "GH", href: "https://github.com/AdlinJ-2508" },
          { label: "LI", href: "https://linkedin.com/in/AdlinKumar" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "#888580",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#c0392b")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#888580")
            }
          >
            {label}
          </a>
        ))}
      </div>

      {/* Hamburger — mobile */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          flexDirection: "column",
          gap: "5px",
        }}
        className="nav-hamburger"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "#1a1a18",
              transition: "transform 0.25s, opacity 0.25s",
              transform:
                menuOpen && i === 0
                  ? "translateY(6px) rotate(45deg)"
                  : menuOpen && i === 2
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#f5f0ea",
            borderBottom: "1px solid #ddd9d3",
            padding: "1.5rem 3rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
          className="nav-mobile-menu"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#1a1a18",
                fontWeight: 400,
                padding: "0.9rem 0",
                borderBottom: "1px solid #ddd9d3",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#c0392b")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1a1a18")
              }
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-social { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;