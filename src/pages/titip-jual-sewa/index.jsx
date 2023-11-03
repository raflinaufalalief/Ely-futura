import { defaultSEO } from "@/components/Seo"
import Head from "next/head"
import { useState } from "react"

const PropertyForm = () => {
  const seo = {
    ...defaultSEO,
    title: "TitipJualSewa | Koleksiproperti", // Judul khusus untuk halaman About
  }
  const [judulIklan, setJudulIklan] = useState("")
  const [harga, setHarga] = useState("")
  const [jenisTransaksi, setJenisTransaksi] = useState("Jual")
  const [sertifikat, setSertifikat] = useState("")
  const [kamarMandi, setKamarMandi] = useState("")
  const [kamarTidur, setKamarTidur] = useState("")
  const [luasTanah, setLuasTanah] = useState("")
  const [luasBangunan, setLuasBangunan] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [kategori, setKategori] = useState("Rumah")
  const [product, setProduct] = useState("Primary")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !judulIklan ||
      !harga ||
      !sertifikat ||
      !kamarMandi ||
      !kamarTidur ||
      !luasTanah ||
      !luasBangunan ||
      !deskripsi ||
      !product
    ) {
      alert("Mohon lengkapi semua data sebelum mengirim.")
      return
    }

    const messageText =
      `Judul Iklan: ${judulIklan}\n` +
      `Jenis Transaksi: ${jenisTransaksi}\n` +
      `Harga: ${harga}\n` +
      `Sertifikat: ${sertifikat}\n` +
      `Kamar Mandi: ${kamarMandi}\n` +
      `Kamar Tidur: ${kamarTidur}\n` +
      `Luas Tanah: ${luasTanah}\n` +
      `Luas Bangunan: ${luasBangunan}\n` +
      `Kategori: ${kategori}\n` +
      `Product: ${product}\n` +
      `Deskripsi: ${deskripsi}\n`

    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      "+6287789070758"
    )}&text=${encodeURIComponent(messageText)}`

    window.open(whatsappLink, "_blank")
  }

  return (
    <section className="bg-[#ECECEC] ">
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
      <div className="px-4 pt-10 mx-auto containers">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-3 text-3xl font-semibold text-center title ">
            Form Titip Jual/Sewa Properti
          </h1>
          <p className="mb-5 text-base text-center subtitle">
            Kami sangat antusias untuk memberikan bantuan dalam menjual atau
            menyewakan properti Anda. Mohon lengkapi informasi properti pada
            formulir di bawah ini.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow-md ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium ">Judul Iklan:</label>
              <input
                className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                type="text"
                value={judulIklan}
                onChange={(e) => setJudulIklan(e.target.value)}
                required
              />
            </div>
            <div className="Sdesktop:grid Sdesktop:grid-cols-3 Sdesktop:gap-6">
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Kategori:</label>
                <select
                  className="bg-gray-50 border border-gray-300 text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  required
                >
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Ruko">Ruko</option>
                  <option value="Kos">Kos</option>
                  <option value="Tanah">Tanah</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Kondisi:</label>
                <select
                  className="bg-gray-50 border border-gray-300 text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                >
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  Status Pemasaran:
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-primary  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  value={jenisTransaksi}
                  onChange={(e) => setJenisTransaksi(e.target.value)}
                  required
                >
                  <option value="Jual">DiJual</option>
                  <option value="Sewa">DiSewa</option>
                  <option value="Jual-Sewa">DiJual/Disewa</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Harga:</label>
                <input
                  className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  type="text"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Sertifikat:</label>
                <input
                  className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  type="text"
                  value={sertifikat}
                  onChange={(e) => setSertifikat(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Kamar Mandi:</label>
                <input
                  className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  type="text"
                  value={kamarMandi}
                  onChange={(e) => setKamarMandi(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Kamar Tidur:</label>
                <input
                  className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  type="text"
                  value={kamarTidur}
                  onChange={(e) => setKamarTidur(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Luas Tanah:</label>
                <input
                  className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  type="text"
                  value={luasTanah}
                  onChange={(e) => setLuasTanah(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  Luas Bangunan:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                  type="text"
                  value={luasBangunan}
                  onChange={(e) => setLuasBangunan(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium ">Deskripsi:</label>
              <textarea
                className="bg-gray-50 border border-gray-300  text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                rows="4"
                required
              />
            </div>

            <button
              className="px-4 py-2 text-white rounded bg-accent hover:bg-accent/70"
              type="submit"
            >
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PropertyForm
