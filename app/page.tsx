"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Selamat Datang di Aplikasi CRUD
      </h1>

      <p className="text-lg md:text-xl text-blue-200 max-w-xl text-center mb-8">
        Ini adalah aplikasi Next.js + Prisma dengan fitur CRUD lengkap.
      </p>

      <div className="flex gap-4">
        {/* Tombol menuju halaman About */}
        <Link
          href="/about"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition"
        >
          Tentang Aplikasi
        </Link>

        {/* Tombol menuju halaman Items (CRUD) */}
        <Link
          href="/items"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          Kelola Data
        </Link>
      </div>
    </main>
  );
}
