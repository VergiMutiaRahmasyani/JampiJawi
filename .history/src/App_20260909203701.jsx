import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/shared/ProtectedRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EnsiklopediaPage from "./pages/EnsiklopediaPage";
import DetailHerbalPage from "./pages/DetailHerbalPage";
import KeluhanPage from "./pages/KeluhanPage";
import HasilRekomendasiPage from "./pages/HasilRekomendasiPage";
import KonsultasiPage from "./pages/KonsultasiPage";
import ArtikelPage from "./pages/ArtikelPage";
import DetailArtikelPage from "./pages/DetailArtikelPage";
import RiwayatPage from "./pages/RiwayatPage";
import ProfilPage from "./pages/ProfilPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/ensiklopedia" element={<EnsiklopediaPage />} />
            <Route path="/ensiklopedia/:slug" element={<DetailHerbalPage />} />

            <Route path="/keluhan" element={<KeluhanPage />} />
            <Route path="/keluhan/hasil/:id" element={<HasilRekomendasiPage />} />

            <Route path="/konsultasi" element={<KonsultasiPage />} />

            <Route path="/artikel" element={<ArtikelPage />} />
            <Route path="/artikel/:slug" element={<DetailArtikelPage />} />

            <Route
              path="/riwayat"
              element={
                <ProtectedRoute>
                  <RiwayatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profil"
              element={
                <ProtectedRoute>
                  <ProfilPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;