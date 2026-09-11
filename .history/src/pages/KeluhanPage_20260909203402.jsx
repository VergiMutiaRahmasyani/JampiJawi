import { useState } from "react";
import { Menu, Plus, ChevronRight, Sparkles } from "lucide-react";

const kategoriList = [
  {
    id: "kepala",
    label: "Kepala, Pikiran & Saraf",
    dot: "bg-amber-700",
    bodyPos: "top-0 left-1/2 -translate-x-1/2",
    symptoms: [
      { id: "pusing", title: "Pusing / Vertigo", desc: "Kepala berputar atau melayang" },
      { id: "migrain", title: "Sakit Kepala / Migrain", desc: "Nyeri sengkeram atau berdenyut" },
      { id: "konsentrasi", title: "Sulit Konsentrasi", desc: "Pikiran mudah teralihkan, sulit fokus" },
      { id: "gelisah", title: "Gelisah & Susah Istirahat Malam", desc: "Gelisah & susah istirahat malam" },
      { id: "lelahmental", title: "Mudah Lelah Mental", desc: "Cepat capek berpikir, mudah stres" },
    ],
  },
  {
    id: "dada",
    label: "Dada & Imun",
    dot: "bg-blue-600",
    bodyPos: "top-[26%] left-[42%]",
    symptoms: [
      { id: "batuk", title: "Batuk & Radang Tenggorokan", desc: "Tenggorokan kering, serak, gatal" },
      { id: "sesak", title: "Sesak / Napas Berat", desc: "Dada terasa berat saat bernapas" },
    ],
  },
  {
    id: "perut",
    label: "Perut & Metabolik",
    dot: "bg-emerald-600",
    bodyPos: "top-[52%] left-1/2 -translate-x-1/2",
    symptoms: [
      { id: "mual", title: "Mual & Masuk Angin", desc: "Perut kembung, begah, bersendawa" },
      { id: "asamlambung", title: "Asam Lambung Naik", desc: "Rasa panas di ulu hati" },
    ],
  },
  {
    id: "sendi",
    label: "Sendi & Otot",
    dot: "bg-orange-500",
    bodyPos: "top-[38%] left-[80%]",
    symptoms: [
      { id: "pegal", title: "Badan Pegal & Linu", desc: "Kekakuan sendi punggung, leher, nyeri otot" },
    ],
  },
  {
    id: "ginjal",
    label: "Ginjal & Kemih",
    dot: "bg-teal-600",
    bodyPos: "top-[62%] left-[20%]",
    symptoms: [
      { id: "seringkencing", title: "Sering Buang Air Kecil", desc: "Frekuensi kemih meningkat tanpa sebab jelas" },
    ],
  },
  {
    id: "kulit",
    label: "Kulit & Topikal",
    dot: "bg-pink-600",
    bodyPos: "top-[70%] left-1/2 -translate-x-1/2",
    symptoms: [
      { id: "gatal", title: "Gatal & Iritasi Kulit", desc: "Kemerahan atau gatal ringan pada kulit" },
    ],
  },
];

const severities = ["Ringan", "Sedang", "Parah"];

