import { useState } from "react";
import { Search } from "lucide-react";

const tanamanList = [
  { nama: "Alang-Alang", latin: "Imperata cylindrica", desc: "Akar yang cukup terkenal dan pendingin peredaman rimpang.", tag: "Herbal Usadha" },
  { nama: "Asam Jawa", latin: "Tamarindus indica", desc: "Buah polong berwarna asam alami yang kaya asam tartarat untuk menyegarkan dan menenangkan pencernaan.", tag: "Herbal Usadha" },
  { nama: "Bangle", latin: "Zingiber cassumunar", desc: "Rimpang aromatik penetrasi anti dan panas tinggi keramat.", tag: "Herbal Usadha" },
  { nama: "Bawang Putih", latin: "Allium sativum", desc: "Umbi kaya kapo senyawa sulfur pertama sifat antimikroba.", tag: "Herbal Usadha" },
  { nama: "Belimbing Wuluh", latin: "Averrhoa bilimbi", desc: "Buah asam kaya vitamin C dan asam ferula pengencer alami darah.", tag: "Herbal Usadha" },
  { nama: "Beras", latin: "Oryza sativa", desc: "Perekat alami bubuk bedak.", tag: "Herbal Usadha" },
  { nama: "Binahong", latin: "Anredera cordifolia", desc: "Daun penambal luka seperti penutrisi kolagen alami berupa luka.", tag: "Herbal Usadha" },
  { nama: "Daun Kelor", latin: "Moringa oleifera", desc: "Daun kaya mineral dan nutrisi penunjang imunitas dan asupan keluarga.", tag: "Herbal Usadha" },
  { nama: "Jahe", latin: "Zingiber officinale", desc: "Rimpang penghangat panas dan penyelaras pencernaan.", tag: "Herbal Usadha" },
];

const racikanList = [
  { nama: "Air Basuhan Sirih", desc: "Kelebihan: bilasan, gejala, sensitif iritasi. Racikan herbal tradisional Usadha Bali. Terbukti daun sirih segar dengan 1 liter air panas selama 10–15 menit. Biarkan hingga hangat suam-suam kuku.", tag: "Herbal kulit" },
  { nama: "Air Rebusan Pandan", desc: "Kelebihan: gelisah, insomnia. Racikan herbal tradisional Usadha Bali. Rebus 3 lembar daun pandan yang telah dipotong-potong dengan 2 gelas air (400 ml) selama 10–15 menit hingga hangat.", tag: "Herbal insomnia" },
  { nama: "Air Rebusan Serai", desc: "Kelebihan: nyeri sendi, pegal linu, masuk angin, pegal otot, batuk pilek. Racikan herbal tradisional Usadha Bali. Rebus 3 batang serai yang telah digeprek dengan 2 gelas air selama 10 menit hingga hangat.", tag: "Herbal pegal" },
  { nama: "Air Remasan Bunga Sepatu", desc: "Kelebihan: antioksidan, pelemas, pegal, demam, panas dalam. Racikan herbal tradisional Usadha Bali. Remas 5-7 kuntum bunga sepatu segar dengan sedikit air matang hingga sarinya keluar.", tag: "Herbal demam" },
  { nama: "Boreh Bangle Kencur", desc: "Kelebihan: pegal, demam, pilek. Racikan herbal tradisional Usadha Bali. Haluskan bangle dan kencur dengan sedikit air hingga membentuk pasta. Tempelkan pada bagian tubuh yang pegal.", tag: "Herbal pegal" },
  { nama: "Boreh Warm Balinese Herbal", desc: "Kelebihan: pegal, linu, masuk angin. Racikan herbal tradisional Usadha Bali. Haluskan rimpang jahe, kencur, dan bangle secukupnya, campurkan sedikit air hangat.", tag: "Herbal sendi" },
];

export default function EnsiklopediaPage() {
  const [tab, setTab] = useState("tanaman");
  const [query, setQuery] = useState("");

  const filteredTanaman = tanamanList.filter((t) =>
    t.nama.toLowerCase().includes(query.toLowerCase())
  );
  const filteredRacikan = racikanList.filter((r) =>
    r.nama.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-16">
        <h1 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "serif" }}>
          Pustaka Usadha Bali
        </h1>
        <p className="mt-2 text-stone-500 text-sm">
          Jelajahi keanekaragaman kekayaan tanaman herbal alami dan racikan
          resep khas tradisional Usadha Bali yang telah diwariskan turun temurun.
        </p>

        {/* Tabs */}
        <div className="mt-6 inline-flex bg-white border border-stone-200 rounded-full p-1">
          <button
            onClick={() => setTab("tanaman")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              tab === "tanaman" ? "bg-emerald-800 text-white" : "text-stone-500"
            }`}
          >
            Katalog Tanaman
          </button>
          <button
            onClick={() => setTab("racikan")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              tab === "racikan" ? "bg-emerald-800 text-white" : "text-stone-500"
            }`}
          >
            Racikan Obat
          </button>
        </div>

        {/* Search */}
        <div className="mt-5 flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-3">
          <Search size={16} className="text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama tanaman, bahan, atau instruksi penyakit di sini..."
            className="flex-1 outline-none text-sm text-stone-700 placeholder:text-stone-400"
          />
        </div>

        {/* ===== Katalog Tanaman ===== */}
        {tab === "tanaman" && (
          <div className="mt-8 space-y-8">
            {filteredTanaman.map((t) => (
              <div key={t.nama} className="bg-white rounded-3xl overflow-hidden border border-stone-100">
                <div className="h-44 bg-gradient-to-br from-emerald-100 to-amber-100" />
                <div className="p-5">
                  <p className="font-semibold text-stone-800">{t.nama}</p>
                  <p className="text-xs italic text-stone-400 mt-0.5">{t.latin}</p>
                  <p className="text-sm text-stone-500 mt-2">{t.desc}</p>
                  <span className="inline-block mt-4 bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full">
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
            {filteredTanaman.length === 0 && (
              <p className="text-center text-stone-400 text-sm py-10">Tidak ada tanaman ditemukan.</p>
            )}
          </div>
        )}

        {/* ===== Racikan Obat ===== */}
        {tab === "racikan" && (
          <div className="mt-8 space-y-8">
            {filteredRacikan.map((r) => (
              <div key={r.nama} className="bg-white rounded-3xl overflow-hidden border border-stone-100">
                <div className="h-44 bg-gradient-to-br from-amber-100 to-stone-200" />
                <div className="p-5">
                  <p className="font-semibold text-stone-800">{r.nama}</p>
                  <p className="text-sm text-stone-500 mt-2">{r.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      {r.tag}
                    </span>
                    <button className="text-sm font-medium text-emerald-700">
                      Lihat Khasiat →
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredRacikan.length === 0 && (
              <p className="text-center text-stone-400 text-sm py-10">Tidak ada racikan ditemukan.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}