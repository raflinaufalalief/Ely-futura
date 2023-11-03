import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { AiOutlineSearch } from "react-icons/ai"

const FilterProduct = () => {
  const [data, setData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedTypeProperty, setSelectedTypeProperty] = useState("")
  const [selectedConditionProp, setSelectedConditionProp] = useState("")
  const [selectedFor, setSelectedFor] = useState("")
  const [reset, setReset] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
        const apiData = await response.json()
        setData(apiData.products)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value)
  }

  const handleTypePropertyChange = (e) => {
    setSelectedTypeProperty(e.target.value)
  }

  const handleConditionPropChange = (e) => {
    setSelectedConditionProp(e.target.value)
  }

  const handleForChange = (e) => {
    setSelectedFor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const queryParams = new URLSearchParams()

    if (selectedLocation) {
      queryParams.set("location", selectedLocation)
    }
    if (selectedTypeProperty) {
      queryParams.set("typeProperty", selectedTypeProperty)
    }
    if (selectedConditionProp) {
      queryParams.set("conditionProp", selectedConditionProp)
    }
    if (selectedFor) {
      queryParams.set("PilihanMenu", selectedFor)
    }

    router.push(`/listings?${queryParams.toString()}`)
  }

  useEffect(() => {
    if (reset) {
      setSelectedLocation("")
      setSelectedTypeProperty("")
      setSelectedConditionProp("")
      setSelectedFor("")
      setReset(false)
    }
  }, [reset])

  const uniqueAreas = [...new Set(data.map((item) => item.kota[0]?.name))]
  const uniqueTypeProp = [...new Set(data.map((item) => item.type[0]?.name))]
  const uniqueConditionProp = [
    ...new Set(data.map((item) => item.typeproperty[0]?.name)),
  ]
  const uniqueFor = [...new Set(data.map((item) => item.market))]

  const handleReset = () => {
    setReset(true)
  }

  return (
    <div className="">
      <div className="relative flex flex-col-reverse justify-between h-full gap-4 px-3 pb-6 pt-3 mx-auto rounded bg-[#ECECEC] Sdesktop:shadow Sdesktop:backdrop-blur">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5 ">
            <h2 className="text-base font-medium uppercase text-accent ">
              Pencarian Property
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-x-5">
            <div className="flex items-center justify-between ">
              <h5 className="text-xs font-semibold ">Pilih Lokasi</h5>
              <button
                type="button"
                onClick={handleReset}
                className="px-2 py-1 mb-2 text-xs font-semibold text-white rounded bg-accent hover:bg-accent/70"
              >
                Reset Filter
              </button>
            </div>
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5 "
            >
              <option value="">Lokasi</option>
              {data.length > 0 &&
                uniqueAreas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
            </select>

            <div className="mt-2">
              <h5 className="mb-2 text-xs font-semibold ">
                Pilih Type Property
              </h5>
              <select
                value={selectedTypeProperty}
                onChange={handleTypePropertyChange}
                className="bg-gray-50 border border-gray-300 text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5"
              >
                <option value="">Kategori</option>
                {data.length > 0 &&
                  uniqueTypeProp.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mt-2 mb-2">
              <h5 className="mb-2 text-xs font-semibold ">Pilih product</h5>
              <select
                value={selectedConditionProp}
                onChange={handleConditionPropChange}
                className="bg-gray-50 border border-gray-300 text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5 "
              >
                <option value="">Product</option>
                {data.length > 0 &&
                  uniqueConditionProp.map((condition, index) => (
                    <option key={index} value={condition}>
                      {condition}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mb-2">
              <h5 className="mb-2 text-xs font-semibold ">Pilih Menu</h5>
              <select
                value={selectedFor}
                onChange={handleForChange}
                className="bg-gray-50 border border-gray-300 text-primary text-sm rounded focus:ring-accent focus:border-accent block w-full p-2.5 "
              >
                <option value="">Status Pemasaran</option>
                {data.length > 0 &&
                  uniqueFor.map((menuItem, index) => (
                    <option key={index} value={menuItem}>
                      {menuItem.replace(/\[|\]|"/g, "").replace(/,/g, "/")}
                    </option>
                  ))}
              </select>
            </div>

            <button
              type="submit"
              className="py-2 text-sm font-semibold text-white rounded bg-accent Sdesktop:w-full hover:bg-accent/80 "
            >
              <div className="flex items-center justify-center">
                <AiOutlineSearch className="mr-1" />
                Search
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FilterProduct;