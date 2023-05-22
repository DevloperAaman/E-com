import React, { useState } from "react";

const Card = ({ click ,CardList}) => {
 
  return (
    <div className="  flex justify-center items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
      {CardList.map((item)=>{
        return (
      <div className="container mx-auto  w-full p-4 ">
        <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div className="prod-title">
            <p className="text-2xl uppercase text-gray-900 font-bold">{item?.name} </p>
            
          </div>
          <div className="prod-img">
            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/1/s/l/10-f-15-black-red-10-blacktown-black-original-imagnqd8yfqss4hv.jpeg?q=70"
              className="w-full object-cover object-center" />
          </div>
          <div className="prod-title">
            <p> </p>
          <p className="text-2xl uppercase text-gray-900 font-bold">{item?.price} <span className="text-[#16e32f] lg:ml-10 md:ml-8">{item?.discount}</span></p>
            <br/>
          </div>
          <div className="prod-info grid gap-10">

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
            
              <button onClick={click} className="bg-[#ffa500] px-8 py-2  transition ease-in duration-200 uppercase text-white border-2  focus:outline-none">Add
                to cart</button>
                <button className=" bg-[#fb641b] px-10 py-2 transition ease-in duration-200 uppercase text-white border-2  focus:outline-none">BUY NOW</button>
            </div>
            
          </div>
        </div>
      </div>
      )})}
    </div>
  )
}



export default Card;