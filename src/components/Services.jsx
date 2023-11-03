import {
  BsFillHouseGearFill,
  BsFillHousesFill,
  BsHouseAddFill,
  BsHouseCheckFill,
} from "react-icons/bs"
const Services = () => (
  <section className="Sdesktop:pb-0">
    {/* Code block starts */}
    <div className="py-10 mx-aut">
      <div className="flex flex-col items-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mt-2 text-3xl capitalize title">Layanan Kami</h2>
          <hr className="h-1 mx-auto mt-4 border-none w-36 bg-accent" />
        </div>
      </div>
    </div>
    <section className="py-12 mt-12 bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
      <div className="px-4 focus:outline-none lg:px-0">
        <div className="container flex flex-wrap px-2 mx-auto lg:px-24">
          <div className="flex pb-10 focus:outline-none sm:w-full Sdesktop:w-1/2 Sdesktop:border-r sm:border-r-0 lg:pt-10">
            <div className="flex items-center mr-5 text-3xl text-primary ">
              <BsFillHousesFill />
            </div>
            <div className="Sdesktop:w-9/12 lg:w-9/12">
              <h2 className="text-lg font-semibold leading-5 text-primary focus:outline-none">
                Pembelian Properti
              </h2>
              <p className="pt-2 text-base leading-normal text-secondary focus:outline-none xl:w-10/12">
                Dari pemilihan properti hingga proses negosiasi, tim kami akan
                memberikan panduan penuh untuk memastikan Anda mendapatkan
                properti yang tepat sesuai keinginan dan anggaran Anda.
              </p>
            </div>
          </div>
          <div className="flex focus:outline-none sm:w-full Sdesktop:w-1/2 lg:pb-10 lg:pt-10">
            <div className="flex items-center mr-5 text-3xl text-primary sm:ml-0 Sdesktop:ml-10 lg:ml-10">
              <BsHouseAddFill />
            </div>
            <div className="Sdesktop:w-9/12 lg:w-9/12 ">
              <h2 className="text-lg font-semibold leading-5 text-primary focus:outline-none">
                Penyewaan Properti
              </h2>
              <p className="pt-2 text-base leading-normal text-secondary focus:outline-none xl:w-10/12">
                Apakah Anda mencari rumah atau ruang komersial untuk disewa,
                kami memiliki beragam pilihan properti yang akan memenuhi
                kebutuhan Anda. Kami akan membantu Anda menemukan properti yang
                cocok dengan kebutuhan Anda.
              </p>
            </div>
          </div>
          <div className="flex pt-10 focus:outline-none sm:w-full Sdesktop:w-1/2 lg:border-t Sdesktop:border-t sm:border-t-0 Sdesktop:border-r sm:border-r-0 lg:pb-20">
            <div className="flex items-center mr-5 text-3xl text-primary ">
              <BsHouseCheckFill />
            </div>
            <div className="Sdesktop:w-9/12 lg:w-9/12 ">
              <h2 className="text-lg font-semibold leading-5 text-primary focus:outline-none">
                Penjualan Properti
              </h2>
              <p className="pt-2 text-base leading-normal text-secondary focus:outline-none xl:w-10/12">
                kami akan membantu memasarkan properti Anda dengan strategi yang
                tepat, menjangkau calon pembeli yang sesuai, dan mendukung Anda
                dalam seluruh proses transaksi.
              </p>
            </div>
          </div>
          <div className="flex pt-10 focus:outline-none sm:w-full Sdesktop:w-1/2 lg:border-t Sdesktop:border-t sm:border-t-0 lg:pb-20">
            <div className="flex items-center mr-5 text-3xl text-primary sm:ml-0 Sdesktop:ml-10 lg:ml-10">
              <BsFillHouseGearFill />
            </div>
            <div className="Sdesktop:w-9/12 lg:w-9/12 ">
              <h2 className="text-lg font-semibold leading-5 text-primary focus:outline-none">
                Renovasi & lain-lain
              </h2>
              <p className="pt-2 text-base leading-normal text-secondary focus:outline-none xl:w-10/12">
                kami menawarkan desain dan konsultasi, renovasi interior,
                perombakan struktural, renovasi eksterior, peningkatan efisiensi
                energi, serta pemeliharaan dan perbaikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Code block ends */}
  </section>
)
export default Services
