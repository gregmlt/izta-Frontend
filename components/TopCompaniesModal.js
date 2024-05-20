import React from 'react'

function TopCompaniesModal({ imageSrc, title, description }) {

  return (
    <div className="p-3 rounded-md shadow-lg flex flex-col items-start w-full sm:w-1/3 md:w-1/4 m-4 md:min-h-[400px]">
    <img src={imageSrc} alt={title} className="w-full h-[170px] object-cover rounded-md" />
    <h2 className="text-xl font-semibold mt-4">{title}</h2>
    <p className="mt-2">{description}</p>
    <button className="mt-auto self-end text-blue-500 hover:underline">En savoir plus</button>
  </div>
  )
}

export default TopCompaniesModal