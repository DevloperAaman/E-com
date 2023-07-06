import React from 'react'
import Api from '../../utils/hooks/useApi';
import useCart from "../../utils/hooks/useCarts";

//onClick={() => handleClick(item.id)}
const Card = ({ item, handleClick }) => {
    const { addCartItem } = useCart();

    return (
        <div className="container mx-auto  p-4" >
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"  >

                <div className="prod-img">
                    <img src={item?.image}
                        className="object-cover object-center h-56" />
                </div>
                <div className="prod-title">
                    <p className="text-xl uppercase text-gray-900 font-bold h-32">{item?.title} </p>

                </div>
                <div className="prod-title">
                    <p> </p>
                    <p className="text-2xl uppercase text-gray-900 font-bold">{item?.price} <span className="text-[#16e32f] lg:ml-10 md:ml-8">{item?.discount}</span></p>
                    <br />
                </div>
                <div className="prod-info grid gap-10">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">

                        <button className="bg-[#ffa500] px-8 py-2  transition ease-in duration-200 uppercase text-white border-2 
 focus:outline-none" onClick={() => addCartItem(item)}>Add
                            to cart</button>
                        <button className=" bg-[#fb641b] px-10 py-2 transition ease-in duration-200 uppercase text-white border-2  focus:outline-none">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
