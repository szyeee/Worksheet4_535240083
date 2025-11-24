export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-6">
      <h1 className="text-4xl font-bold mb-4">Tentang Aplikasi Ini</h1>

      <p className="text-lg max-w-2xl text-center">
        Aplikasi ini dibuat menggunakan Next.js, Prisma, dan SQLite. 
        Anda dapat melakukan CRUD data melalui halaman Items.
      </p>
    </main>
  );
}
