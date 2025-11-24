export default function ProfilePage() {
  return (
    <div
      style={{
        padding: 32,
        maxWidth: 900,
        margin: "40px auto",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 20,
          padding: 32,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* Avatar */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #f472b6 0%, #fb7185 50%, #fda4af 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 38,
              fontWeight: 700,
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            A
          </div>

          {/* Text */}
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: 32,
                fontWeight: 800,
                color: "#1e293b",
              }}
            >
              Adelia Sassy Mulya
            </h1>

            <p
              style={{
                marginTop: 6,
                marginBottom: 0,
                color: "#64748b",
                fontSize: 16,
              }}
            >
              535240083 — Kelompok 13 GANJIL
            </p>

            <p
              style={{
                marginTop: 14,
                maxWidth: 600,
                lineHeight: "1.6",
                fontSize: 15,
                color: "#475569",
              }}
            >
              Selamat datang di halaman profil ✨  
              Halaman ini menampilkan data diri Adelia Sassy, salah satu anggota
              tim dengan spesialisasi dalam pengembangan aplikasi dan desain UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
