import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const racikanInfo = {
  "jamu-kunyit-asam": { foto: "/jamu-kunyit-asam.jpeg" },
  "jamu-beras-kencur": { foto: "/jamu-beras-kencur.jpg" },
  "wedang-jahe-sereh": { foto: "/wedang-jahe-sereh.jpg" },
  "air-rebusan-sambiloto": { foto: "/air-rebusan-sambiloto.jpg" },
  "jamu-cabe-puyang": { foto: "/jamu-cabe-puyang.jpg" },
  "jamu-pahitan": { foto: "/jamu-pahitan.jpg" },
  "jamu-sinom": { foto: "/jamu-sinom.jpg" },
  "jamu-uyup-uyup": { foto: "/jamu-uyup-uyup.jpg" },
  "jamu-galian-singset": { foto: "/jamu-galian-singset.jpg" },
  "wedang-uwuh": { foto: "/wedang-uwuh.jpg" },
};

export default function DetailRacikanPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const info = racikanInfo[slug];

  if (!info) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-stone-500">{t("detailRacikan.tidakDitemukan")}</p>
        <Link to="/ensiklopedia" className="text-emerald-700 font-medium mt-4 inline-block">
          {t("detailRacikan.kembali")}
        </Link>
      </div>
    );
  }

  const nama = t(`racikanData.${slug}.nama`);
  const tag = t(`racikanData.${slug}.tag`);
  const bahan = t(`racikanDetailData.${slug}.bahan`);
  const langkah = t(`racikanDetailData.${slug}.langkah`);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        <Link to="/ensiklopedia" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800">
          <ArrowLeft size={16} /> {t("detailRacikan.kembali")}
        </Link>

        <img
          src={info.foto}
          alt={nama}
          className="mt-6 h-56 w-full rounded-2xl object-cover"
        />

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full uppercase">
            {tag}
          </span>
          <span className="flex items-center gap-1 text-xs text-stone-500">
            <Clock size={14} /> {t(`racikanDetailData.${slug}.waktu`)}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-bold text-stone-900">{nama}</h1>
        <p className="mt-2 text-stone-500">{t("detailRacikan.untuk")}: {t(`racikanDetailData.${slug}.untuk`)}</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-stone-800 mb-3">{t("detailRacikan.bahanBahan")}</p>
            <ul className="space-y-2">
              {bahan?.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-stone-800 mb-3">{t("detailRacikan.caraMembuat")}</p>
            <ol className="space-y-3">
              {langkah?.map((l, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-600">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {l}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}