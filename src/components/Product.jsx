import Link from "next/link"
import { useEffect, useState } from "react"
import { BiBath, BiBed } from "react-icons/bi"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

function Product() {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
        const apiData = await response.json()
        setProducts(apiData.products.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <div className="mx-auto containers">
        <div className="">
          <div className="px-4 mb-5 title">Property Terbaru</div>
          <div className="ListinganTerbaru">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              ssr={true}
              className=""
              containerClass="multi-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              removeArrowOnDeviceType={["tablet", "mobile"]}
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative w-full px-4 mx-auto ">
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
                        <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded select-none">
                          {product.market
                            .replace(/\[|\]|"/g, "")
                            .replace(/,/g, "/")}
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="flex mb-4 text-sm">
                          <div className="px-2 text-white rounded bg-accent">
                            {product.type.map((type) => (
                              <div key={type.id}>{type.name}</div>
                            ))}
                          </div>
                        </div>
                        <h2 className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                          {product.title}
                        </h2>
                        <div className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                          {product.kota.map((type) => (
                            <div key={type.id}>{type.name}</div>
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
                      <div className="grid grid-cols-2 mt-5">
                        <div className="flex items-center">
                          <p className="font-medium text-black/80 line-clamp-1">
                            Rp {product.harga}
                          </p>
                        </div>
                        <div className="flex items-end justify-end">
                          <Link
                            href={`/listings/${encodeURIComponent(
                              product.slug
                            )}`}
                          >
                            <div className="font-medium text-accent hover:underline">
                              Detail
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
