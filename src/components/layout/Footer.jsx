import { Link } from "react-router-dom";
import { Leaf, Mail, Globe, MapPin } from "lucide-react";

const menuUtama = [
  { label: "Beranda", to: "/" },
  { label: "Deteksi Gejala", to: "/rekomendasi" },
  { label: "Ensiklopedia Tanaman", to: "/ensiklopedia" },
  { label: "Profil", to: "/profil" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1d17] text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Kolom 1 — brand */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center">
              <Leaf size={14} className="text-white" />
            </span>
            Jampi Jawi
          </div>
          <p className="mt-4 text-sm text-stone-400 max-w-xs">
            Platform kecerdasan herbal dan pengobatan tradisional Nusantara
            terkurasi berbasis teknologi untuk kesehatan alami keluarga.
          </p>
        </div>

        {/* Kolom 2 — menu utama */}
        <div>
          <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-4">
            MENU UTAMA
          </p>
          <ul className="space-y-2 text-sm">
            {menuUtama.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-stone-400 hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3 — kontak */}
        <div>
          <p className="text-xs font-semibold text-emerald-400 tracking-wide mb-4">
            KONTAK & KONSULTASI
          </p>
          <ul className="space-y-3 text-sm text-stone-400">
            <li className="flex items-center gap-2">
              <Mail size={14} /> halo@jampijawi.id
            </li>
            <li className="flex items-center gap-2">
              <Globe size={14} /> www.jampijawi.id
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> Surabaya, Indonesia
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© 2026 Jampi Jawi. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
