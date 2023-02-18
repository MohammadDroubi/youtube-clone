import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box,Stack,Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import {FetchApi} from '../utils/FetchApi'
import { CheckCircle } from '@mui/icons-material'



const VideoDetails = () => {
  const [VideoDetail,setVideoDetail]=useState(null);
  const [videos,setVideos]=useState(null);
  const {id}=useParams()

  useEffect(()=>{
    FetchApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));
    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items));
  },[id])
  
  if(!videos) return 'Loading....'
  if(!VideoDetail?.snippet) return 'Loading....'
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=VideoDetail;
  
  return (
   <Box minHeight='95vh'>
    <Stack direction={{ xs:'column',md:'row' }}>
    <Box flex={1}>
    <Box sx={{ width:'100%',position:'sticky',top:'86px' }} >

      <ReactPlayer className="react-player" controls url={`https://www.youtube.com/watch?v=${id}`}
      />

       <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>{title}</Typography>


    <Stack direction='row' justifyContent='space-between' sx={{ color:'#fff' }} py={1} px={2} >
      <Link to={`/channel/${channelId}`}>
      <Typography color='#fff' variant={{ sm:'subtitle1', md:'h6' }}>
      {channelTitle}

      <CheckCircle sx={{ fontSize:'12px', color:'gray',ml:'5px' }}/>
      </Typography>
      </Link>


      <Stack direction='row' gap='20px' alignItems='center'>
      <Typography variant='body1' sx={{ opacity:'0.8' }}>
        {parseInt(viewCount).toLocaleString()} views
      </Typography>

      <Typography variant='body1' sx={{ opacity:'0.8' }}>
        {parseInt(likeCount).toLocaleString()} likes
      </Typography>
    </Stack>
    

    </Stack>
    </Box>
    </Box>

    <Box px={1} py={{ xs:1,md:5 }} justifyContent='center' alignItems='center'>
       <Videos videos={videos} direction='column' /> 
    </Box>
    </Stack>

    
   
    

   </Box>
  )
}

export default VideoDetails