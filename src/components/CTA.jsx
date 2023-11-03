import React from "react"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
      <div className="relative flex flex-col px-4 mx-auto Sdesktop:flex-row containers ">
        {/* <!-- Left Column --> */}
        <div className="flex w-full pt-10 mx-auto">
          <div className="mb-16">
            <div className="Sdesktop:w-[550px]">
              <h2 className="title">
                Tawarkan Properti Anda <br /> untuk Dijual/Sewa!
              </h2>
              <div className="pl-3 mt-5 border-l-4 border-accent">
                <p className="subtitle Sdesktop:w-[500px] ">
                  Maksimalkan potensi properti Anda! Dengan menawarkan properti
                  Anda untuk dijual atau disewakan, Anda dapat mencapai tujuan
                  finansial Anda. Jangan lewatkan kesempatan ini untuk menjual
                  atau menyewakan dengan bantuan kami.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center max-w-sm mx-0 mt-5 cursor-pointer Sdesktop:max-w-full gap-x-2 Sdesktop:gap-x-6">
                <Link href="/titip-jual-sewa">
                  <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn-sm Sdesktop:btn-md btn-accent Sdesktop:gap-x-4 mobile:gap-x-2">
                    Selengkapnya <BsArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Left Column --> */}
        {/* <!-- Right Column --> */}
        <div className="flex w-full h-full space-x-3 overflow-hidden Sdesktop:justify-end">
          {/* <!-- Col 2 --> */}
          <div className="items-center hidden w-56 space-y-3 Sdesktop:flex">
            <div className="overflow-hidden bg-yellow-400 rounded-md shadow-lg">
              <Image
                className="object-cover w-full h-full rounded-md"
                src="/assets/homecta.jpg"
                width={500}
                height={500}
                alt="home"
              />
            </div>
          </div>
          <div className="flex-col w-full py-4 space-y-3 Sdesktop:flex Sdesktop:w-80">
            <div className="h-40 overflow-hidden rounded-md shadow-lg bg-green-600/60">
              <Image
                className="object-cover w-full h-full mx-auto rounded-md"
                src="/assets/bathroom.jpg"
                width={500}
                height={500}
                alt="bathroom"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-md shadow-lg bg-pink-600/60">
              <Image
                className="object-cover w-full h-full mx-auto rounded-md"
                src="/assets/bedroom.jpg"
                width={500}
                height={500}
                alt="bedroom"
              />
            </div>
          </div>
        </div>
        {/* <!-- /Right Column --> */}
      </div>
    </section>
  )
}

export default CTA
