import {
  ArrowRight, PlayCircle, ShieldAlert, BookOpenCheck, Leaf, BadgeCheck,
  Brain, Search, Sparkles,
} from "lucide-react";

const masalah = [
  {
    icon: ShieldAlert,
    title: "Terlalu Sering Bergantung Obat Kimia",
    desc: "Minum obat pereda gejala terus-menerus tanpa memperbaiki akar masalah bisa membebani kerja hati, ginjal, dan keseimbangan pencernaan dalam jangka panjang.",
  },
  {
    icon: BookOpenCheck,
    title: "Belum Paham Takaran & Racikan yang Tepat",
    desc: "Banyak orang tahu manfaat jahe atau kunyit, tapi belum tahu cara meracik dan mengombinasikannya dengan benar agar khasiatnya optimal.",
  },
];

const langkah = [
  {
    no: "01",
    title: "Pilih & Catat Keluhan",
    desc: "Pilih bagian tubuh yang terasa tidak nyaman (kepala, tenggorokan, lambung, sendi) dan tentukan tingkat keparahannya.",
  },
  {
    no: "02",
    title: "Dapatkan Rekomendasi Jamu",
    desc: "Sistem mencocokkan keluhanmu dengan database tanaman dan jamu tradisional Jawa, lengkap dengan takaran dan cara meraciknya.",
  },
  {
    no: "03",
    title: "Ikuti Resep & Jadwalnya",
    desc: "Dapatkan panduan racikan, aturan minum jamu harian, serta hal yang perlu dihindari agar pemulihan lebih maksimal.",
  },
];

const gejala = [
  { title: "Sakit Kepala / Pusing", desc: "Sensasi tegang di pelipis, migrain ringan, atau akibat kelelahan menatap layar." },
  { title: "Cepat Lelah & Lesu", desc: "Stamina menurun, badan terasa berat saat bangun pagi hari." },
  { title: "Mual & Masuk Angin", desc: "Perut kembung, begah, bersendawa, serta rasa asam berlebih di ulu hati." },
  { title: "Batuk & Radang Tenggorokan", desc: "Tenggorokan kering, serak, gatal, serta lendir akibat cuaca pancaroba." },
  { title: "Sulit Tidur / Insomnia", desc: "Pikiran cemas gelisah dan sering terbangun di tengah malam." },
  { title: "Badan Pegal & Linu", desc: "Kekakuan sendi punggung, leher kaku, dan nyeri otot setelah kerja fisik berat." },
];

const artikel = [
  { judul: "Cara Meramu Jamu Kunyit Asam yang Benar", kategori: "Panduan Meramu", desc: "Takaran dan langkah-langkah membuat jamu kunyit asam yang pas, tidak terlalu asam atau pahit." },
  { judul: "Kapan Waktu Terbaik Minum Jamu?", kategori: "Tips Herbal", desc: "Pagi, siang, atau malam — ini pengaruhnya terhadap khasiat jamu yang kamu minum." },
  { judul: "Sejarah Jamu Gendong di Jawa", kategori: "Budaya", desc: "Menelusuri tradisi penjual jamu gendong yang sudah ada sejak turun-temurun." },
  { judul: "Mengenal Rimpang: Kunyit, Kencur, Temulawak", kategori: "Panduan Meramu", desc: "Perbedaan ciri dan khasiat tiga rimpang yang paling sering dipakai dalam jamu Jawa." },
  { judul: "Apakah Jamu Aman Diminum Setiap Hari?", kategori: "Tips Herbal", desc: "Batas wajar konsumsi jamu harian dan tanda tubuh yang perlu diperhatikan." },
  { judul: "Filosofi di Balik Jamu Beras Kencur", kategori: "Budaya", desc: "Makna dan kepercayaan masyarakat Jawa tentang jamu penambah stamina ini." },
  { judul: "Menyimpan Jamu Segar Agar Tahan Lama", kategori: "Tips Herbal", desc: "Cara menyimpan racikan jamu di kulkas tanpa mengurangi khasiatnya." },
  { judul: "Jamu untuk Ibu Menyusui: Apa yang Perlu Diketahui", kategori: "Panduan Meramu", desc: "Racikan jamu yang umum dikonsumsi ibu pasca melahirkan beserta catatannya." },
  { judul: "Wedang Uwuh, Minuman Rempah Khas Yogyakarta", kategori: "Budaya", desc: "Asal-usul dan bahan-bahan di balik minuman rempah berwarna merah ini." },
  { judul: "Perbedaan Jamu Godhog dan Jamu Instan", kategori: "Panduan Meramu", desc: "Kelebihan dan kekurangan masing-masing cara konsumsi jamu di kehidupan modern." },
];

export default function HomePage() {
  return (
    <div className="bg-white text-stone-800">
      {/* ============ HERO ============ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
            <Sparkles size={14} /> Platform Ensiklopedia & Rekomendasi Jamu Jawa
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-stone-900">
            Kenali Keluhanmu,<br />
            Temukan <span className="text-emerald-700">Jamu Jawa yang Tepat</span>
          </h1>

          <p className="mt-5 text-stone-500 max-w-lg">
            Banyak dari kita tumbuh dengan jamu tapi lupa cara meraciknya
            dengan benar. Jampi Jawi membantumu mengenali keluhan sehari-hari
            dan menemukan racikan jamu Jawa yang sesuai, lengkap dengan takarannya.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-5 py-3 rounded-xl transition">
              Mulai Cek Keluhan <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center gap-2 text-stone-700 font-medium px-2 py-3">
              <PlayCircle size={18} /> Pelajari Cara Kerja
            </button>
          </div>

          <p className="mt-6 text-xs text-stone-400">
            Disusun berdasarkan pengetahuan jamu tradisional Jawa yang diwariskan turun-temurun
          </p>
        </div>

        {/* Preview card */}
        <div className="bg-white border border-stone-100 rounded-3xl shadow-xl shadow-emerald-900/5 p-4">
          <div className="flex items-center justify-between text-xs text-stone-400 px-1 pb-3">
            <span>CONTOH HASIL REKOMENDASI</span>
            <span className="flex items-center gap-1 text-emerald-600">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Ilustrasi
            </span>
          </div>
          <div className="h-56 rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-100" />
          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="bg-white border border-stone-200 rounded-full px-3 py-1 flex items-center gap-1">
              <BadgeCheck size={14} className="text-emerald-600" /> Temulawak cocok untuk keluhan ini
            </span>
          </div>
          <div className="mt-4 border-t border-stone-100 pt-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-stone-400">KELUHAN</p>
              <p className="font-medium text-stone-800">Perut Kembung</p>
            </div>
            <div>
              <p className="text-stone-400">JENIS RACIKAN</p>
              <p className="font-medium text-stone-800">Jamu Rimpang Hangat</p>
            </div>
          </div>
          <div className="mt-4 bg-emerald-50 rounded-xl px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-emerald-700 uppercase tracking-wide">Rekomendasi</p>
              <p className="text-sm font-medium text-emerald-900">Kunyit Asam + Jahe Hangat</p>
            </div>
            <BadgeCheck className="text-emerald-600" size={20} />
          </div>
        </div>
      </section>

      {/* ============ MASALAH ============ */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 rounded-2xl bg-gradient-to-br from-amber-100 to-stone-200" />
            <div className="bg-emerald-800 text-white rounded-2xl p-5 flex flex-col justify-center">
              <Leaf size={20} />
              <p className="mt-3 font-semibold">100% Herbal</p>
              <p className="text-xs text-emerald-100 mt-1">Bebas bahan kimia aditif & ramah pencernaan.</p>
            </div>
            <div className="h-40 rounded-2xl bg-gradient-to-br from-emerald-100 to-stone-200" />
            <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-center">
              <BookOpenCheck size={20} className="text-emerald-700" />
              <p className="mt-3 font-semibold">Tanaman & Jamu Jawa</p>
              <p className="text-xs text-stone-500 mt-1">Dikumpulkan dari pengetahuan jamu tradisional Jawa yang terus bertambah.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-red-600 tracking-wide">
              KENAPA JAMU SERING DIABAIKAN
            </span>
            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Pahami keluhan tubuh secara <span className="text-emerald-700">lebih menyeluruh</span>
            </h2>
            <p className="mt-4 text-stone-500">
              Keluhan ringan seperti perut begah, kepala tegang, atau badan
              lesu sering dianggap sepele dan langsung diredakan dengan obat
              instan, padahal jamu Jawa punya cara pendekatan yang berbeda.
            </p>

            <div className="mt-6 space-y-4">
              {masalah.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5">
                  <Icon className="text-red-500 shrink-0" size={22} />
                  <div>
                    <p className="font-semibold text-stone-800">{title}</p>
                    <p className="text-sm text-stone-500 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-6 border-l-4 border-emerald-700 bg-emerald-50 rounded-r-xl px-5 py-4 text-sm text-stone-600 italic">
              "Jampi Jawi dibuat untuk menjembatani pengetahuan jamu Jawa
              turun-temurun dengan cara yang lebih mudah diakses generasi muda."
              <footer className="mt-2 not-italic text-xs font-semibold text-stone-700">
                Tim Jampi Jawi
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ 3 LANGKAH ============ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <span className="text-xs font-semibold text-emerald-700 tracking-wide">CARA KERJA</span>
          <h2 className="mt-3 text-3xl font-bold text-stone-900">Tiga Langkah Menuju Sehat Alami</h2>
          <p className="mt-3 text-stone-500">
            Catat keluhan harianmu dan dapatkan panduan racikan jamu Jawa
            yang jelas takaran dan cara buatnya, mudah disiapkan di rumah.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-6">
          {langkah.map(({ no, title, desc }) => (
            <div key={no} className="border border-stone-200 rounded-2xl p-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm">
                {no}
              </span>
              <p className="mt-4 font-semibold text-stone-800">{title}</p>
              <p className="text-sm text-stone-500 mt-2">{desc}</p>
              {no === "02" && (
                <div className="mt-4 bg-stone-900 text-stone-100 rounded-xl p-3 text-xs flex items-center gap-2">
                  <Brain size={16} className="text-emerald-400" />
                  <div>
                    <p className="text-stone-400">CONTOH HASIL</p>
                    <p>Kunyit & Kencur — Racikan Hangat</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============ KATEGORI GEJALA ============ */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 tracking-wide">GEJALA & KATEGORI KELUHAN</span>
              <h2 className="mt-3 text-3xl font-bold text-stone-900 max-w-md">
                Apa Yang Sedang Anda Rasakan?
              </h2>
              <p className="mt-3 text-stone-500 max-w-lg text-sm">
                Pilih keluhan di bawah ini untuk melihat racikan jamu Jawa
                yang cocok membantu meredakan kondisi tubuhmu.
              </p>
            </div>
            <a href="/rekomendasi" className="text-sm font-medium text-emerald-700 flex items-center gap-1">
              Lihat Semua Kategori <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gejala.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-stone-200 p-6">
                <p className="font-semibold text-stone-800">{title}</p>
                <p className="text-sm text-stone-500 mt-2">{desc}</p>
                <a href="/rekomendasi" className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-700 font-medium">
                  Cek Ramuan <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ARTIKEL PREVIEW ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 tracking-wide">ARTIKEL & EDUKASI</span>
              <h2 className="mt-3 text-3xl font-bold text-stone-900 max-w-md">
                Belajar Lebih Dalam Soal Jamu Jawa
              </h2>
              <p className="mt-3 text-stone-500 max-w-lg text-sm">
                Kumpulan artikel seputar cara meramu jamu, tips penggunaan herbal
                yang aman, dan cerita di balik tradisi jamu Jawa.
              </p>
            </div>
            <a href="/artikel" className="text-sm font-medium text-emerald-700 flex items-center gap-1">
              Lihat Semua Artikel <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artikel.map(({ judul, kategori, desc }) => (
              <a
                key={judul}
                href="/artikel"
                className="rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-200 transition"
              >
                <div className="h-40 bg-gradient-to-br from-amber-100 to-emerald-100" />
                <div className="p-5">
                  <span className="text-[10px] font-medium text-emerald-700 uppercase">{kategori}</span>
                  <p className="mt-2 font-semibold text-stone-800">{judul}</p>
                  <p className="text-sm text-stone-500 mt-2">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-3xl px-8 py-16 text-center text-white">
          <span className="text-xs font-semibold text-emerald-300 tracking-wide">MULAI LANGKAH SEHATMU</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Kenali Tubuhmu, Coba Jamu Jawa Hari Ini
          </h2>
          <p className="mt-4 text-emerald-100 max-w-lg mx-auto text-sm">
            Jampi Jawi membantumu mengenal keluhan sehari-hari dan menemukan
            racikan jamu Jawa yang sesuai, langsung dari rumah.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-800 font-medium px-6 py-3 rounded-xl">
            Mulai Cek Keluhan Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}