import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const tanamanInfo = {
  kunyit: { nama: "Kunyit", latin: "Curcuma longa", senyawa: "Kurkumin", foto: "/kunyit.png" },
  temulawak: { nama: "Temulawak", latin: "Curcuma xanthorrhiza", senyawa: "Kurkuminoid", foto: "/temulawak.jpg" },
  jahe: { nama: "Jahe", latin: "Zingiber officinale", senyawa: "Gingerol", foto: "/jahe.jpeg" },
  kencur: { nama: "Kencur", latin: "Kaempferia galanga", senyawa: "Etil Sinamat", foto: "/kencur.jpg" },
  "daun-sirih": { nama: "Daun Sirih", latin: "Piper betle", senyawa: "Eugenol", foto: "/daun-sirih.jpg" },
  "asam-jawa": { nama: "Asam Jawa", latin: "Tamarindus indica", senyawa: "Asam Tartarat", foto: "/asam-jawa.jpg" },
  "daun-kelor": { nama: "Daun Kelor", latin: "Moringa oleifera", senyawa: "Flavonoid", foto: "/daun-kelor.jpg" },
  lengkuas: { nama: "Lengkuas", latin: "Alpinia galanga", senyawa: "Galangin", foto: "/lengkuas.jpg" },
  sambiloto: { nama: "Sambiloto", latin: "Andrographis paniculata", senyawa: "Andrografolid", foto: "/sambiroto.jpeg" },
};

export default function DetailHerbalPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const info = tanamanInfo[slug];

  if (!info) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-stone-500">{t("detailHerbal.tidakDitemukan")}</p>
        <Link to="/ensiklopedia" className="text-emerald-700 font-medium mt-4 inline-block">
          {t("detailHerbal.kembali")}
        </Link>
      </div>
    );
  }

  const nama = t(`tanamanData.${slug}.nama`);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        <Link to="/ensiklopedia" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800">
          <ArrowLeft size={16} /> {t("detailHerbal.kembali")}
        </Link>

        <img
          src={info.foto}
          alt={nama}
          className="mt-6 h-56 w-full rounded-2xl object-cover"
        />

        <span className="mt-6 inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full uppercase">
          {t("detailHerbal.badge")}
        </span>
        <h1 className="mt-3 text-3xl font-bold text-stone-900">{nama}</h1>
        <p className="italic text-stone-400">{info.latin}</p>

        <p className="mt-4 text-stone-600">{t(`tanamanDetailData.${slug}.deskripsi`)}</p>

        <div className="mt-8 space-y-5">
          <div className="border border-stone-200 rounded-2xl p-5">
            <p className="font-semibold text-stone-800">{t("detailHerbal.manfaat")}</p>
            <p className="text-sm text-stone-500 mt-1">{t(`tanamanDetailData.${slug}.manfaat`)}</p>
          </div>
          <div className="border border-stone-200 rounded-2xl p-5">
            <p className="font-semibold text-stone-800">{t("detailHerbal.caraPenggunaan")}</p>
            <p className="text-sm text-stone-500 mt-1">{t(`tanamanDetailData.${slug}.cara_penggunaan`)}</p>
          </div>
          <div className="border border-stone-200 rounded-2xl p-5">
            <p className="font-semibold text-stone-800">{t("detailHerbal.dosisAnjuran")}</p>
            <p className="text-sm text-stone-500 mt-1">{t(`tanamanDetailData.${slug}.dosis_anjuran`)}</p>
          </div>
          <div className="border border-amber-200 bg-amber-50 rounded-2xl p-5">
            <p className="font-semibold text-amber-800">{t("detailHerbal.efekSamping")}</p>
            <p className="text-sm text-amber-700 mt-1">{t(`tanamanDetailData.${slug}.efek_samping`)}</p>
          </div>
        </div>

        <span className="mt-3 text-xs text-emerald-700 font-medium uppercase block">
          {t("detailHerbal.senyawaAktif")}: {info.senyawa}
        </span>
      </div>
    </div>
  );
}