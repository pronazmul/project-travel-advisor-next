var axios = require('axios').default

var options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '77fd730c60msh8f8db5dad425e5bp1e4b3ajsndfa7f3928ac3',
  },
}

export default async function placesData(req, res) {
  try {
    console.log(req.query)
    const URL =
      'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

    const { data } = await axios(URL, options)
    res.status(200).send(data)
  } catch (error) {
    console.error(error)
  }
}
