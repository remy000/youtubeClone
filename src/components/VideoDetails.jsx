import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import {Box,Stack,Typography} from '@mui/material' 
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './index'
import ReactPlayer from 'react-player'
import { fetchFromApi } from '../utils/FetchFromApi'
const VideoDetails = () => {
  const {id}=useParams();
  const [videoDetail,setVideoDetail]=useState(null);
  const [video,setVideo]=useState(null);
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideo(data.items))
  },[id])
  return (
   <Box minHeight="95vh">
    <Stack direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
        <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color="white" variant='h5' fontWeight='bold' p={2}>
          </Typography>

        </Box>

      </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
      {console.log(video)}
      <Videos videos={video} direction='column'/>

    </Box>

    </Stack>
   

   </Box>
  )
}

export default VideoDetails;
