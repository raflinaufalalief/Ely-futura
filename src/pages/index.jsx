import CTA from "@/components/CTA"
import ContactUs from "@/components/ContactUs"
import Filter from "@/components/Filter"
import Hero from "@/components/Hero"
import OurHope from "@/components/OurHope"
import Product from "@/components/Product"
import WhyChoose from "@/components/WhyChoose"
import { defaultSEO } from "@/components/Seo"
import Head from "next/head"
function Home() {
  const seo = {
    ...defaultSEO,
    title: "Koleksi Properti", // Judul khusus untuk halaman beranda
  }
  return (
    <>
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
      <Hero />
      <Filter />
      <WhyChoose />
      <OurHope />
      <Product />
      <CTA />
      <ContactUs />
    </>
  )
}

export default Home
