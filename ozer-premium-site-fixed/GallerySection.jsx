// src/components/GallerySection.jsx
import traktor1 from "../assets/traktor1.jpg";
import traktor2 from "../assets/traktor2.jpg";
import traktor3 from "../assets/traktor3.jpg";

const galleryItems = [
  {
    image: traktor1,
    title: "Traktör ve Çiftlik",
    desc: "Kullandığımız ekipmanlardan bir görünüm.",
  },
  {
    image: traktor2,
    title: "Traktör ve Çiftlik",
    desc: "Kullandığımız ekipmanlardan bir görünüm.",
  },
  {
    image: traktor3,
    title: "Traktör ve Çiftlik",
    desc: "Kullandığımız ekipmanlardan bir görünüm.",
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-10 max-w-2xl">
        <div className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-700">
          Fotoğraf Galerisi
        </div>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Çiftliğimizden kareler
        </h2>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          Büyükbaş hayvancılık, tarımsal üretim, traktör çalışmaları ve köy yaşamını
          yansıtan görseller burada yer alıyor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="text-lg font-bold text-emerald-900">{item.title}</div>
              <div className="mt-2 text-sm leading-6 text-stone-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
