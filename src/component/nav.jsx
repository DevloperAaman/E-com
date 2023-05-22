import React, { useState } from "react";

import Menu from "./mobile";
import Basket  from "./basket";

const Nav = ({ cartVal }) => {

const[showmenu, setMenu]=useState();
    return (
        <>
        <nav className="bg-[#fffcfc] border-solid border-2  z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 ">
        <div className="flex-shrink-0 font-bold tracking-wider">
          Not Decided Yet
        </div>
        <div className="hidden md:block grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
          <div><Menu /> </div>
        
        </div>
        <div className="hidden md:block tracking-wider">
          <Basket cartVal={cartVal}/>
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400
           hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition 
           duration-150 ease-in-out" onClick={()=> setMenu(!showmenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showmenu && <Menu /> }
      </div>
    </nav>
    
            </>
    )
}


export default Nav;