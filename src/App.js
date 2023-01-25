import React from 'react'
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { About, ContactUs, Event, Faqs, Home, Publishing } from './components/routes';
import Footer from './components/footer/footer';
function App(){
  return(
    <div className='bg-[#f5f5f5] border-t-2 border-red-600'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/publishing' element={<Publishing/>}/>
          <Route path='/events-news' element={<Event/>}/>
          <Route path='/faqs' element={<Faqs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;