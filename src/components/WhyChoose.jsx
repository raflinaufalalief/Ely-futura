import { BsArrowRight } from "react-icons/bs"
import Statistic from "./Statistic"
import Link from "next/link"
import Image from "next/image"

export default function WhyChoose() {
  return (
    <section>
      <div className="px-4 mx-auto containers">
        <div className="justify-center Sdesktop:flex">
          <div className="Sdesktop:w-8/12 mobile:w-12/12">
            <h1 className="title">
              Temukan Rumah
              <br />
              Impian Anda!
            </h1>
            <div className="pl-3 mt-5 border-l-4 border-accent">
              <p className="subtitle">
                Di situs kami, Anda akan menemukan beragam pilihan rumah yang
                dirancang untuk memenuhi kebutuhan dan keinginan Anda. Dari
                desain modern hingga gaya klasik, kami menyediakan rumah-rumah
                berkualitas dengan fasilitas yang lengkap.
              </p>
            </div>
            <Image
              src="/assets/bg-profile.jpg"
              width={500}
              height={500}
              alt="home"
              className="w-full rounded-md mobile:w-auto"
            />
          </div>
          {/* right section */}
          <div className="flex flex-col items-center w-full Sdesktop:ml-6 Sdesktop:mt-0 mt-7 Sdesktop:w-4/12 Sdesktop:flex-col">
            <div className="w-full ">
              <Image
                src="/assets/best.png"
                width={500}
                height={500}
                alt="best"
                className="w-full border-2 rounded-md shadow-lg border-accent "
              />
            </div>
            <div className="mt-6 Sdesktop:mt-6 mobile:mt-0 Sdesktop:ml-0">
              <div className="mt-4">
                <Image
                  src="/assets/user.jpg"
                  width={500}
                  height={500}
                  alt="title"
                  className="w-[50px]"
                />
                <h1 className="mt-4 title">Agen Profesional</h1>
                <p className="mt-4 subtitle">
                  Dengan pengetahuan luas tentang pasar properti dan pengalaman
                  yang kaya, kami akan menjadi mitra Anda yang andal dalam
                  mencari properti yang sesuai dengan keinginan dan kebutuhan
                  Anda Hubungi kami sekarang!
                </p>
              </div>
              <Link href="/about">
                <div className="flex items-center mx-auto Sdesktop:mx-0 Sdesktop:gap-x-6">
                  <button className="flex items-center justify-center mx-0 btn-sm Sdesktop:btn-md btn-outline Sdesktop:gap-x-4 tablet:gap-x-2 mobile:gap-x-2">
                    Tentang Saya <BsArrowRight />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 mobile:mt-10">
          <span className="inline-block w-11/12 h-1 rounded-full bg-accent"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-accent"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-accent"></span>
        </div>
        <Statistic />
      </div>
    </section>
  )
}
