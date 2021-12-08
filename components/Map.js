import GoogleMapReact from 'google-map-react'
import React from 'react'

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  return (
    <div className='h-full w-full'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAq76-GWQU-TPZ65A10Bkanf5Qof8mP2r0' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[20, 20, 20, 20]}
        options={{ styles: [] }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({
            ne: e.bounds.ne,
            sw: e.bounds.sw,
          })
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
