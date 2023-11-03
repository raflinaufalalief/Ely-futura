import React from "react"
import { GrMapLocation } from "react-icons/gr"
import { IoBusinessOutline } from "react-icons/io5"
import Image from "next/image"
import { defaultSEO } from "@/components/Seo"
import Head from "next/head"

const Profile = () => {
  const seo = {
    ...defaultSEO,
    title: "Profile | Koleksiproperti", // Judul khusus untuk halaman About
  }
  return (
    <section className="pt-0">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="author" content={seo.author} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
      </Head>
      {/* <!-- component --> */}
      <div className="relative block h-[500px] w-full">
        <div className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover bg-profile-bg">
          <span className="absolute w-full h-full bg-black opacity-50"></span>
        </div>
      </div>
      <div className="relative bg-blueGray-200">
        <div className="px-4 mx-auto containers">
          <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl ">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full px-4">
                  <div className="relative">
                    <Image
                      alt="profile"
                      src="/assets/profile.png"
                      width={500}
                      height={500}
                      className="absolute h-auto -ml-20 pt-10 align-middle border-none rounded-full   max-w-[150px]"
                    />
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="pt-56">
                <div className="flex items-center justify-center mt-2 space-x-2 ">
                  <h1 className="text-2xl font-bold leading-normal title ">
                    Ely Futura
                  </h1>
                </div>
                <div className="flex items-center justify-center my-5 text-base font-medium leading-normal capitalize text-secondary mobile:text-sm">
                  <div className="mr-2 text-sm">
                    <GrMapLocation />
                  </div>
                  Cengkareng, Jakarta Barat
                </div>
                <div className="flex items-center justify-center mb-5 text-base font-medium leading-normal capitalize text-secondary mobile:text-xs">
                  <div className="text-sm Sdesktop:mr-2">
                    <IoBusinessOutline />
                  </div>
                  Property Consultant at Futura Property
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center max-w-sm mx-0 mt-5 Sdesktop:max-w-full gap-x-2 Sdesktop:gap-x-6">
                  <a
                    href={`https://wa.me/+6287789070758?text=Saya ingin bertanya`}
                  >
                    <button className="flex items-center justify-center mx-auto Sdesktop:mx-0 btn-sm Sdesktop:btn-md btn-accent Sdesktop:gap-x-4 mobile:gap-x-2">
                      Hubungi Saya
                    </button>
                  </a>
                </div>
              </div>
              <div className="py-5 mt-10 text-center border-t py- border-blueGray-200">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 Sdesktop:w-9/12">
                    <p className="mb-4 text-lg leading-relaxed text-secondary mobile:text-sm">
                      Perkenalkan saya Ely, Profesi saya sebagai property
                      consultant, Saya sudah bergerak di bidang ini sejak 2009.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
