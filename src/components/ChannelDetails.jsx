import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import {FetchApi} from '../utils/FetchApi'

import { Box,Typography } from '@mui/material'

const ChannelDetails = () => {

  const [ChannelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  
  const {id}=useParams();

  useEffect(()=>{
    FetchApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))
    FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  },[id])

  console.log(ChannelDetail,videos)
  return(

        <Box minHeight='95vh'>
          <Box>
            <div style={{background: 'linear-gradient(90deg, rgba(9,19,121,1) 3%, rgba(255,0,0,1) 100%, rgba(36,16,0,1) 100%, rgba(9,19,121,1) 100%)'
            ,height:'300px',zIndex:'10' }}
             />
            <ChannelCard ChannelDetail={ChannelDetail} marginTop='-110px' />
          </Box>

          <Box display='flex' p={2}>
            <Box sx={{mr:{sm:'100px'}}}     />
            <Videos videos={videos} />
          </Box>
          
        </Box>

        
        
  )
}



export default ChannelDetails