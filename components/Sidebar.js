import React, { useState } from 'react'
import SelectOption from './SelectOption'
import { ratings, types } from './Data/mockData'
import PlaceCard from './PlaceCard'

const Sidebar = ({ places }) => {
  console.log(places)
  const [type, setType] = useState(types[0].value)
  const [rating, setRating] = useState(ratings[0].value)

  return (
    <div className='bg-[#384259] h-screen p-4'>
      <h1 className='text-white font-mono text-2xl font-bold uppercase border-b pb-3'>
        Find Restaurants, Hotels & Attractions around you
      </h1>
      <div className=' mt-2 flex space-x-2'>
        <SelectOption
          title='Select Type'
          option={type}
          setOption={setType}
          options={types}
        />
        <SelectOption
          title='Select Rating'
          option={rating}
          setOption={setRating}
          options={ratings}
        />
      </div>
      <div className='divide-y divide-gray-600 space-y-4 h-full overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-[#f73859] mt-4'>
        {places?.map((data, i) => (
          <PlaceCard key={i} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
