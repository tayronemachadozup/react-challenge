import axios from 'axios'

// API PATCH
const ApiKEY = '9c5c64f28ef6b06c9548ba6f6077905a'
const MovieDbPath = 'https://api.themoviedb.org'

export const getMovies = async (path:any) =>(
  axios.get(`${MovieDbPath}/3${path}api_key=${ApiKEY}&page=2&language=pt-BR`))

// .then((response) => {console.log('request api', response)}
