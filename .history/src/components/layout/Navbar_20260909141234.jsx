import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="font-bold text-lg">JamuJawi</Link>
      <div className="flex gap-4 items-center">
        <Link to="/ensiklopedia">Ensiklopedia</Link>
        <Link to="/rekomendasi">Rekomendasi</Link>
        <Link to="/konsultasi">Konsultasi</Link>
        <Link to="/artikel">Artikel</Link>
        {user ? (
          <>
            <Link to="/riwayat">Riwayat</Link>
            <Link to="/profil">Profil</Link>
            <button onClick={logout} className="text-red-600">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}