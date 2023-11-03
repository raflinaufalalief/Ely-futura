import React from "react"
import { defaultSEO } from "@/components/Seo"
import Head from "next/head"

import Statistic from "@/components/Statistic"
import VisiMisi from "@/components/VisiMisi"
import ContactUs from "@/components/ContactUs"
import CTA from "@/components/CTA"

const AboutPage = () => {
  const seo = {
    ...defaultSEO,
    title: "About | Koleksiproperti", // Judul khusus untuk halaman About
  }
  return (
    <div>
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

      <div className="relative block h-[500px] w-full py-24  ">
        <div className="absolute top-0 hidden w-full h-full bg-center bg-no-repeat bg-cover bg-heo-bg Sdesktop:block">
          <span className="absolute w-full h-full bg-black opacity-50"></span>
        </div>

        <div className="relative block py-10 mx-auto text-center bg-white rounded shadow-lg Sdesktop:py-20 containers">
          <h1 className="pb-10 mt-2 text-4xl font-bold text-primary">
            Ely Futura
          </h1>
          <p className="px-2 tracking-tight subtitle">
            Ely Futura adalah perusahaan properti yang berfokus pada
            pengembangan dan pemasaran properti dengan berbagai jenis dan
            segmen. Memiliki portofolio yang mencakup berbagai macam proyek,
            mulai dari perumahan, apartemen, komersial, dan properti lainnya.
          </p>
        </div>
      </div>
      <Statistic />
      <VisiMisi />
      <ContactUs />
      <CTA />
    </div>
  )
}

export default AboutPage
