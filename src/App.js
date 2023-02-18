import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'


const app = () => (
   
 <BrowserRouter>

 <Box sx={{ backgroundColor:'#000' }}>

 <Navbar/>

 <Routes>
 <Route path='/' exact element={<Feed/>}></Route>
 <Route path='/video/:id' exact element={<VideoDetails/>}></Route>
 <Route path='/channel/:id' exact element={<ChannelDetails/>}></Route>
 <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>
 </Routes>
   
   </Box>
  
  </BrowserRouter>
    



  
)
export default app