export default function RekomendasiPage() {
  const [activeKategori, setActiveKategori] = useState(kategoriList[0]);
  const [selectedGejala, setSelectedGejala] = useState([]);
  const [severity, setSeverity] = useState("Ringan");
  const [showAll, setShowAll] = useState(false);

  const toggleGejala = (id) => {
    setSelectedGejala((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const visibleSymptoms = showAll
    ? activeKategori.symptoms
    : activeKategori.symptoms.slice(0, 3);
  const sisaGejala = activeKategori.symptoms.length - visibleSymptoms.length;

  return (
    <div className="bg-stone-50 min-h-screen pb-28">
      <div className="max-w-2xl mx-auto px-6 pt-8">
        {/* Header */}
        <button className="w-11 h-11 rounded-xl border border-stone-200 bg-white flex items-center justify-center">
          <Menu size={18} />
        </button>

        <h1 className="mt-6 text-3xl font-bold text-stone-900" style={{ fontFamily: "serif" }}>
          Catat Keluhan Mandiri
        </h1>
        <p className="mt-3 text-stone-500">
          Pilih bagian tubuh pada navigator interaktif, tentukan gejala yang
          dirasakan, dan dapatkan racikan ramuan herbal yang presisi.
        </p>

        {/* ===== CARD: Fokus Area Tubuh ===== */}
        <section className="mt-8 bg-emerald-50/60 border border-emerald-100 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-stone-900" style={{ fontFamily: "serif" }}>
            Fokus Area Tubuh
          </h2>

          <span className="mt-4 inline-block bg-white border border-stone-200 rounded-full px-4 py-2 text-sm font-medium text-stone-700">
            {activeKategori.label}
          </span>

          {/* Body illustration */}
          <div className="relative mt-6 h-96 flex justify-center">
            <span
              className={`absolute -top-2 bg-white border border-stone-200 rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-2 shadow-sm`}
            >
              <span className={`w-2 h-2 rounded-full ${activeKategori.dot}`} />
              {activeKategori.label}
            </span>

            <svg viewBox="0 0 200 380" className="h-full">
              {/* head */}
              <circle
                cx="100" cy="40" r="26"
                className={activeKategori.id === "kepala" ? "fill-amber-200" : "fill-stone-200"}
              />
              <circle cx="100" cy="40" r="5" className="fill-stone-500" />
              {/* torso */}
              <rect x="65" y="70" width="70" height="110" rx="20" className="fill-stone-200" />
              {/* arms */}
              <rect x="30" y="80" width="28" height="110" rx="14" className="fill-stone-200" />
              <rect x="142" y="80" width="28" height="110" rx="14" className="fill-stone-200" />
              {/* legs */}
              <rect x="70" y="180" width="26" height="150" rx="13" className="fill-stone-200" />
              <rect x="104" y="180" width="26" height="150" rx="13" className="fill-stone-200" />

              {/* dots */}
              <circle cx="100" cy="110" r="5" className="fill-blue-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[1])} />
              <circle cx="100" cy="170" r="5" className="fill-emerald-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[2])} />
              <circle cx="40" cy="140" r="5" className="fill-stone-400 cursor-pointer" onClick={() => setActiveKategori(kategoriList[0])} />
              <circle cx="160" cy="150" r="5" className="fill-orange-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[3])} />
              <circle cx="100" cy="220" r="5" className="fill-teal-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[4])} />
            </svg>
          </div>

          {/* kategori pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {kategoriList.map((k) => (
              <button
                key={k.id}
                onClick={() => {
                  setActiveKategori(k);
                  setShowAll(false);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
                  activeKategori.id === k.id
                    ? "bg-emerald-800 text-white border-emerald-800"
                    : "bg-white text-stone-600 border-stone-200"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${k.dot}`} />
                {k.id === "kepala" ? "Kepala" : k.label}
              </button>
            ))}
          </div>
        </section>

        {/* ===== CARD: Daftar gejala ===== */}
        <section className="mt-6 bg-emerald-50/60 border border-emerald-100 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-900" style={{ fontFamily: "serif" }}>
              {activeKategori.label}
            </h2>
            <span className="bg-emerald-800 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {activeKategori.symptoms.length} Gejala
            </span>
          </div>
          <p className="text-sm text-stone-500 mt-1">Pilih gejala yang dirasakan pada organ ini</p>

          <div className="mt-4 space-y-3">
            {visibleSymptoms.map((s) => {
              const checked = selectedGejala.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggleGejala(s.id)}
                  className="w-full flex items-center justify-between bg-white rounded-2xl border border-stone-200 px-5 py-4 text-left"
                >
                  <div>
                    <p className="font-semibold text-stone-800">{s.title}</p>
                    <p className="text-sm text-stone-500">{s.desc}</p>
                  </div>
                  <span
                    className={`w-5 h-5 rounded-md border shrink-0 ml-4 ${
                      checked ? "bg-emerald-700 border-emerald-700" : "bg-stone-100 border-stone-300"
                    }`}
                  />
                </button>
              );
            })}

            {!showAll && sisaGejala > 0 && (
              <button
                onClick={() => setShowAll(true)}
                className="w-full flex items-center justify-between bg-white rounded-2xl border border-emerald-200 px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center">
                    <Plus size={16} />
                  </span>
                  <div>
                    <p className="font-semibold text-stone-800">+{sisaGejala} Gejala Lainnya</p>
                    <p className="text-sm text-stone-500">Buka semua daftar gejala organ ini</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-stone-400" />
              </button>
            )}
          </div>
        </section>

        {/* ===== CARD: Tingkat keparahan ===== */}
        <section className="mt-6 bg-emerald-50/60 border border-emerald-100 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-stone-900" style={{ fontFamily: "serif" }}>
            Tingkat Keparahan Gejala
          </h2>
          <p className="text-sm text-stone-500 mt-1">Seberapa parah gejala yang kamu rasakan?</p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {severities.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSeverity(lvl)}
                className={`py-3 rounded-full text-sm font-medium border transition ${
                  severity === lvl
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-stone-600 border-stone-200"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* ===== Sticky bottom bar ===== */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 z-40">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-400">Status Pilihan</p>
            <p className="font-semibold text-stone-800">
              {selectedGejala.length === 0
                ? "Belum Ada Gejala"
                : `${selectedGejala.length} Gejala Dipilih`}
            </p>
          </div>
          <button
            disabled={selectedGejala.length === 0}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${
              selectedGejala.length > 0
                ? "bg-amber-700 text-white"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
          >
            Cari Ramuan ({selectedGejala.length}) <Sparkles size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}