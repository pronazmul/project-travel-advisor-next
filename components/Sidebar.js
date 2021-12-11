import React, { useState } from 'react'
import SelectOption from './SelectOption'
import { ratings, types } from './Data/mockData'
import Image from 'next/image'

const Sidebar = ({ places }) => {
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
        {places &&
          places.map((data, i) => (
            <div className='pt-3 space-y-2 relative' key={i}>
              <Image
                className='rounded'
                layout='fill'
                src={
                  data.photo
                    ? data.photo.images.large.url
                    : 'https://i.ibb.co/Nt69Rjq/pexels-rachel-claire-6126306.jpg'
                }
                alt={data.name || ''}
              />
              <h1 className='text-white text-xl font-bold'>
                {data.name || ''}
              </h1>
              <p className='text-gray-300 flex justify-between font-semibold text-sm'>
                <span>Price</span>
                <span>{data.price_level || ''}</span>
              </p>
              <p className='text-gray-300 flex justify-between font-semibold text-sm'>
                <span>Ranking</span>
                <span>{data.ranking || ''}</span>
              </p>
              <p className='text-gray-300 flex justify-between font-semibold text-sm'>
                <span>Contract</span>
                <span>{data.phone || ''}</span>
              </p>
              <div>
                {data.cuisine &&
                  data.cuisine.map((item, index) => (
                    <div key={index + 10}>{item}</div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Sidebar
