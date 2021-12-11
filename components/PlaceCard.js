import Image from 'next/image'

const PlaceCard = ({ data }) => {
  return (
    <div className='pt-3 space-y-2 relative'>
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
      <h1 className='text-white text-xl font-bold'>{data.name || ''}</h1>
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
          data.cuisine.map((item, index) => <div key={index + 10}>{item}</div>)}
      </div>
    </div>
  )
}

export default PlaceCard
