import React, { useEffect, useState } from 'react'
import {Box,Typography} from '@mui/material'
import {Videos} from './index'
import { fetchFromApi} from '../utils/FetchFromApi'
import {useParams} from 'react-router-dom'
const SearchFeed = () => {
  const {searchItem}=useParams();
  const [videos, setVideos]=useState([]);
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchItem}`)
    .then((data)=>setVideos(data.items));

  },[searchItem])
  return (
    <Box p={2}
    sx={{
      overflowY:'auto',height:'90vh', flex:2
    }}
    >
         <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color:'white'
         }}>
          Result for <span style={{color:'#F31503'}}>{searchItem}</span> Videos
         </Typography>
         <Videos videos={videos}/>

    </Box>
  )
}

export default SearchFeed;
