import axios from "axios";
const BASE_URL="https://youtube-v31.p.rapidapi.com"
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'5ed4531807mshcf08e3d2137d001p13f327jsn80fe10faa701',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromApi=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options);
   return data;
  }