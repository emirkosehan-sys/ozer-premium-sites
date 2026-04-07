import { useState } from "react";
import koy1 from "../assets/koy1.jpg";
import koy2 from "../assets/koy2.jpg";
import koy3 from "../assets/koy3.jpg";
import koy4 from "../assets/koy4.jpg";
import koy5 from "../assets/koy5.jpg";
import traktor1 from "../assets/traktor1.jpg";
import traktor2 from "../assets/traktor2.jpg";
import traktor3 from "../assets/traktor3.jpg";
import hayvan1 from "../assets/hayvan1.jpg";
import hayvan2 from "../assets/hayvan2.jpg";
import hayvan3 from "../assets/hayvan3.jpg";
import traktor4 from "../assets/traktor4.jpg";
import koy7 from "../assets/koy7.jpg";
import koy8 from "../assets/koy8.jpg";
import koy9 from "../assets/koy9.jpg";
import koy10 from "../assets/koy10.jpg";
import tarla1 from "../assets/tarla1.jpg";
import tarla2 from "../assets/tarla2.jpg";
import tarla3 from "../assets/tarla3.jpg";

const categories = [
  { id: "traktor", title: "Traktör" },
  { id: "hayvan", title: "Hayvanlar" },
  { id: "tarla", title: "Tarla" },
];

const allItems = [
  // HAYVAN
  {
    image: hayvan1,
    title: "Hayvan",
    desc: "Büyükbaş hayvan",
    category: "hayvan",
  },
  {
    image: hayvan2,
    title: "Hayvan",
    desc: "Çiftlik yaşamı",
    category: "hayvan",
  },
  {
    image: hayvan3,
    title: "Hayvan",
    desc: "Doğal üretim",
    category: "hayvan",
  },

  // TRAKTÖR
  {
    image: traktor4,
    title: "Traktör",
    desc: "Güçlü ekipman",
    category: "traktor",
  },

  // TARLA
  {
    image: koy7,
    title: "Tarla",
    desc: "Üretim",
    category: "tarla",
  },
  {
    image: koy8,
    title: "Tarla",
    desc: "Doğal tarım",
    category: "tarla",
  },
  {
    image: koy9,
    title: "Tarla",
    desc: "Çalışma",
    category: "tarla",
  },
  {
    image: koy10,
    title: "Tarla",
    desc: "Köy hayatı",
    category: "tarla",
  },
  {
    image: tarla1,
    title: "Tarla",
    desc: "Toprak",
    category: "tarla",
  },
  {
    image: tarla2,
    title: "Tarla",
    desc: "Verim",
    category: "tarla",
  },
  {
    image: tarla3,
    title: "Tarla",
    desc: "Üretim süreci",
    category: "tarla",
  },
];
  {
    image: koy1,
    title: "Tarla",
    desc: "Tarla çalışması",
    category: "tarla",
  },
  {
    image: koy2,
    title: "Tarla",
    desc: "Doğal üretim",
    category: "tarla",
  },
  {
    image: koy3,
    title: "Tarla",
    desc: "Üretim süreci",
    category: "tarla",
  },
  {
    image: koy4,
    title: "Traktör",
    desc: "Traktör çalışması",
    category: "traktor",
  },
  {
    image: koy5,
    title: "Traktör",
    desc: "Güçlü ekipman",
    category: "traktor",
  },
  {
    image: traktor1,
    title: "Traktör",
    desc: "Modern tarım",
    category: "traktor",
  },
  {
    image: traktor2,
    title: "Traktör",
    desc: "Tarla çalışması",
    category: "traktor",
  },
  {
    image: traktor3,
    title: "Traktör",
    desc: "Güçlü üretim",
    category: "traktor",
  },
];
export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("traktor");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = allItems.filter(
    (item) => item.category === selectedCategory
  );

  const currentTitle =
    categories.find((c) => c.id === selectedCategory)?.title || "Galeri";

  return (
    <>
      <section id="galeri" className="gallery-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow green">Fotoğraf Galerisi</div>
            <h2>Kategorilere göre inceleyin</h2>
            <p>
              Traktör, hayvanlar ve tarla görsellerini ayrı ayrı görüntüleyebilirsiniz.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-card ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
                type="button"
              >
                <span className="category-card-title">{category.title}</span>
                <span className="category-card-text">
                  {category.title} fotoğraflarını aç
                </span>
              </button>
            ))}
          </div>

          <div className="category-detail-box">
            <div className="category-detail-head">
              <div>
                <div className="eyebrow green">Seçili Kategori</div>
                <h3>{currentTitle}</h3>
              </div>
            </div>

            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <div key={index} className="gallery-card">
                  <div className="gallery-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-image"
                      onClick={() => setSelectedImage(item.image)}
                    />
                  </div>

                  <div className="gallery-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Büyük görsel" className="lightbox-image" />
        </div>
      )}
    </>
  );
}
