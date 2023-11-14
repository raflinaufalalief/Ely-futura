import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { IoAlertCircleOutline } from "react-icons/io5";
import Head from "next/head";
import { defaultSEO } from "@/components/Seo";
import FilterProduct from "@/components/FilterProduct";
import CustomPagination from "@/components/CustomPagination";

const ITEMS_PER_PAGE = 12;
const ALERT_MESSAGE = "Mohon Maaf Property Belum Tersedia ";
const ALERT_INFORMASI = "Pesan Informasi";
const seo = {
  title: "All-listing | Koleksiproperty",
  // ... (other SEO properties)
};

const getStatusLabel = (product) => {
  if (product.status && product.status.length > 0) {
    return product.status[0].nama_status || "Unknown Status";
  }
  return "Unknown Status";
};

const isStatusAvailable = (product) => {
  return product.status && product.status.length > 0;
};

const Listing = ({ initialProducts }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const router = useRouter();
  const { query } = router;

  const filteredProducts = initialProducts.filter((product) => {
    const locationMatch =
      !query.location || product.kota[0]?.name === query.location;
    const typePropertyMatch =
      !query.typeProperty || product.type[0]?.name === query.typeProperty;
    const conditionPropMatch =
      !query.conditionProp ||
      product.typeproperty[0]?.name === query.conditionProp;
    const pilihanMenuMatch =
      !query.PilihanMenu || product.market.includes(query.PilihanMenu);

    return (
      locationMatch &&
      typePropertyMatch &&
      conditionPropMatch &&
      pilihanMenuMatch
    );
  });

  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pageCount - 1;
  const isDataAvailable = filteredProducts.length > 0;

  return (
    <section>
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
      <div className="px-4 mx-auto containers">
        <div className="ListinganTerbaru">
          <div className="grid gap-5 tablet:grid-cols-2 Sdesktop:grid-cols-3">
            <div className="row-span-1">
              <FilterProduct />
            </div>
            {paginatedProducts.length === 0 ? (
              <div className="px-4 py-3 bg-yellow-100 border border-yellow-500 rounded h-fit">
                <div className="flex items-center">
                  <IoAlertCircleOutline className="mr-1 text-yellow-700" />
                  <p className="text-sm font-semibold text-yellow-700 ">
                    {ALERT_INFORMASI}
                  </p>
                </div>
                <p className="mt-1 text-xs font-medium">{ALERT_MESSAGE}</p>
              </div>
            ) : (
              paginatedProducts.map((product) => (
                <div key={product.id}>
                  <div
                    className={`relative w-full mx-auto ${
                      isStatusAvailable(product) ? "brightness-50" : ""
                    }`}
                  >
                    {isStatusAvailable(product) && (
                      <div className="absolute z-30 py-10 text-center inset-10">
                        <p className="p-2 text-lg font-bold text-red-500 uppercase bg-red-100 border rounded">
                          {getStatusLabel(product)}
                        </p>
                      </div>
                    )}
                    <div className="p-4 bg-white border rounded shadow-lg">
                      <div className="relative flex justify-center overflow-hidden rounded h-52">
                        <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                          <div className="absolute inset-0 bg-black">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="w-full h-52"
                            />
                          </div>
                        </div>
                        {isStatusAvailable(product) ? (
                          // If status is available, don't display market and status information
                          <></>
                        ) : (
                          // Only display market information if status is not available
                          <span
                            className={`absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded select-none`}
                          >
                            {product.market
                              .replace(/\[|\]|"/g, "")
                              .replace(/,/g, "/")}
                          </span>
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="flex mb-4 text-sm">
                          <div className="px-2 text-white rounded bg-accent">
                            {product.type.map(({ id, name }) => (
                              <div key={id}>{name}</div>
                            ))}
                          </div>
                        </div>
                        <h2 className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                          {product.title}
                        </h2>
                        <div className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                          {product.kota.map(({ id, name }) => (
                            <div key={id}>{name}</div>
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-black/80 line-clamp-1">
                          {product.area}
                        </p>
                      </div>
                      <div className="flex mt-2 text-sm">
                        <div className="flex space-x-5 overflow-hidden">
                          <p className="flex items-center font-medium text-black/80">
                            <BiBed className="mr-1 text-sm" />{" "}
                            {product.kamar_tidur}
                          </p>
                          <p className="flex items-center font-medium text-black/80">
                            <BiBath className="mr-1 text-sm" />{" "}
                            {product.kamar_mandi}
                          </p>
                          <p className="flex items-center font-medium text-black/80">
                            LB : {product.luas_bangunan}
                          </p>
                          <p className="flex items-center font-medium text-black/80">
                            LT : {product.luas_keseluruhan}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        {isStatusAvailable(product) ? (
                          // If status is available, display status label
                          <div className="flex justify-end"></div>
                        ) : (
                          // If status is not available, display price
                          <div className="flex justify-start mt-5">
                            <div className="">
                              <p className="font-medium text-black/80 line-clamp-1">
                                Rp {product.harga}
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-end mt-5">
                          <Link href={`/listings/${product.slug}`}>
                            <div className="font-medium text-accent hover:underline">
                              Detail
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-center pt-20 mobile:pt-10 Sdesktop:justify-end">
          <CustomPagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            isDataAvailable={isDataAvailable}
          />
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    const apiData = await response.json();

    return {
      props: {
        initialProducts: apiData.products,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialProducts: [],
      },
    };
  }
}

export default Listing;
