export default function OzerTarimSite() {
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
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <nav className="mb-14 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black tracking-[0.22em]">ÖZER</div>
              <div className="text-sm uppercase tracking-[0.35em] text-emerald-200">
                Tarım ve Hayvancılık
              </div>
            </div>
            <div className="hidden gap-6 text-sm text-emerald-100 md:flex">
              <a href="#hakkimizda" className="transition hover:text-yellow-300">
                Hakkımızda
              </a>
              <a href="#hizmetler" className="transition hover:text-yellow-300">
                Faaliyetler
              </a>
              <a href="#galeri" className="transition hover:text-yellow-300">
                Galeri
              </a>
              <a href="#youtube" className="transition hover:text-yellow-300">
                YouTube
              </a>
              <a href="#iletisim" className="transition hover:text-yellow-300">
                İletişim
              </a>
            </div>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-yellow-300/30 bg-white/10 px-4 py-2 text-sm text-yellow-200 backdrop-blur">
                Tokat • Söngüt Köyü
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Doğadan gelen güç,
                <span className="block text-yellow-300">emeğe dayanan üretim.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
                Özer Tarım ve Hayvancılık; büyükbaş hayvancılık, tarımsal üretim ve köy kültürünü
                modern bir marka anlayışıyla bir araya getiren güçlü bir çiftlik yapısını temsil eder.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#iletisim"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-stone-900 shadow-lg shadow-yellow-900/20 transition hover:scale-[1.02]"
                >
                  Bizimle İletişime Geç
                </a>
                <a
                  href="#youtube"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  YouTube Kanalımız
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-stone-100 p-6 text-stone-900">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800">
                        Özer Çiftlik Vitrini
                      </div>
                      <div className="mt-2 text-2xl font-black">Marka Kimliği</div>
                    </div>
                    <div className="text-5xl">🌾</div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                        <div className="text-2xl font-black text-emerald-900">{item.value}</div>
                        <div className="mt-1 text-sm text-stone-600">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-700 p-6 text-white">
                    <div className="text-sm uppercase tracking-[0.3em] text-yellow-200">Öne çıkan alanlar</div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white/10 p-4">Büyükbaş</div>
                      <div className="rounded-2xl bg-white/10 p-4">Tarım</div>
                      <div className="rounded-2xl bg-white/10 p-4">YouTube İçerikleri</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-700">Faaliyetlerimiz (Instagram: @ozertarimvehayvancilik)</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Çiftliğimizin ana gücü</h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Gelenekten ilham alan, güven veren ve dijitalde güçlü görünen bir çiftlik markası için temel alanlarımız.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-8 text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hakkimizda" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-700">Hakkımızda</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Köyden gelen gerçek üretim hikâyesi</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Özer Tarım ve Hayvancılık, Tokat Söngüt Köyü'nde üretimin emeğe, toprağa ve güvene dayandığı bir çiftlik yaklaşımını temsil eder.
              Büyükbaş hayvancılık ile tarımsal faaliyetleri aynı çatı altında buluştururken, geleneksel üretim kültürünü modern görünümle destekler.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Bu site; çiftliğinizi tanıtmak, müşterilerinizle güven ilişkisi kurmak ve ileride YouTube içeriklerinizi sergilemek için tasarlanmış güçlü bir başlangıç sayfasıdır.
            </p>
          </div>

          <div className="grid gap-6">
            {cards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-black text-emerald-900">{card.title}</h3>
                <p className="mt-3 leading-8 text-stone-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeri" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-700">Fotoğraf Galerisi</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Çiftliğimizden kareler</h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Büyükbaş hayvancılık, tarımsal üretim, traktör çalışmaları ve köy yaşamını yansıtan görseller burada yer alacak.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Büyükbaş hayvanlarımız",
            "Traktör ve tarla çalışmaları",
            "Çiftlik genel görünüm",
            "Ahır ve bakım alanları",
            "Doğal üretim anları",
            "Tokat Söngüt Köyü manzarası",
          ].map((item) => (
            <div key={item} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-emerald-100 via-stone-100 to-yellow-100 text-center text-lg font-semibold text-stone-500">
                Fotoğraf Alanı
              </div>
              <div className="p-5">
                <div className="text-lg font-bold text-emerald-900">{item}</div>
                <div className="mt-2 text-sm leading-6 text-stone-600">
                  Buraya gerçek çiftlik fotoğrafı eklenecek.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="youtube" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 p-8 shadow-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.35em] text-stone-800">YouTube Kanalı</div>
              <h2 className="mt-3 text-3xl font-black text-stone-900 md:text-4xl">
                Çiftliğin hikâyesini videolarla büyütün
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-800/80">
                Buraya ileride YouTube videoları, günlük çiftlik yaşamı, traktör çalışmaları, bakım süreçleri ve üretim görüntüleri eklenebilir.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <div className="aspect-video rounded-[1.5rem] bg-stone-900 p-4 text-white">
                <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] border border-white/10 border-dashed bg-stone-800 text-center">
                  <div className="text-5xl">▶</div>
                  <div className="mt-4 text-lg font-semibold">YouTube Kanalımız</div>
                  <div className="mt-2 max-w-sm text-sm text-stone-300">
                    YouTube kanalımızı ziyaret edin: https://www.youtube.com/@özertarımvehayvancılık
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-stone-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">İletişim</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Bizimle iletişime geçin</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-stone-300">
              Telefon numaranız, WhatsApp hattınız, konum bağlantınız ve sosyal medya hesaplarınız buraya eklenebilir.
            </p>

            <div className="mt-8 space-y-4 text-stone-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">📍 Tokat / Söngüt Köyü
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">📱 WhatsApp: +90 530 115 19 33</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">📞 +90 530 115 19 33</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">📧 emirkosehan@gmail.com</div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-stone-400"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-stone-400"
              />
            </div>
            <input
              type="email"
              placeholder="E-posta"
              className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-stone-400"
            />
            <textarea
              placeholder="Mesajınız"
              rows={6}
              className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-stone-400"
            />
            <button
              type="button"
              className="mt-5 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-stone-900 transition hover:scale-[1.01]"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
