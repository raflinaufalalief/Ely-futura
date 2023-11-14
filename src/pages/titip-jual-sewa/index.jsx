import { defaultSEO } from "@/components/Seo"
import Head from "next/head"
import { useState } from "react"





const formatPhoneNumber = (value) => {
  // Remove non-numeric characters
  const phoneNumber = value.replace(/\D/g, "");

  // Limit to 14 characters
  const formattedPhoneNumber = phoneNumber.slice(0, 14);

  // Add a hyphen after every 4 digits
  const result = formattedPhoneNumber.replace(
    /(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
    (_, p1, p2, p3, p4) => {
      let parts = [p1];
      if (p2) parts.push(`-${p2}`);
      if (p3) parts.push(`-${p3}`);
      if (p4) parts.push(`-${p4}`);
      return parts.join("");
    }
  );

  return result;
};


const PropertyForm = () => {
  const seo = {
    ...defaultSEO,
    title: "TitipJualSewa | Koleksiproperti", // Judul khusus untuk halaman About
  }
   const [judulIklan, setJudulIklan] = useState("");
   const [noTandaPengenal, setNoTandaPengenal] = useState("");
   const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isNumberidValid, setIsNumberIdValid] = useState(true);
  const [isNamaValid, setIsNamaValid] = useState(true);
  const [isValidAlamat, setIsValidAlamat] = useState(true);
  const [isValidHarga, setIsValidHarga] = useState(true);
  const [isValidSert, setIsValidSert] = useState(true);
  const [isValidKM, setIsValidKM] = useState(true);
  const [isValidKT, setIsValidKT] = useState(true);
  const [isValidLb, setIsValidLb] = useState(true);
  const [isValidListrik, setIsValidListrik] = useState(true);
  const [isValidHadap, setIsValidHadap] = useState(true);
  const [isValidDes, setIsValidDes] = useState(true);
  const [isValidLt, setIsValidLt] = useState(true);
  const [isValidPerProp, setIsValidPerProp] = useState(true);
  const [isValidKategori, setIsValidKategori] = useState(true);
  const [isValidProduct, setIsValidProduct] = useState(true);
  const [isValidTransaksi, setIsValidTransaksi] = useState(true);
  
   const [harga, setHarga] = useState("");
   const [jenisTransaksi, setJenisTransaksi] = useState("");
   const [sertifikat, setSertifikat] = useState("");
   const [kamarMandi, setKamarMandi] = useState("");
   const [kamarTidur, setKamarTidur] = useState("");
   const [luasTanah, setLuasTanah] = useState("");
   const [luasBangunan, setLuasBangunan] = useState("");
   const [deskripsi, setDeskripsi] = useState("");
   const [kategori, setKategori] = useState("");
   const [product, setProduct] = useState("");
   const [perlengkapanProperti, setPerlengkapanProperti] = useState("");
   const [noHandphone, setNoHandphone] = useState("");
   const [alamat, setAlamat] = useState("");
   const [listrik, setListrik] = useState("");
  const [hadap, setHadap] = useState("");
  


  
 const handleSubmit = (e) => {
   e.preventDefault();


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
     `Deskripsi: ${deskripsi}\n` +
     `Perlengkapan Properti: ${perlengkapanProperti}\n` +
     `No Tanda Pengenal/KTP: ${noTandaPengenal}\n` +
     `No Handphone: ${noHandphone}\n` +
     `Alamat: ${alamat}\n` +
     `Listrik: ${listrik}\n` +
     `Hadap: ${hadap}\n`;

   const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
     "+6287789070758"
   )}&text=${encodeURIComponent(messageText)}`;

   window.open(whatsappLink, "_blank");
 };

 const handleNoTandaPengenalChange = (e) => {
   const newValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
   const limitedValue = newValue.slice(0, 16); // Limit to 16 characters
   setNoTandaPengenal(limitedValue);

   setIsNumberIdValid(limitedValue.length === 16);
 };


 const handleNoHandphoneChange = (e) => {
   const newValue = e.target.value.replace(/\D/g, ""); // Allow only numeric input
   const limitedValue = newValue.slice(0, 14); // Limit to 14 characters
   setNoHandphone(limitedValue);

   setIsPhoneNumberValid(
     limitedValue.length >= 11 && limitedValue.length <= 14
   );
 };
 const handleJudulIklanChange = (e) => {
   const newValue = e.target.value;
   setJudulIklan(newValue);

   if (newValue.trim().length > 0) {
     setIsNamaValid(true);
   } else {
     setIsNamaValid(false);
   }
 };

  const handleAlamatChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setAlamat(newValue);

    if (newValue.length > 0) {
      setIsValidAlamat(true);
    } else {
      setIsValidAlamat(false);
    }
  };


  
  const handleHargaChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setHarga(newValue);

    if (newValue.length > 0) {
      setIsValidHarga(true);
    } else {
      setIsValidHarga(false);
    }
  };
  const handleSertChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setSertifikat(newValue);

    if (newValue.length > 0) {
      setIsValidSert(true);
    } else {
      setIsValidSert(false);
    }
  };
  const handleKmChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setKamarMandi(newValue);

    if (newValue.length > 0) {
      setIsValidKM(true);
    } else {
      setIsValidKM(false);
    }
  };
  const handleListrikChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setListrik(newValue);

    if (newValue.length > 0) {
      setIsValidListrik(true);
    } else {
      setIsValidListrik(false);
    }
  };
  const handleHadapChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setHadap(newValue);

    if (newValue.length > 0) {
      setIsValidHadap(true);
    } else {
      setIsValidHadap(false);
    }
  };
  const handleDescChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setDeskripsi(newValue);

    if (newValue.length > 0) {
      setIsValidDes(true);
    } else {
      setIsValidDes(false);
    }
  };
  const handleKtChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setKamarTidur(newValue);

    if (newValue.length > 0) {
      setIsValidKT(true);
    } else {
      setIsValidKT(false);
    }
  };
  const handleLtChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setLuasTanah(newValue);

    if (newValue.length > 0) {
      setIsValidLt(true);
    } else {
      setIsValidLt(false);
    }
  };
  const handleLbChange = (e) => {
    const newValue = e.target.value; // Remove leading and trailing whitespaces
    setLuasBangunan(newValue);

    if (newValue.length > 0) {
      setIsValidLb(true);
    } else {
      setIsValidLb(false);
    }
  };
const handleKategoriChange = (e) => {
  const newValue = e.target.value;
  setKategori(newValue);

  if (newValue.length > 0) {
    setIsValidKategori(true);
    // Tambahkan logika atau fungsi yang ingin dijalankan saat nilai valid
    if (newValue === "Rumah") {
    } else if (newValue === "Apartemen") {
    } else if (newValue === "Tanah") {
    } else if (newValue === "Office Space") {
    } else if (newValue === "Kos") {
    
    }
  } else {
    setIsValidKategori(false);
  }
};
const handleproductChange = (e) => {
  const newValue = e.target.value;
  setProduct(newValue);

  if (newValue.length > 0) {
    setIsValidProduct(true);
    // Tambahkan logika atau fungsi yang ingin dijalankan saat nilai valid
    if (newValue === "Primary") {
    } else if (newValue === "Secondary") {
    } 
  } else {
    setIsValidProduct(false);
  }


};
const handleTransaksiChange = (e) => {
  const newValue = e.target.value;
  setJenisTransaksi(newValue);

  if (newValue.length > 0) {
    setIsValidTransaksi(true);
    // Tambahkan logika atau fungsi yang ingin dijalankan saat nilai valid
    if (newValue === "Jual") {
    } else if (newValue === "Sewa") {
    } 
  } else {
    setIsValidTransaksi(false);
  }


};
const handlePPChange = (e) => {
  const newValue = e.target.value;
  setPerlengkapanProperti(newValue);

  if (newValue.length > 0) {
    setIsValidPerProp(true);
    // Tambahkan logika atau fungsi yang ingin dijalankan saat nilai valid
    if (newValue === "Furnished") {
    } else if (newValue === "Unfurnish") {
    } else if (newValue === "SemiFurnished") {
    }
  } else {
    setIsValidPerProp(false);
  }
};
 


  
 
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
              <label className="block mb-1 font-medium ">Nama : </label>
              <input
                className={`bg-gray-50 border ${
                  isNamaValid ? "border-gray-300" : "border-red-500"
                } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                type="text"
                value={judulIklan}
                onChange={handleJudulIklanChange}
                required
                placeholder="masukan nama lengkap"
              />
              {!isNamaValid && (
                <p className="mt-1 text-sm text-red-500">
                  Tolong dilengkapi nama anda dengan benar.
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium ">
                No Tanda Pengenal/KTP :
              </label>
              <input
                className={`bg-gray-50 border ${
                  isNumberidValid ? "border-gray-300" : "border-red-500"
                } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                type="text"
                value={noTandaPengenal}
                onChange={handleNoTandaPengenalChange}
                required
                placeholder="masukan nomor tanda pengenal/ktp"
              />
              {!isNumberidValid && (
                <p className="mt-1 text-sm text-red-500">
                  Nomor KTP harus memiliki 16 digit angka.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium ">No Handphone : </label>
              <input
                className={`bg-gray-50 border ${
                  isPhoneNumberValid ? "border-gray-300" : "border-red-500"
                } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                type="text"
                value={formatPhoneNumber(noHandphone)}
                onChange={handleNoHandphoneChange}
                placeholder="masukan nomor telepon anda"
                minLength="11"
                maxLength="14"
                required
              />
              {!isPhoneNumberValid && (
                <p className="mt-1 text-sm text-red-500">
                  Nomor Handphone harus memiliki 11-14 digit angka.
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium ">Alamat : </label>
              <input
                className={`bg-gray-50 border ${
                  isValidAlamat ? "border-gray-300" : "border-red-500"
                } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                type="text"
                value={alamat}
                onChange={handleAlamatChange}
                required
                placeholder="masukan nama lengkap"
              />
              {!isValidAlamat && (
                <p className="mt-1 text-sm text-red-500">
                  Tolong dilengkapi alamatnya
                </p>
              )}
            </div>
            <div className="Sdesktop:grid Sdesktop:grid-cols-3 Sdesktop:gap-6">
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Kategori : </label>
                <select
                  className={`bg-gray-50 border ${
                    isValidKategori ? "border-gray-300" : "border-red-500"
                  } text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  value={kategori}
                  onChange={handleKategoriChange}
                  onBlur={() => setIsValidKategori(kategori !== "")}
                  required
                >
                  <option value="">Type Property</option>
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Kos">Kos</option>
                  <option value="Tanah">Tanah</option>
                  <option value="Office Space">Office Space</option>
                </select>
                {!isValidKategori && (
                  <p className="mt-1 text-sm text-red-500">
                    tolong di pilih terlebih dahulu
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Product : </label>
                <select
                  className={`bg-gray-50 border ${
                    isValidProduct ? "border-gray-300" : "border-red-500"
                  } text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  value={product}
                  onChange={handleproductChange}
                  onBlur={() => setIsValidProduct(product !== "")}
                  required
                >
                  <option value="">Pilih Product</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                </select>
                {!isValidProduct && (
                  <p className="mt-1 text-sm text-red-500">tolong dilengkapi</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  Jenis Transaksi :{" "}
                </label>
                <select
                  className={`bg-gray-50 border ${
                    isValidTransaksi ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  value={jenisTransaksi}
                  onChange={handleTransaksiChange}
                  onBlur={() => setIsValidTransaksi(jenisTransaksi !== "")}
                  required
                >
                  <option value="">Pilih Jenis Transaksi</option>
                  <option value="jual">Jual</option>
                  <option value="sewa">Sewa</option>
                </select>
                {!isValidTransaksi && (
                  <p className="mt-1 text-sm text-red-500">
                    tolong dilengkapi
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Perlengkapan Properti :{" "}
                </label>
                <select
                  className={`bg-gray-50 border ${
                    isValidPerProp ? "border-gray-300" : "border-red-500"
                  } text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  value={perlengkapanProperti}
                  onChange={handlePPChange}
                  onBlur={() => setIsValidPerProp(perlengkapanProperti !== "")}
                  required
                >
                  <option value="">Perlengkapan Properti</option>
                  <option value="Furnished">Furnished</option>
                  <option value="Unfurnish">Unfurnish</option>
                  <option value="SemiFurnished">SemiFurnished</option>
                </select>
                {!isValidPerProp && (
                  <p className="mt-1 text-sm text-red-500">
                    Silakan pilih perlengkapan properti.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium ">Harga : </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidHarga ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={harga}
                  onChange={handleHargaChange}
                  required
                  placeholder="masukan harga"
                />
                {!isValidHarga && (
                  <p className="mt-1 text-sm text-red-500">
                    Tolong di isi harga
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Sertifikat : </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidSert ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={sertifikat}
                  onChange={handleSertChange}
                  required
                  placeholder="masukan sertifikat"
                />
                {!isValidSert && (
                  <p className="mt-1 text-sm text-red-500">
                    tolong diisi terlebih dahulu
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  Kamar Mandi :{" "}
                </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidKM ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={kamarMandi}
                  onChange={handleKmChange}
                  required
                  placeholder="masukan jumlah kamar mandi"
                />
                {!isValidKM && (
                  <p className="mt-1 text-sm text-red-500">test</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  Kamar Tidur :{" "}
                </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidKT ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={kamarTidur}
                  onChange={handleKtChange}
                  required
                  placeholder="masukan jumlah kamar tidur"
                />
                {!isValidKT && (
                  <p className="mt-1 text-sm text-red-500">test</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium ">Luas Tanah : </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidLt ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={luasTanah}
                  onChange={handleLtChange}
                  required
                  placeholder="masukan jumlah luas tanah"
                />
                {!isValidLt && (
                  <p className="mt-1 text-sm text-red-500">testinG BRO</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">
                  Luas Bangunan :{" "}
                </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidLb ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={luasBangunan}
                  onChange={handleLbChange}
                  required
                  placeholder="masukan jumlah luas bangunan"
                />
                {!isValidLb && (
                  <p className="mt-1 text-sm text-red-500">testinggg</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium ">Listrik : </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidListrik ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={listrik}
                  onChange={handleListrikChange}
                  required
                  placeholder="masukan kwh listrik"
                />
                {!isValidListrik && (
                  <p className="mt-1 text-sm text-red-500">tesTING</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium ">Hadap : </label>
                <input
                  className={`bg-gray-50 border ${
                    isValidHadap ? "border-gray-300" : "border-red-500"
                  } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                  type="text"
                  value={hadap}
                  onChange={handleHadapChange}
                  required
                  placeholder="masukan hadap"
                />
                {!isValidHadap && (
                  <p className="mt-1 text-sm text-red-500">tes</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium ">Deskripsi : </label>
              <textarea
                className={`bg-gray-50 border ${
                  isValidDes ? "border-gray-300" : "border-red-500"
                } text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5`}
                value={deskripsi}
                onChange={handleDescChange}
                rows="4"
                required
                placeholder="masukan deskripsi untuk keterangan tentang properti yang ingin dijual/disewa"
              />
              {!isValidDes && <p className="mt-1 text-sm text-red-500">tes</p>}
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
  );
}

export default PropertyForm
