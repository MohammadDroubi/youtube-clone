import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import {demoProfilePicture} from '../utils/constants'
const ChannelCard = ({ChannelDetail,marginTop}) =>  (
  <Box sx={{ borderRadius:'20px',boxShadow:'none',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'356px',md:'320px'},height:'326px',margin:'auto',marginTop }}>

  <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
    <CardContent sx={{ display:'flex',flexDirection:'column',color:'#fff',justifyContent:'center',alignItems:'center' }}>

    <CardMedia 
     image={ChannelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
     alt={ChannelDetail?.snippet?.title}
     sx={{  width:'180px',height:'180px',borderRadius:'50%',mb:2 }}

    
    
    />

    <Typography variant='h6'>
      {ChannelDetail?.snippet?.title}
      <CheckCircle sx={{ fontSize:15,color:'gray',ml:'5px' }}></CheckCircle>
    </Typography>

    {ChannelDetail?.statistics?.subscriberCount
&&(
      <Typography>
       {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()} Subcribers
      </Typography>
    )}

    </CardContent>
   
   
  </Link>
</Box>
  )


export default ChannelCard