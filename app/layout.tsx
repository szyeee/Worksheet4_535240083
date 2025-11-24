// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My CRUD App",
  description: "Next.js + Prisma CRUD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, system-ui, Arial, sans-serif", background: "#f8fafc" }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
