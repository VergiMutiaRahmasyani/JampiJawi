import { useState } from "react";
import { Search } from "lucide-react";

const tanamanList = [
  { nama: "Kunyit", latin: "Curcuma longa", desc: "Rimpang kuning kaya kurkumin, dipakai turun-temurun sebagai anti radang dan penjaga daya tahan tubuh.", tag: "Herbal Jawa" },
  { nama: "Temulawak", latin: "Curcuma xanthorrhiza", desc: "Rimpang khas Jawa yang melindungi fungsi hati dan membantu melancarkan pencernaan.", tag: "Herbal Jawa" },
  { nama: "Jahe", latin: "Zingiber officinale", desc: "Rimpang penghangat tubuh, meredakan masuk angin dan mual sejak dulu jadi andalan dapur Jawa.", tag: "Herbal Jawa" },
  { nama: "Kencur", latin: "Kaempferia galanga", desc: "Rimpang aromatik untuk melegakan tenggorokan dan memulihkan stamina setelah lelah.", tag: "Herbal Jawa" },
  { nama: "Daun Sirih", latin: "Piper betle", desc: "Daun antiseptik alami, dipakai untuk kebersihan mulut dan perawatan luka ringan.", tag: "Herbal Jawa" },
  { nama: "Asam Jawa", latin: "Tamarindus indica", desc: "Buah asam kaya vitamin C, penyegar sekaligus penyeimbang rasa pada ramuan jamu.", tag: "Herbal Jawa" },
  { nama: "Beras Kencur", latin: "Oryza sativa + Kaempferia galanga", desc: "Perpaduan beras dan kencur, jamu klasik untuk stamina dan nafsu makan.", tag: "Herbal Jawa" },
  { nama: "Daun Kelor", latin: "Moringa oleifera", desc: "Daun kaya zat besi dan mineral, penunjang imunitas keluarga Jawa sehari-hari.", tag: "Herbal Jawa" },
  { nama: "Lengkuas", latin: "Alpinia galanga", desc: "Rimpang penghangat berkhasiat antimikroba, sering dipadukan dalam racikan pegal linu.", tag: "Herbal Jawa" },
  { nama: "Sambiloto", latin: "Andrographis paniculata", desc: "Daun pahit legendaris untuk menurunkan panas dan meredakan radang tenggorokan.", tag: "Herbal Jawa" },
];

const racikanList = [
  { nama: "Jamu Kunyit Asam", desc: "Untuk: pegal haid, panas dalam, lemas. Racikan jamu tradisional Jawa. Rebus 3 ruas kunyit yang sudah dimemarkan dengan 2 gelas air dan asam jawa secukupnya selama 15 menit. Saring dan minum hangat.", tag: "Jamu segar" },
  { nama: "Jamu Beras Kencur", desc: "Untuk: pegal linu, lesu, nafsu makan menurun. Racikan jamu tradisional Jawa. Tumbuk 3 ruas kencur dengan 2 sendok beras yang sudah direndam, tambahkan air, saring, dan campurkan gula jawa.", tag: "Jamu stamina" },
  { nama: "Wedang Jahe Sereh", desc: "Untuk: masuk angin, mual, badan dingin. Racikan jamu tradisional Jawa. Rebus 1 ruas jahe geprek dan 1 batang sereh dengan 2 gelas air selama 10 menit hingga hangat, tambahkan gula merah.", tag: "Jamu hangat" },
  { nama: "Jamu Temulawak", desc: "Untuk: nafsu makan menurun, gangguan hati, lesu. Racikan jamu tradisional Jawa. Rebus 3 ruas temulawak yang diiris tipis dengan 3 gelas air selama 20 menit hingga air menyusut separuh, saring dan minum hangat.", tag: "Jamu pencernaan" },
  { nama: "Boreh Kencur Bangle", desc: "Untuk: pegal, masuk angin, demam ringan. Racikan jamu tradisional Jawa. Haluskan kencur dan bangle dengan sedikit air hingga membentuk pasta, oleskan pada bagian tubuh yang pegal.", tag: "Jamu pegal" },
  { nama: "Air Rebusan Sambiloto", desc: "Untuk: demam, radang tenggorokan, panas dalam. Racikan jamu tradisional Jawa. Rebus segenggam daun sambiloto kering dengan 3 gelas air hingga tersisa 1 gelas, saring dan minum selagi hangat.", tag: "Jamu demam" },
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
          Pustaka Jamu Jawa
        </h1>
        <p className="mt-2 text-stone-500 text-sm">
          Jelajahi keanekaragaman tanaman herbal alami dan racikan jamu khas
          tradisional Jawa yang telah diwariskan turun-temurun.
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
            Racikan Jamu
          </button>
        </div>

        {/* Search */}
        <div className="mt-5 flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-3">
          <Search size={16} className="text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama tanaman, bahan, atau keluhan di sini..."
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

        {/* ===== Racikan Jamu ===== */}
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