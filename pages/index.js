import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from './../components/Sidebar'
import Map from './../components/Map'

export default function Home() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  const [bounds, setBounds] = useState(null)
  const [places, setPlaces] = useState([])

  console.log(places)

  // This is the function that gets the coordinates of the user
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  // This is the function that gets the places around the user
  useEffect(async () => {
    try {
      const URL =
        'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
      var options = {
        params: {
          bl_latitude: (bounds && bounds.sw.lat) || 0,
          tr_latitude: (bounds && bounds.ne.lat) || 0,
          bl_longitude: (bounds && bounds.sw.lng) || 0,
          tr_longitude: (bounds && bounds.ne.lng) || 0,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '2244c18308msh9024c28bfe14e67p1066c7jsnf8fe3dd2c3d1',
        },
      }
      let {
        data: { data: places },
      } = await axios.get(URL, options)
      if (places && places.length > 0) {
        setPlaces(places)
      }
    } catch (error) {
      console.log(error)
    }
  }, [coordinates])
  return (
    <div>
      <Head>
        <title>Travel Adviser</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen overflow-hidden grid grid-cols-10'>
        <div className='col-span-10'>
          <Header />
        </div>
        <div className='col-span-3'>
          <Sidebar places={places || []} />
        </div>
        <div className='col-span-7 h-screen'>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </div>
      </main>
    </div>
  )
}
