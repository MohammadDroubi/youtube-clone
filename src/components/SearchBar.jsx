import React from 'react'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm,setsearchTerm]=useState('')

  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault()

    if(searchTerm)
    {
      navigate(`/search/${searchTerm}`)
    }

    setsearchTerm('');


  }
  return (
    <Paper onSubmit={handlesubmit} component="form" sx={{ borderRadius:20,pl:2,border:'1px solid #e3e3e3',mr:{sm:5},boxShadow:"none" }}>
        <input className='search-bar' onChange={(e)=>setsearchTerm(e.target.value)} placeholder="Search...." value={searchTerm} />
        <IconButton type='submit' sx={{ p:'10px',color:'red' }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar