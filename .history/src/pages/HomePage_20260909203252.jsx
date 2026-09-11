import {
  ArrowRight, PlayCircle, ShieldAlert, BookOpenCheck, Leaf, BadgeCheck,
  Brain, Calendar, Search, Star, Sparkles,
} from "lucide-react";

const masalah = [
  {
    icon: ShieldAlert,
    title: "Ketergantungan Kimia Berlebih",
    desc: "Konsumsi obat kimia pereda gejala terus-menerus tanpa memperbaiki akar masalah, membebani fungsi organ hati, ginjal, serta stabilitas flora mikrobioma usus.",
  },
  {
    icon: BookOpenCheck,
    title: "Kurang Paham Takaran & Racikan Herbal",
    desc: "Banyak orang tahu manfaat jahe atau kunyit, namun salah mengombinasikan herba penyeimbang seperti asam jawa atau madu hutan, hingga zat bioaktifnya kurang optimal.",
  },
];

const langkah = [
  {
    no: "01",
    title: "Pilih & Catat Keluhan",
    desc: "Pilih area tubuh yang dirasakan (kepala, tenggorokan, lambung, sendi) dan tentukan tingkat keparahan gejala secara interaktif.",
  },
  {
    no: "02",
    title: "Analisis Formulasi Usadha",
    desc: "Algoritma mencocokkan keluhan dengan database 50+ tanaman obat nusantara, dosis rimpang, dan cara perebusan yang higienis.",
  },
  {
    no: "03",
    title: "Dapatkan Resep & Jadwal",
    desc: "Akses rekomendasi racikan seduhan, aturan pakai jamu harian, serta pantangan makanan untuk mempercepat pemulihan tubuh Anda.",
  },
];

const gejala = [
  { title: "Sakit Kepala / Pusing", desc: "Sensasi tegang di pelipis, migrain ringan, atau akibat kelelahan menatap layar." },
  { title: "Cepat Lelah & Lesu", desc: "Stamina dan vitalitas menurun, badan terasa berat saat bangun pagi hari." },
  { title: "Mual & Masuk Angin", desc: "Perut kembung, begah bersendawa, serta rasa asam berlebih di ulu hati." },
  { title: "Batuk & Radang Tenggorokan", desc: "Tenggorokan kering, serak, gatal, serta lendir akibat cuaca pancaroba." },
  { title: "Sulit Tidur / Insomnia", desc: "Pikiran cemas gelisah dan sering terbangun di tengah malam." },
  { title: "Badan Pegal & Linu", desc: "Kekakuan persendian punggung, leher kaku, dan nyeri otot setelah kerja fisik berat." },
];

const tanaman = [
  { nama: "Daun Sirsak", latin: "Annona muricata", senyawa: "Acetogenin", desc: "Kaya senyawa acetogenin bioaktif untuk regenerasi dan memelihara ketahanan sel." },
  { nama: "Temulawak", latin: "Curcuma xanthorrhiza", senyawa: "Kurkuminoid", desc: "Kurkuminoid tinggi yang sangat efektif melindungi fungsi hepar, melancarkan..." },
  { nama: "Lengkuas", latin: "Alpinia galanga", senyawa: "Galangin", desc: "Rimpang penghangat berkhasiat antimikroba alami untuk meredakan..." },
  { nama: "Daun Kelor", latin: "Moringa oleifera", senyawa: "Flavonoid", desc: "Superfood nusantara sarat antioksidan, zat besi, dan mineral esensial penunjang." },
];

export default function HomePage() {
  return (
    <div className="bg-white text-stone-800">
      {/* ============ HERO ============ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
            <Sparkles size={14} /> 95% Tingkat Akurasi Racikan Herbal Nusantara
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-stone-900">
            Solusi Sehat Alami,<br />
            Didukung <span className="text-emerald-700">Kearifan Herbal & AI</span>
          </h1>

          <p className="mt-5 text-stone-500 max-w-lg">
            Kebanyakan dari kita bertahun-tahun bergantung pada obat sintetis
            tanpa tahu khasiat ramuan lokal. Jampi Jawi memadukan naskah
            Usadha TaruPramana dengan analisis cerdas keluhan tubuh agar Anda
            mendapatkan racikan alami tepat dosis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-5 py-3 rounded-xl transition">
              Mulai Skrining Herbal <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center gap-2 text-stone-700 font-medium px-2 py-3">
              <PlayCircle size={18} /> Pelajari Cara Kerja
            </button>
          </div>

          <p className="mt-6 text-xs text-stone-400">
            Tervalidasi 50+ Naskah Kuno Lontar TaruPramana & Riset Fitofarmaka
          </p>
        </div>

        {/* HUD card */}
        <div className="bg-white border border-stone-100 rounded-3xl shadow-xl shadow-emerald-900/5 p-4">
          <div className="flex items-center justify-between text-xs text-stone-400 px-1 pb-3">
            <span>HUD DIAGNOSTIK HERBAL v.3.2</span>
            <span className="flex items-center gap-1 text-emerald-600">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> SYS ACTIVE
            </span>
          </div>
          <div className="h-56 rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-100" />
          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="bg-white border border-stone-200 rounded-full px-3 py-1 flex items-center gap-1">
              <BadgeCheck size={14} className="text-emerald-600" /> Curcuma xanthorrhiza terdeteksi
            </span>
          </div>
          <div className="mt-4 border-t border-stone-100 pt-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-stone-400">TIPE KELUHAN</p>
              <p className="font-medium text-stone-800">Lambung & Kembung</p>
            </div>
            <div>
              <p className="text-stone-400">FORMULASI USADHA</p>
              <p className="font-medium text-stone-800">Pramana Rimpang</p>
            </div>
          </div>
          <div className="mt-4 bg-emerald-50 rounded-xl px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-emerald-700 uppercase tracking-wide">Rekomendasi Seduhan</p>
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
              <p className="mt-3 font-semibold">50+ Spesies Terkurasi</p>
              <p className="text-xs text-stone-500 mt-1">Diverifikasi khasiat terapeutiknya dalam pustaka TaruPramana.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-red-600 tracking-wide">
              KENAPA MENGANDALKAN OBAT SINTETIS BISA GAGAL
            </span>
            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Pahami kondisi tubuh secara <span className="text-emerald-700">menyeluruh</span>
            </h2>
            <p className="mt-4 text-stone-500">
              Gejala ringan seperti perut begah, migrain tegang, dan letih
              kronis sering merupakan sinyal ketidakseimbangan sistemik organ,
              bukan sekadar keluhan yang harus dibungkam dengan pereda nyeri sesaat.
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
              "Jampi Jawi lahir untuk menjembatani naskah Usadha TaruPramana
              Bali & Jamu Jawa kuno dengan kemudahan skrining mandiri modern
              di rumah Anda."
              <footer className="mt-2 not-italic text-xs font-semibold text-stone-700">
                PRAKARSA FILOSOFI TARUPRAMANA · Lontar Medis Nusantara
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ 3 LANGKAH ============ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <span className="text-xs font-semibold text-emerald-700 tracking-wide">ALUR RACIKAN PINTAR</span>
          <h2 className="mt-3 text-3xl font-bold text-stone-900">Tiga Langkah Menuju Sehat Alami</h2>
          <p className="mt-3 text-stone-500">
            Skrining cerdas keluhan mandiri kami mengubah gejala harian
            menjadi panduan racikan herbal terstandar, aman, dan mudah
            disiapkan di dapur keluarga.
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
                    <p className="text-stone-400">ENGINE · TARUPRAMANA</p>
                    <p>Curcuma & Kaempferia — Rasio 3:1 Infus Hangat</p>
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
                Pilih keluhan di bawah ini untuk melihat racikan herbal
                tradisional teruji yang cocok membantu pemulihan kondisi tubuh Anda.
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

      {/* ============ ENSIKLOPEDIA PREVIEW ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold text-emerald-700 tracking-wide">PUSTAKA FITOFARMAKA LOKAL</span>
          <h2 className="mt-3 text-3xl font-bold text-stone-900">
            Ensiklopedia 50+ Tanaman Obat Nusantara
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl mx-auto text-sm">
            Cari dan pelajari khasiat berbagai tanaman herbal asli Nusantara
            beserta senyawa aktif dan dosis seduhan higienisnya.
          </p>

          <div className="mt-8 max-w-xl mx-auto flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2">
            <Search size={18} className="text-stone-400" />
            <input
              type="text"
              placeholder="Ketik nama tanaman atau manfaat yang dicari (cth: Temulawak, Daun Sirsak)..."
              className="flex-1 outline-none text-sm text-stone-700 placeholder:text-stone-400"
            />
            <button className="bg-emerald-800 text-white text-sm font-medium px-4 py-2 rounded-full">
              Cari Herba
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {tanaman.map(({ nama, latin, senyawa, desc }) => (
            <div key={nama} className="rounded-2xl overflow-hidden border border-stone-200">
              <div className="h-36 bg-gradient-to-br from-emerald-100 to-amber-100 relative">
                <span className="absolute top-3 left-3 bg-white/90 text-[10px] font-medium px-2 py-1 rounded-full">
                  HERBAL ALAMI
                </span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-stone-800">{nama}</p>
                <p className="text-xs italic text-stone-400">{latin}</p>
                <p className="text-xs text-stone-500 mt-2">{desc}</p>
                <p className="text-[10px] text-emerald-700 font-medium mt-3 uppercase">
                  Senyawa: {senyawa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-3xl px-8 py-16 text-center text-white">
          <span className="text-xs font-semibold text-emerald-300 tracking-wide">LANGKAH SEHAT KELUARGA</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Siap Memulai Hidup Sehat Alami Hari Ini?
          </h2>
          <p className="mt-4 text-emerald-100 max-w-lg mx-auto text-sm">
            Gabung bersama ribuan keluarga yang telah beralih ke pencegahan
            alami dengan racikan herbal terpercaya berbasis Usadha TaruPramana.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-800 font-medium px-6 py-3 rounded-xl">
            Mulai Skrining Mandiri Sekarang
          </button>
          <div className="mt-6 flex justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <p className="text-xs text-emerald-200 mt-1">
            Dipercaya oleh 12.000+ pengguna di seluruh penjuru Indonesia
          </p>
        </div>
      </section>
    </div>
  );
}