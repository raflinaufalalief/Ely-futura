import Image from "next/image"

const VisiMisi = () => {
  return (
    <section>
      <div className="px-4 mx-auto containers">
        <div className="mx-auto text-center">
          <h2 className="mt-2 text-3xl capitalize title">Misi dan Visi kami</h2>
          <hr className="h-1 mx-auto mt-4 border-none w-36 bg-accent" />
        </div>

        <div className="grid max-w-full grid-cols-1 gap-20 mt-10 text-left mobile:px-4 Sdesktop:mt-20">
          <div className="flex flex-col items-center justify-center Sdesktop:flex-row">
            <Image
              className="w-[400px] rounded-md Sdesktop:order-2"
              src="/assets/visi.jpg"
              alt="visi"
              width={500}
              height={500}
            />
            <div className="mx-auto mobile:pt-10">
              <h1 className="text-3xl font-bold text-primary">Visi</h1>
              <p className="mt-6 text-lg text-secondary ">
                Menjadi perusahaan jual beli properti yang terdepan dan
                terpercaya, memberikan solusi properti yang inovatif dan
                memenuhi kebutuhan klien kami dengan profesionalitas dan
                keunggulan layanan.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center Sdesktop:flex-row">
            <Image
              className="w-[400px] rounded-md Sdesktop:ml-0 "
              src="/assets/misi.jpg"
              alt="misi"
              width={500}
              height={500}
            />
            <div className="Sdesktop:ml-10 mobile:pt-10">
              <h3 className="text-3xl font-bold text-primary">Misi</h3>
              <p className="mt-6 text-lg text-secondary">
                Menawarkan pilihan properti yang beragam dan berkualitas tinggi
                kepada klien kami.
                <br /> Memberikan layanan pelanggan yang ramah, responsif, dan
                terpercaya dalam setiap tahap transaksi jual beli properti.
                <br />
                Membantu klien dalam menemukan properti yang sesuai dengan
                kebutuhan dan anggaran mereka. <br /> Menjalin hubungan yang
                kuat dengan pemilik properti, pengembang, dan mitra lainnya
                untuk memastikan pasokan properti yang memadai bagi klien kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisiMisi
