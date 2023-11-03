import React from "react"

const Hero = () => {
  return (
    <div>
      <div className="relative block h-[500px] w-full">
        <div className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover bg-hero-bg ">
          <span className="absolute w-full h-full bg-black opacity-50"></span>
        </div>
        <div className="relative pt-56 mx-auto containers">
          <div className="px-5 mx-auto text-center">
            <h1 className="mb-1 text-4xl font-bold leading-none tracking-tight text-white uppercase Sdesktop:text-5xl">
              Ely
            </h1>
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-white uppercase Sdesktop:text-4xl">
              Futura Property
            </h1>
            <p className="mb-8 text-xl font-normal text-gray-300 mobile:text-lg">
              Agent Futura Property, Jual, Beli Dan Sewa Property, Mulai dari
              property primary hingga property secondary.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
