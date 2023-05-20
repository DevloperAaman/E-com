import React, { useState } from "react";
import Basketlogo from "../image/basket.png"

const Nav = ({cartVal}) => {
    

    return (
        <div>
            <nav className="bg-[#fffcfc]  h-16   space-x-4 border-solid border-2  z-40">
                <div className="   mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 gap-2">

                    <div> <h1>E-Com</h1></div>
                    <div></div>
                    <div></div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-2">
                        <div></div>
                        <div></div>
                        <div className="text-right object-end">
                        <img src={Basketlogo}
                            className="  h-12 w-12 m-2  " />
                           
                    </div></div>
                    
                    <div className="m-2 text-4xl text-[#50d71e] "><h1>{cartVal}</h1></div>
                </div>

            </nav>
        </div>
    )
}


export default Nav;