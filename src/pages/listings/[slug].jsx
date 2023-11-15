import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import ProfileCard from "@/components/ProfileCard";
import SpekLengkap from "@/components/SpekLengkap";
const DetailProduct = ({ products }) => {
  const swiperOptions = {
    pagination: {
      dynamicBullets: true,
    },
    modules: [Pagination],
  };
  return (
    <>
      <section className="mobile:py-16 tablet:py-16">
        <div className="mx-auto containers">
          <div className="pl-1 Sdesktop:px-4">
            <div className="flex mt-4 mb-4 text-primary">
              <ol className="inline-flex items-center">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-xs font-medium Sdesktop:text-sm text-primary hover:text-accent "
                  >
                    <AiFillHome className="mr-1 text-xs Sdesktop:text-sm" />
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <MdOutlineKeyboardArrowRight />
                    <Link
                      href="/listings"
                      className="ml-1 text-xs font-medium Sdesktop:text-sm text-primary hover:text-accent "
                    >
                      All-listings
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <MdOutlineKeyboardArrowRight />
                    <span className="ml-1 text-xs font-medium text-gray-500 Sdesktop:text-sm ">
                      {products.title}
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col Sdesktop:flex-row">
            <div className="Sdesktop:w-[65%] Sdesktop:px-4 w-full">
              <Swiper {...swiperOptions} className="mySwiper">
                {products.detail_image.map((imageUrl) => (
                  <SwiperSlide
                    key={imageUrl.id}
                    className="w-full pb-[75%] tablet:pb-[55%] rounded relative overflow-hidden"
                  >
                    <Link href={`/detail/${products.slug}`}>
                      <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={imageUrl.detail_images}
                        alt={imageUrl.id}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className=" mobile:flex-col-reverse mobile:flex tablet:flex-col-reverse tablet:flex">
              <div className="px-4">
                <div className="text-base font-medium text-black/70">
                  <div className="flex mt-10 mb-4 text-xs gap-x-4 Sdesktop:mt-0">
                    <h4 className="px-2 py-2 font-medium text-white rounded bg-bg ">
                      {products.type.map((city) => (
                        <div key={city.id}>{city.name}</div>
                      ))}
                    </h4>
                    <h4 className="px-1 py-2 font-medium text-black bg-transparent rounded shadow">
                      {products.typeproperty.map((city) => (
                        <div key={city.id}>{city.name}</div>
                      ))}
                    </h4>
                  </div>
                  <h1>
                    {products.market.replace(/\[|\]|"/g, "").replace(/,/g, "/")}
                  </h1>

                  <p>{products.title}</p>
                  <p>Rp {products.harga}</p>
                  <h4>
                    {products.kota.map((city) => (
                      <div key={city.id}>{city.name}</div>
                    ))}
                  </h4>
                  <div className="mt-4 text-lg">
                    <h1 className="font-semibold text-black/70">Deskripsi</h1>
                  </div>
                  <h2
                    className="mb-5 text-sm font-medium text-black/50"
                    dangerouslySetInnerHTML={{ __html: products.deskripsi }}
                  ></h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5 mobile:hidden bg-primary/10 h-[2px]" />
          <div className="px-4 ">
            <div className=" Sdesktop:justify-between Sdesktop:flex tablet:justify-between tablet:flex">
              <SpekLengkap props={products} />
              <div className="sticky flex items-center justify-end mt-5 Sdesktop:mt-0">
                <ProfileCard pesanwa={products.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailProduct;

export async function getServerSideProps({ params }) {
  // console.log(params);
  // fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params.slug}`);
  const response = await res.json();
  return {
    props: {
      products: response.products,
    },
  };
}
