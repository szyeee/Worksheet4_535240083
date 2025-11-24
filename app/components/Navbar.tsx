// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: 12,
    alignItems: "center",
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 20px",
    boxSizing: "border-box",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 40,
  };

  const brandStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 18,
    marginRight: 20,
    color: "#0f172a",
    textDecoration: "none",
  };

  const linkBase: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: 600,
    fontSize: 14,
  };

  const activeStyle: React.CSSProperties = {
    background: "#0ea5e9",
    color: "white",
  };

  const profileBox: React.CSSProperties = {
    marginLeft: "auto",
    display: "flex",
    gap: 12,
    alignItems: "center",
  };

  const avatarStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#94a3b8",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 700,
  };

  return (
    <nav style={containerStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" style={brandStyle}>
          MyCRUD
        </Link>

        <div style={navStyle}>
          <Link href="/" style={{ ...linkBase, ...(path === "/" ? activeStyle : {}) }}>
            Home
          </Link>

          <Link
            href="/about"
            style={{ ...linkBase, ...(path?.startsWith("/about") ? activeStyle : {}) }}
          >
            About
          </Link>

          <Link
            href="/items"
            style={{ ...linkBase, ...(path?.startsWith("/items") ? activeStyle : {}) }}
          >
            Items
          </Link>
        </div>

        <div style={profileBox}>
          <Link
            href="/profile"
            style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          >
            <div style={avatarStyle}>N</div>
            <div style={avatarStyle}>A</div>
            <div style={{ color: "#0f172a", fontWeight: 600 }}>Adelia Sassy</div>

          </Link>
        </div>
      </div>
    </nav>
  );
}
