import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AppLayout from './common/layouts/index';
import Contact from './pages/contact';
import Signin from './pages/sign in';
import Signup from './pages/sign up';
import Catagory from './pages/catagory';
import Cart from './pages/cart';


function App() {


//  function CreatePost(){
//   axios.post(baseURL, {
//     title: 
//     body: 
//   })
//  }


  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path='/products/:id' element={<Catagory/>}/>
         <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </AppLayout>
  );
} 

export default App;
