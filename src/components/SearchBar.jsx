import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchItem,setSearchItem]=useState('');
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchItem){ 
    navigate(`/search/${searchItem}`);
    setSearchItem('');
    }
  }
  return (
   <Paper
   component="form"
   onSubmit={handleSubmit}
   sx={{
    borderRadius:20,
    pl:2,
    border:'1px solid #e3e3e3',
    boxShadow:'none',
    mr:{sm:5}
   }}
   >
    <input className='search-bar' placeholder='search....' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
    <IconButton type='submit' sx={{
        px:'10px', color:'red'
    }}>
        <Search/>
     
    </IconButton>
   </Paper>
  )
}

export default SearchBar
