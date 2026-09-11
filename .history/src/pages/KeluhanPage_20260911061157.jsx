import { useState } from "react";
import { Menu, Plus, ChevronRight, Sparkles } from "lucide-react";

const kategoriList = [
  {
    id: "kepala",
    label: "Kepala, Pikiran & Saraf",
    dot: "bg-amber-700",
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
    symptoms: [
      { id: "batuk", title: "Batuk & Radang Tenggorokan", desc: "Tenggorokan kering, serak, gatal" },
      { id: "sesak", title: "Sesak / Napas Berat", desc: "Dada terasa berat saat bernapas" },
    ],
  },
  {
    id: "perut",
    label: "Perut & Metabolik",
    dot: "bg-emerald-600",
    symptoms: [
      { id: "mual", title: "Mual & Masuk Angin", desc: "Perut kembung, begah, bersendawa" },
      { id: "asamlambung", title: "Asam Lambung Naik", desc: "Rasa panas di ulu hati" },
    ],
  },
  {
    id: "sendi",
    label: "Sendi & Otot",
    dot: "bg-orange-500",
    symptoms: [
      { id: "pegal", title: "Badan Pegal & Linu", desc: "Kekakuan sendi punggung, leher, nyeri otot" },
    ],
  },
  {
    id: "ginjal",
    label: "Ginjal & Kemih",
    dot: "bg-teal-600",
    symptoms: [
      { id: "seringkencing", title: "Sering Buang Air Kecil", desc: "Frekuensi kemih meningkat tanpa sebab jelas" },
    ],
  },
  {
    id: "kulit",
    label: "Kulit & Topikal",
    dot: "bg-pink-600",
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
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">
          Catat Keluhan Mandiri
        </h1>
        <p className="mt-2 text-stone-500 max-w-xl">
          Pilih bagian tubuh, tentukan gejala yang dirasakan, dan dapatkan
          rekomendasi racikan jamu Jawa yang sesuai.
        </p>

        {/* ===== Layout 2 kolom: body kiri, info kanan ===== */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          {/* KIRI — ilustrasi tubuh + kategori */}
          <div className="border border-stone-200 rounded-2xl p-6 lg:sticky lg:top-24">
            <p className="font-semibold text-stone-800">Fokus Area Tubuh</p>
            <span className="mt-3 inline-block bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm font-medium text-stone-700">
              {activeKategori.label}
            </span>

            <div className="relative mt-6 h-80 flex justify-center">
              <svg viewBox="0 0 200 380" className="h-full">
                <circle
                  cx="100" cy="40" r="26"
                  className={activeKategori.id === "kepala" ? "fill-amber-200" : "fill-stone-200"}
                />
                <circle cx="100" cy="40" r="5" className="fill-stone-500" />
                <rect x="65" y="70" width="70" height="110" rx="20" className="fill-stone-200" />
                <rect x="30" y="80" width="28" height="110" rx="14" className="fill-stone-200" />
                <rect x="142" y="80" width="28" height="110" rx="14" className="fill-stone-200" />
                <rect x="70" y="180" width="26" height="150" rx="13" className="fill-stone-200" />
                <rect x="104" y="180" width="26" height="150" rx="13" className="fill-stone-200" />

                <circle cx="100" cy="110" r="5" className="fill-blue-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[1])} />
                <circle cx="100" cy="170" r="5" className="fill-emerald-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[2])} />
                <circle cx="40" cy="140" r="5" className="fill-stone-400 cursor-pointer" onClick={() => setActiveKategori(kategoriList[0])} />
                <circle cx="160" cy="150" r="5" className="fill-orange-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[3])} />
                <circle cx="100" cy="220" r="5" className="fill-teal-500 cursor-pointer" onClick={() => setActiveKategori(kategoriList[4])} />
              </svg>
            </div>

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
                  {k.label}
                </button>
              ))}
            </div>
          </div>

          {/* KANAN — daftar gejala, keparahan, tombol */}
          <div className="space-y-6">
            {/* Daftar gejala */}
            <div className="border border-stone-200 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-stone-800">{activeKategori.label}</p>
                <span className="bg-emerald-800 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {activeKategori.symptoms.length} Gejala
                </span>
              </div>
              <p className="text-sm text-stone-500 mt-1">Pilih gejala yang dirasakan pada bagian ini</p>

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
                        <p className="text-sm text-stone-500">Buka semua daftar gejala bagian ini</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-stone-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Tingkat keparahan */}
            <div className="border border-stone-200 rounded-2xl p-6">
              <p className="font-semibold text-stone-800">Tingkat Keparahan Gejala</p>
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
            </div>

            {/* Tombol cari ramuan — sekarang inline, bukan sticky bottom */}
            <div className="flex items-center justify-between border border-stone-200 rounded-2xl p-6">
              <div>
                <p className="text-xs text-stone-400">Status Pilihan</p>
                <p className="font-semibold text-stone-800">
                  {selectedGejala.length === 0
                    ? "Belum Ada Gejala Dipilih"
                    : `${selectedGejala.length} Gejala Dipilih`}
                </p>
              </div>
              <button
                disabled={selectedGejala.length === 0}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${
                  selectedGejala.length > 0
                    ? "bg-emerald-800 text-white hover:bg-emerald-900"
                    : "bg-stone-200 text-stone-400 cursor-not-allowed"
                }`}
              >
                Cari Ramuan ({selectedGejala.length}) <Sparkles size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}