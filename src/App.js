import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material'
import { Navbar,Feed,VideoDetails,ChannelDetails,SearchFeed } from './components';
function App() {
  return (
   <Router>
   <Box sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Feed/>}/>
      <Route path='/video/:id' element={<VideoDetails/>}/>
      <Route path='/channel/:id' element={<ChannelDetails/>}/>
      <Route path='/search/:searchItem' element={<SearchFeed/>}/>
    </Routes>
   </Box>
   </Router>
  );
}

export default App;
