import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';       
import MyProfile from './pages/MyProfile'; 
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Login from './pages/login';         
import About from './pages/about';        
import Contact from './pages/contact';    
import Doctors from './pages/doctors';   
import Navbar from './components/Navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/MyAppointment' element={<MyAppointment />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
