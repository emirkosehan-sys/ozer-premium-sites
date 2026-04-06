import { useState } from "react";
import traktor1 from "../assets/traktor1.jpg";
import traktor2 from "../assets/traktor2.jpg";
import traktor3 from "../assets/traktor3.jpg";

const [selectedImage, setSelectedImage] = useState(null);
<img 
  src={item.image} 
  alt={item.title} 
  className="gallery-image"
  onClick={() => setSelectedImage(item.image)}
/>
const galleryItems = [
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
  return (
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
                <img src={item.image} alt={item.title} className="gallery-image" />
              </div>

              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section{selectedImage && (
  <div className="lightbox" onClick={() => setSelectedImage(null)}>
    <img src={selectedImage} className="lightbox-image" />
  </div>
)}>
  );
}
