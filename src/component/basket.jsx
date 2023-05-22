import React  from "react";
import Basketlogo from "../image/basket.png";

const Basket =({cartVal})=>{
    return <><div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2">
        <a className="lock md:inline-block px-3 py-2 rounded-md  focus:text-white "> <img src={Basketlogo}
         className="  h-12 w-12  " /> </a>
         <h1>{cartVal} </h1>
         

        </div>
        </>
}
export default Basket;