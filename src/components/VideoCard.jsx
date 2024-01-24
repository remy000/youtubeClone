import React from 'react'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelUrl, demoVideoUrl,  demoChannelTitle,  demoVideoTitle} from '../utils/constant'
import { Link } from 'react-router-dom'
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
   <Card sx={{width:{xs:'100%', sm:'320px',md:'308px' }, boxShadow:'none', borderRadius:0}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
    sx={{width:{
      xs:'100%', sm:'320px',md:'308px'
    }, height:180}}/>

    </Link>
    <CardContent sx={{background:'#1e1e1e', height:'100px'}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <Typography variant='subtitle1' fontWeight="bold" color="white">
        {snippet?.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
    </Typography>

    </Link>
    <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
    <Typography variant='subtitle2' fontWeight="bold" color="gray">
        {snippet?.channelTitle|| demoChannelTitle}
        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
    </Typography>

    </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard
