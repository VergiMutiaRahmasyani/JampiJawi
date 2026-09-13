import { Link, useLocation } from "react-router-dom";
import { Leaf, UserRound, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const { lang, toggleLang, t } = useLanguage();

  const menu = [
    { label: t("nav.beranda"), to: "/" },
    { label: t("nav.ensiklopedia"), to: "/ensiklopedia" },
    { label: t("nav.deteksi"), to: "/keluhan" },
    { label: t("nav.jurnal"), to: "/jurnal-resep" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-stone-800">
          <span className="w-7 h-7 rounded-full bg-emerald-800 flex items-center justify-center">
            <Leaf size={14} className="text-white" />
          </span>
          Jampi Jawi
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-stone-50 border border-stone-100 rounded-full p-1">
          {menu.map(({ label, to }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active ? "bg-emerald-800 text-white" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-medium text-stone-500 hover:text-stone-800 w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center"
            title="Ganti Bahasa / Switch Language"
          >
            {lang.toUpperCase()}
          </button>

          {user ? (
            <>
              <Link to="/profil" className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center" title="Profil Saya">
                <UserRound size={16} />
              </Link>
              <button onClick={logout} className="text-stone-400 hover:text-red-600" title="Logout">
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm font-medium bg-emerald-800 text-white px-4 py-2 rounded-full">
              {t("nav.masuk")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}