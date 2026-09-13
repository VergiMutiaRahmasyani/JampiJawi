import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, LogOut, BookOpen, ChevronRight, Pencil } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function ProfilPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [jumlahJurnal] = useState(
    JSON.parse(localStorage.getItem("jurnal_resep") || "[]").length
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">
          Profil Saya
        </h1>
        <p className="mt-2 text-stone-500">
          Kelola informasi akun dan lihat ringkasan aktivitas jamu Jawa kamu.
        </p>

        <div className="mt-8 border border-stone-200 rounded-2xl p-6 flex items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold shrink-0">
            {user?.nama?.charAt(0).toUpperCase() || "U"}
          </span>
          <div className="flex-1">
            <p className="text-lg font-semibold text-stone-900">{user?.nama || "Pengguna"}</p>
            <p className="text-sm text-stone-500 flex items-center gap-1.5 mt-0.5">
              <Mail size={14} /> {user?.email || "-"}
            </p>
          </div>
          <button className="text-stone-400 hover:text-emerald-700">
            <Pencil size={18} />
          </button>
        </div>

        <Link
          to="/jurnal-resep"
          className="mt-5 flex items-center justify-between border border-stone-200 rounded-2xl p-6 hover:border-emerald-300 transition"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <BookOpen size={20} />
            </span>
            <div>
              <p className="font-semibold text-stone-800">Jurnal Resep Saya</p>
              <p className="text-sm text-stone-500">
                {jumlahJurnal > 0
                  ? `${jumlahJurnal} ramuan sedang kamu jalani`
                  : "Belum ada ramuan tersimpan"}
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-stone-400" />
        </Link>

        <div className="mt-8">
          <p className="text-xs font-semibold text-stone-500 uppercase mb-3">Informasi Akun</p>
          <div className="border border-stone-200 rounded-2xl divide-y divide-stone-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User size={16} className="text-stone-400" />
                <span className="text-sm text-stone-600">Nama Lengkap</span>
              </div>
              <span className="text-sm font-medium text-stone-800">{user?.nama || "-"}</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-stone-400" />
                <span className="text-sm text-stone-600">Email</span>
              </div>
              <span className="text-sm font-medium text-stone-800">{user?.email || "-"}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full inline-flex items-center justify-center gap-2 border border-red-200 text-red-600 font-medium py-3 rounded-xl text-sm hover:bg-red-50 transition"
        >
          <LogOut size={16} /> Keluar dari Akun
        </button>
      </div>
    </div>
  );
}