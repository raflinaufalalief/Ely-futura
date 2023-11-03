import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}
const OurHope = () => {
  return (
    <section className="bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
      <div className="px-4 mx-auto containers ">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <h1 className="title">
              Apa yang Anda <br />
              Harapkan dari Kami ?
            </h1>
            <div className="pl-3 mt-5 border-l-4 border-accent">
              <p className="subtitle">
                Sebagai pelanggan atau pengguna layanan kami, ada beberapa hal
                yang dapat Anda harapkan dari kami:
              </p>
            </div>
          </div>
        </div>
        {/* end section */}

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="multi-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          sliderClass=""
          swipeable
        >
          <div className="px-2">
            <div className="w-full px-4 mt-5 border rounded shadow-md pt-9 ">
              <div className="mx-auto mb-10 max-w-[500px] mobile:max-w-[300px]   ">
                <div className="mb-8 overflow-hidden rounded ">
                  <Image
                    src="/assets/time.jpg"
                    width={500}
                    height={500}
                    alt="time"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-primary ">
                    Proses Transaksi Cepat
                  </h3>
                  <p className="text-base h-28 text-secondary">
                    Kami akan memberikan solusi yang efektif dan memberikan
                    bantuan yang dibutuhkan dengan cepat dan efisien.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="w-full px-4 mt-5 border rounded shadow-md pt-9 ">
              <div className="mx-auto mb-10 max-w-[500px] mobile:max-w-[300px]   ">
                <div className="mb-8 overflow-hidden rounded ">
                  <Image
                    src="/assets/qualitas.jpg"
                    width={500}
                    height={500}
                    alt="kualitas"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-primary ">
                    Properti Berkualitas Baik
                  </h3>
                  <p className="text-base h-28 text-secondary">
                    Properti yang memenuhi standar tinggi dalam segala aspek,
                    baik dari segi desain, konstruksi, kualitas bahan, maupun
                    fasilitas yang disediakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="w-full px-4 mt-5 border rounded shadow-md pt-9 ">
              <div className="mx-auto mb-10 max-w-[500px] mobile:max-w-[300px]   ">
                <div className="mb-8 overflow-hidden rounded ">
                  <Image
                    src="/assets/invest.jpg"
                    width={500}
                    height={500}
                    alt="investasi"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-primary ">
                    Investasi Jangka Panjang
                  </h3>
                  <p className="text-base h-28 text-secondary">
                    Tindakan membeli atau memiliki properti dengan tujuan
                    mendapatkan keuntungan finansial melalui apresiasi nilai
                    properti dan pendapatan sewa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default OurHope
