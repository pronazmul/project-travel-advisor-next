const PlaceCard = ({ data }) => {
  return (
    <div className='pt-3'>
      <h1 className='text-white'>{data.name}</h1>
      <p className='text-red-400'>{data.address}</p>
      <p className='text-white'>{data.description}</p>
    </div>
  )
}

export default PlaceCard
