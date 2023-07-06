import React from 'react'
import Logo from './imgs/logo.png';
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#232F3E] text-white h-[21em]  grid grid-cols-4 grid-flow-row   flex">

        {/* <div class=" w-[50%] mt-[4%] ml-[10%]">
          <img src="https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png" alt="" />
        </div> */}

        <div class=" mt-[12%] ml-[22%]"><ul>
          <h1><b>Get to Know Us</b></h1>
          <li> <Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact' >Contact Us</Link></li>
        </ul></div>
        <div class="mt-[12%] font-12">
          <h1><b>Connect with Us</b></h1>
          <p><Link to='https://www.facebook.com/AmazonIN'>Facebook</Link></p>
          <p><Link to='https://twitter.com/AmazonIN'>Twitter</Link></p>
          <p><Link to='https://www.instagram.com/amazonnews_in/'>Instagram</Link></p>
        </div>
        <div class="mt-[12%] font-12">
          <h1><b>Make Money with Us</b></h1>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
          <p>Amazon pay to Investor</p>
        </div>
        <div class="mt-[12%] font-12">
          <h1><b>Let Us Help You</b></h1>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download </p>
          <p>Help</p>
        </div>

      </div>
      <hr />
      <div className="bg-[#232F3E] text-white auto-rows-max grid h-[8em] grid-flow-row gap-4  flex">
        <img src={Logo} alt="Logo" className='h-12 ml-[50%] mt-[1%]' />

        <div className='flex text-white gap-2  ml-[14%] text-sm'>
          <a>Australia</a>
          <a>Brazil</a>
          <p>Canada</p>
          <p>China</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p>
          <p>United Kingdom</p>
          <p>United States</p></div>
      </div>

      <div className="bg-[#131A22] text-white w-full gap-4 text-sm flex">
        <p className='ml-[40%]'>Conditions of Use & Sale</p>
        <p>Privacy Notice</p>
        <p >Interest-Based Ads</p>
        </div>
        <div className="bg-[#131A22] text-white text-sm ">
        <p className='ml-[44%]'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>

    </>
  )
}

export default Footer;
