import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const Filter = () => {
  const [data, setData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedTypeProperty, setSelectedTypeProperty] = useState("")
  const [selectedConditionProp, setSelectedConditionProp] = useState("")
  const [selectedFor, setSelectedFor] = useState("")

  const router = useRouter()

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
        const apiData = await response.json()
        setData(apiData.products)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData() // Call the fetchData function to actually fetch data
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
  const uniqueAreas = [...new Set(data.map((item) => item.kota[0]?.name))]
  const uniqueTypeProp = [...new Set(data.map((item) => item.type[0]?.name))]
  const uniqueConditionProp = [
    ...new Set(data.map((item) => item.typeproperty[0]?.name)),
  ]
  const uniqueFor = [...new Set(data.map((item) => item.market))]

  return (
    <div className="pb-10 Sdesktop:pb-0">
      <div className="Sdesktop:px-[35px] px-4 py-6 max-w-[1170px] mx-auto flex mobile:flex-col-reverse Sdesktop:flex-col justify-between gap-4 Sdesktop:gap-x-3 relative Sdesktop:-top-14 Sdesktop:shadow bg-[#BAE5FE] Sdesktop:backdrop-blur rounded-lg ">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mobile:flex-col gap-y-5 gap-x-5">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="">Pilih Lokasi</option>
              {data.length > 0 &&
                uniqueAreas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
            </select>
            <select
              value={selectedTypeProperty}
              onChange={handleTypePropertyChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Pilih Type Property</option>
              {data.length > 0 &&
                uniqueTypeProp.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
            </select>
            <select
              value={selectedConditionProp}
              onChange={handleConditionPropChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="">Pilih Type</option>
              {data.length > 0 &&
                uniqueConditionProp.map((condition, index) => (
                  <option key={index} value={condition}>
                    {condition}
                  </option>
                ))}
            </select>
            <select
              value={selectedFor}
              onChange={handleForChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="">Pilihan Menu</option>
              {data.length > 0 &&
                uniqueFor.map((menuItem, index) => (
                  <option key={index} value={menuItem}>
                    {menuItem.replace(/\[|\]|"/g, "").replace(/,/g, "/")}
                  </option>
                ))}
            </select>
            <button
              type="submit"
              className="Sdesktop:w-[300px] w-full py-2 text-sm font-semibold text-white bg-blue-700 rounded-md "
            >
              Cari
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
