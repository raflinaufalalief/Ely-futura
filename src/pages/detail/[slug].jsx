import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const PreviewImage = ({ products }) => {
  const totalImages = products.detail_image.length || 0;

  return (
    <>
      <div
        id=""
        className="fixed top-0 right-0 bg-black w-screen h-screen z-[99] "
      >
        <div className="flex absolute z-[99] w-full bg-black/20 items-center justify-around mobile:justify-between mobile:px-4 py-5">
          <div className="">
            <h1 className="text-sm font-medium text-white/90">
              {products.title}
            </h1>
            <h1 className="mt-2 text-sm font-medium text-white/90">
              Gambar: {totalImages}
            </h1>
          </div>
          <Link href={`/listings/${products.slug}`} className="">
            <AiOutlineCloseCircle className="text-4xl text-white rounded-full shadow-lg " />
          </Link>
        </div>

        <div className="">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {products.detail_image.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl.detail_images}
                  alt={imageUrl}
                  className="object-contain h-[40rem] Sdesktop:h-[50rem] w-full cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PreviewImage;
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
