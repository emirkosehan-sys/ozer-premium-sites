import "./styles.css";

export default function App() {
  const features = [
    {
      title: "Büyükbaş Hayvancılık",
      description:
        "Özenle yetiştirilen büyükbaş hayvanlar, düzenli bakım ve doğal üretim anlayışı.",
      icon: "🐄",
    },
    {
      title: "Tarımsal Üretim",
      description:
        "Toprağa saygılı, verimli ve sürdürülebilir üretim yaklaşımıyla tarım faaliyetleri.",
      icon: "🌾",
    },
    {
      title: "Güvenilir Çiftlik",
      description:
        "Tokat Söngüt Köyü'nde doğal, samimi ve güçlü bir aile işletmesi kimliği.",
      icon: "🚜",
    },
  ];

  const stats = [
    { label: "Doğal Üretim", value: "%100" },
    { label: "Köy Ruhunu Yansıtan", value: "Gerçek" },
    { label: "Marka Duruşu", value: "Premium" },
  ];

  const cards = [
    {
      title: "Çiftliğimiz",
      text: "Modern ekipman, köy kültürü ve güçlü üretim altyapısını bir araya getiriyoruz.",
    },
    {
      title: "Üretim Anlayışımız",
      text: "Kalite, sürdürülebilirlik ve güvenilirlik odaklı bir çalışma düzeni benimsiyoruz.",
    },
    {
      title: "Dijital Vizyon",
      text: "Web sitesi ve YouTube kanalıyla üretim hikayemizi daha geniş kitlelerle buluşturuyoruz.",
    },
  ];

  return (
    <div className="page">
      <a href="https://wa.me/905301151933" target="_blank" rel="noreferrer" className="whatsapp-float">
        WhatsApp ile Yaz
      </a>

      <header className="hero">
        <div className="hero-bg hero-bg-one"></div>
        <div className="hero-bg hero-bg-two"></div>
        <div className="container">
          <nav className="nav">
            <div>
              <div className="brand-main">ÖZER</div>
              <div className="brand-sub">Tarım ve Hayvancılık</div>
            </div>
            <div className="nav-links">
              <a href="#hakkimizda">Hakkımızda</a>
              <a href="#hizmetler">Faaliyetler</a>
              <a href="#youtube">YouTube</a>
              <a href="#iletisim">İletişim</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div>
              <div className="badge">Tokat • Söngüt Köyü</div>
              <h1 className="hero-title">
                Tokat Söngüt Köyü'nde
                <span> güvenilir tarım ve hayvancılık.</span>
              </h1>
              <p className="hero-text">
                Özer Tarım ve Hayvancılık; büyükbaş hayvancılık, tarımsal üretim ve köy kültürünü
                modern bir marka anlayışıyla bir araya getiren güçlü bir çiftlik yapısını temsil eder.
              </p>

              <div className="button-row">
                <a href="https://wa.me/905301151933" target="_blank" rel="noreferrer" className="btn btn-gold">
                  WhatsApp ile Ulaş
                </a>
                <a
                  href="https://www.youtube.com/@%C3%B6zertar%C4%B1mvehayvanc%C4%B1l%C4%B1k"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  YouTube Kanalımız
                </a>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="card-header">
                  <div>
                    <div className="eyebrow">Özer Çiftlik Vitrini</div>
                    <div className="card-title">Marka Kimliği</div>
                  </div>
                  <div className="emoji">🌾</div>
                </div>

                <div className="stats-grid">
                  {stats.map((item) => (
                    <div key={item.label} className="stat-box">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="highlight-box">
                  <div className="highlight-eyebrow">Öne çıkan alanlar</div>
                  <div className="pill-grid">
                    <div className="pill">Büyükbaş</div>
                    <div className="pill">Tarım</div>
                    <div className="pill">YouTube İçerikleri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="hizmetler" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow green">Faaliyetlerimiz</div>
            <h2>Çiftliğimizin ana gücü</h2>
            <p>
              Gelenekten ilham alan, güven veren ve dijitalde güçlü görünen bir çiftlik markası için temel alanlarımız.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="section section-white">
        <div className="container two-col">
          <div className="about-box">
            <div className="eyebrow green">Hakkımızda</div>
            <h2>Köyden gelen gerçek üretim hikâyesi</h2>
            <p>
              Özer Tarım ve Hayvancılık, Tokat Söngüt Köyü'nde üretimin emeğe, toprağa ve güvene dayandığı bir
              çiftlik yaklaşımını temsil eder. Büyükbaş hayvancılık ile tarımsal faaliyetleri aynı çatı altında
              buluştururken, geleneksel üretim kültürünü modern görünümle destekler.
            </p>
            <p>
              Bu site; çiftliğinizi tanıtmak, müşterilerinizle güven ilişkisi kurmak ve YouTube içeriklerinizi
              sergilemek için tasarlanmış premium bir başlangıç sayfasıdır.
            </p>
          </div>

          <div className="card-column">
            {cards.map((card) => (
              <div key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="youtube" className="section">
        <div className="container">
          <div className="youtube-box">
            <div>
              <div className="eyebrow dark">YouTube Kanalı</div>
              <h2>Çiftliğin hikâyesini videolarla büyütün</h2>
              <p>
                Çiftlik yaşamı, traktör çalışmaları, bakım süreçleri ve üretim görüntüleriyle güçlü bir dijital marka oluşturun.
              </p>
              <a
                href="https://www.youtube.com/@%C3%B6zertar%C4%B1mvehayvanc%C4%B1l%C4%B1k"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Kanalı Aç
              </a>
            </div>

            <div className="video-card">
              <div className="video-placeholder">
                <div className="play">▶</div>
                <div className="video-title">YouTube Kanalımız</div>
                <div className="video-subtitle">youtube.com/@özertarımvehayvancılık</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="social-box">
            <div className="eyebrow green">Sosyal Medya</div>
            <h2>Instagram'da bizi takip edin</h2>
            <p>Günlük paylaşımlar, çiftlikten görüntüler ve yeni içerikler için Instagram hesabımıza göz atın.</p>
            <a
              href="https://www.instagram.com/ozertarimvehayvancilik"
              target="_blank"
              rel="noreferrer"
              className="btn btn-green"
            >
              Instagram Hesabımız
            </a>
          </div>
        </div>
      </section>

      <section id="iletisim" className="footer-contact">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow gold">İletişim</div>
            <h2>Bizimle iletişime geçin</h2>
            <p>
              Telefon, WhatsApp, e-posta ve sosyal medya hesaplarımız üzerinden bize ulaşabilirsiniz.
            </p>

            <div className="contact-list">
              <div className="contact-item">📍 Tokat / Söngüt Köyü</div>
              <div className="contact-item">📞 +90 530 115 19 33</div>
              <div className="contact-item">📱 WhatsApp: +90 530 115 19 33</div>
              <div className="contact-item">📧 emirkosehan@gmail.com</div>
            </div>
          </div>

          <div className="quick-links">
            <h3>Hızlı Bağlantılar</h3>
            <div className="quick-links-grid">
              <a href="https://wa.me/905301151933" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                WhatsApp'tan Yaz
              </a>
              <a href="mailto:emirkosehan@gmail.com" className="btn btn-outline-light">
                E-posta Gönder
              </a>
              <a
                href="https://www.instagram.com/ozertarimvehayvancilik"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                Instagram'a Git
              </a>
              <a
                href="https://www.youtube.com/@%C3%B6zertar%C4%B1mvehayvanc%C4%B1l%C4%B1k"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                YouTube Kanalını Aç
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}