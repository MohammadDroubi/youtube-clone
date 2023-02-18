import React from 'react'
import { Stack,Box,Typography } from '@mui/material'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import {FetchApi} from '../utils/FetchApi'
const SearchFeed = () => {

const [videos, setVideos] = useState([])
const{searchTerm}=useParams();
useEffect(()=>{
  FetchApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
},[searchTerm]);

  return (

    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
    <Typography variant='h4' mb={2} fontWeight='bold' sx={{color:'WHITE'}} >
      Search For <span style={{color:'#FC2503'}} >{searchTerm}</span> videos
    </Typography>

    <Videos videos={videos}/>
    </Box>

  )
}

export default SearchFeed