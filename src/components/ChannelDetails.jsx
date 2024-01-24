import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import {ChannelCard, Videos} from './index'
import { fetchFromApi } from '../utils/FetchFromApi'

const ChannelDetails = () => {
  const {id}=useParams();
  const [channelDetails,SetChannelDetails]=useState(null);
  const [videos,setVideos]=useState([]);
  console.log(channelDetails,videos);
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>SetChannelDetails(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div 
        style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 28%, rgba(0,212,255,1) 100%)',
        zIndex:10,height:'300px'}}/>
        <ChannelCard channelDetail={channelDetails} marginTop="-145px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px"}}}/>
        {videos && videos.length > 0 ? (
            <Videos videos={videos} />
          ) : (
            <p>No videos available</p>
          )}

      </Box>

    </Box>
  )
}

export default ChannelDetails
