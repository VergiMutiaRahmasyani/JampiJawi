import { Link, useLocation } from "react-router-dom";
import { Leaf, Moon, LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const menu = [
  { label: "Beranda", to: "/" },
  { label: "Ensiklopedia Tanaman", to: "/ensiklopedia" },
  { label: "Deteksi Gejala", to: "/rekomendasi" }
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-stone-800">
          <span className="w-7 h-7 rounded-full bg-emerald-800 flex items-center justify-center">
            <Leaf size={14} className="text-white" />
          </span>
          Jampi Jawi
        </Link>

        {/* Pill menu tengah */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-50 border border-stone-100 rounded-full p-1">
          {menu.map(({ label, to }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active
                    ? "bg-emerald-800 text-white"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Ikon kanan */}
        <div className="flex items-center gap-3">
          <button className="text-xs font-medium text-stone-500 hover:text-stone-800 w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center">
            ID
          </button>
          <button className="text-stone-500 hover:text-stone-800 w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center">
            <Moon size={14} />
          </button>

          {user ? (
            <>
              <Link
                to="/profil"
                className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center"
              >
                <User size={15} />
              </Link>
              <button
                onClick={logout}
                className="text-stone-400 hover:text-red-600"
                title="Logout"
              >
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium bg-emerald-800 text-white px-4 py-2 rounded-full"
            >
              Deteksi
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}