import { useState } from "react";
import koy1 from "../assets/koy1.jpg";
import koy2 from "../assets/koy2.jpg";
import koy3 from "../assets/koy3.jpg";
import koy4 from "../assets/koy4.jpg";
import koy5 from "../assets/koy5.jpg";
import traktor1 from "../assets/traktor1.jpg";
import traktor2 from "../assets/traktor2.jpg";
import traktor3 from "../assets/traktor3.jpg";

const galleryItems = [
  {
  image: koy1,
  title: "Tarla Görünümü",
  desc: "Tarladan Görüntülerimiz.",
},
{
  image: koy2,
  title: "Tarla Görünümü",
  desc: "Tarladan Görüntülerimiz..",
},
{
  image: koy3,
  title: "Tarla Çalışması",
  desc: "Toprakla iç içe üretim süreci.",
},
{
  image: koy4,
  title: "Tarla Çalışması",
  desc: "Çiftlikte günlük yaşamdan kareler.",
},
{
  image: koy5,
  title: "Tarla Çalışması",
  desc: "Doğal ve sürdürülebilir üretim.",
},
  {
    image: traktor1,
    title: "Traktör ve Çiftlik",
    desc: "Çiftliğimizden güçlü ve doğal bir kare.",
  },
  {
    image: traktor2,
    title: "Tarla Çalışması",
    desc: "Tarladaki aktif üretim sürecimiz.",
  },
  {
    image: traktor3,
    title: "Modern Ekipman",
    desc: "Kullandığımız ekipmanlardan bir görünüm.",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="galeri" className="gallery-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow green">Fotoğraf Galerisi</div>
            <h2>Çiftliğimizden kareler</h2>
            <p>
              Büyükbaş hayvancılık, tarımsal üretim, traktör çalışmaları ve köy yaşamını
              yansıtan gerçek çiftlik görüntülerimiz.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
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
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Büyük görsel" className="lightbox-image" />
        </div>
      )}
    </>
  );
}
