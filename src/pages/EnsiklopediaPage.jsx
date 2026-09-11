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
  { nama: "Jamu Kunyit Asam", desc: "Untuk: pegal haid, panas dalam, lemas. Rebus 3 ruas kunyit memarkan dengan 2 gelas air dan asam jawa selama 15 menit. Saring, minum hangat.", tag: "Jamu segar" },
  { nama: "Jamu Beras Kencur", desc: "Untuk: pegal linu, lesu, nafsu makan menurun. Tumbuk kencur dan beras rendaman, tambahkan air, saring, campur gula jawa.", tag: "Jamu stamina" },
  { nama: "Wedang Jahe Sereh", desc: "Untuk: masuk angin, mual, badan dingin. Rebus jahe geprek dan sereh dengan air selama 10 menit, tambahkan gula merah.", tag: "Jamu hangat" },
  { nama: "Jamu Temulawak", desc: "Untuk: nafsu makan menurun, gangguan hati, lesu. Rebus irisan temulawak dengan air selama 20 menit hingga menyusut separuh.", tag: "Jamu pencernaan" },
  { nama: "Param Kencur Bangle", desc: "Untuk: pegal, masuk angin, demam ringan. Haluskan kencur dan bangle dengan sedikit air, oleskan pada bagian tubuh yang pegal.", tag: "Jamu pegal" },
  { nama: "Air Rebusan Sambiloto", desc: "Untuk: demam, radang tenggorokan, panas dalam. Rebus daun sambiloto kering hingga tersisa 1 gelas, saring, minum hangat.", tag: "Jamu demam" },
  { nama: "Jamu Cabe Puyang", desc: "Untuk: pegal linu, sakit pinggang, capek kerja fisik. Tumbuk cabe jawa dan lempuyang, rebus dengan air, saring, minum hangat.", tag: "Jamu pegal" },
  { nama: "Jamu Pahitan", desc: "Untuk: menjaga daya tahan tubuh, membersihkan darah. Rebus daun sambiloto, brotowali, dan sedikit temulawak hingga mendidih, saring, minum meski pahit.", tag: "Jamu daya tahan" },
  { nama: "Jamu Sinom", desc: "Untuk: penyegar, pencernaan, penurun panas dalam. Rebus daun asam muda (sinom), kunyit, dan asam jawa dengan gula aren hingga harum.", tag: "Jamu segar" },
  { nama: "Jamu Uyup-Uyup", desc: "Untuk: melancarkan ASI, pemulihan ibu menyusui. Rebus campuran kunyit, temulawak, dan kencur, biasa diminum ibu pasca melahirkan.", tag: "Jamu ibu menyusui" },
  { nama: "Jamu Galian Singset", desc: "Untuk: menjaga bentuk tubuh, melancarkan metabolisme. Racikan kunyit, asam jawa, dan kayu manis, diminum rutin pagi hari.", tag: "Jamu metabolisme" },
  { nama: "Wedang Uwuh", desc: "Untuk: menghangatkan badan, relaksasi, masuk angin ringan. Rebus ranting kayu secang, cengkeh, kayu manis, dan jahe hingga air berwarna merah.", tag: "Jamu hangat" },
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
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">
          Pustaka Jamu Jawa
        </h1>
        <p className="mt-2 text-stone-500 max-w-xl">
          Jelajahi keanekaragaman tanaman herbal alami dan racikan jamu khas
          tradisional Jawa yang telah diwariskan turun-temurun.
        </p>

        {/* Tabs */}
        <div className="mt-6 inline-flex bg-stone-50 border border-stone-200 rounded-full p-1">
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
        <div className="mt-5 max-w-xl flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-3">
          <Search size={16} className="text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama tanaman, bahan, atau keluhan di sini..."
            className="flex-1 outline-none text-sm text-stone-700 placeholder:text-stone-400"
          />
        </div>

        {/* ===== Katalog Tanaman — grid 3-4 kolom ===== */}
        {tab === "tanaman" && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredTanaman.map((t) => (
              <div key={t.nama} className="rounded-2xl overflow-hidden border border-stone-200">
                <div className="h-36 bg-gradient-to-br from-emerald-100 to-amber-100" />
                <div className="p-4">
                  <p className="font-semibold text-stone-800">{t.nama}</p>
                  <p className="text-xs italic text-stone-400">{t.latin}</p>
                  <p className="text-xs text-stone-500 mt-2">{t.desc}</p>
                  <span className="inline-block mt-3 bg-emerald-50 text-emerald-700 text-[10px] font-medium px-2.5 py-1 rounded-full uppercase">
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
            {filteredTanaman.length === 0 && (
              <p className="col-span-full text-center text-stone-400 text-sm py-10">Tidak ada tanaman ditemukan.</p>
            )}
          </div>
        )}

        {/* ===== Racikan Jamu — grid 3 kolom ===== */}
        {tab === "racikan" && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRacikan.map((r) => (
              <div key={r.nama} className="rounded-2xl overflow-hidden border border-stone-200">
                <div className="h-36 bg-gradient-to-br from-amber-100 to-stone-200" />
                <div className="p-4">
                  <p className="font-semibold text-stone-800">{r.nama}</p>
                  <p className="text-xs text-stone-500 mt-2">{r.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-medium px-2.5 py-1 rounded-full uppercase">
                      {r.tag}
                    </span>
                    <button className="text-xs font-medium text-emerald-700">
                      Lihat →
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredRacikan.length === 0 && (
              <p className="col-span-full text-center text-stone-400 text-sm py-10">Tidak ada racikan ditemukan.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}