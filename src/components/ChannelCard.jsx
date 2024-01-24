import React from 'react'
import { Box,CardContent,CardMedia } from '@mui/material'
import {demoProfilePicture} from '../utils/constant'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
   <Box sx={{boxShadow:'none', borderRadius:'20px',
   display:'flex',justifyContent:'center',alignItems:'center',
   width:{xs:'352px', md:'320px'},
   height:'326px', margin:'auto', marginTop:marginTop,
   
   }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',
        textAlign:'center', color:'white'}}>
            <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #e3e3e3'}}
            
            />
        </CardContent>
    </Link>

   </Box>
  )
}

export default ChannelCard
