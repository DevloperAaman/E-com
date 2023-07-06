import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useApi from '../utils/hooks/useApi';
import useCart from '../utils/hooks/useCarts';

const Catagory = () => {
    const params = useParams();
    const {addCartItem} =useCart();
    const { item,data, error, getProduts } = useApi();
    useEffect(()=>{
        getProduts(`products/${params?.id}`);
    },[params.id]) 
    //console.log(params,"aman");
    //console.log(data, "data")
    
  return (
    <div className='flex justify-center datas-center grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2 m-1'>
   <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
   {/* <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table> */}
           <div className="prod-img">
                            <img src={data?.image}
                                className="object-cover object-center h-56" />
                        </div>
                        <div className="prod-title">
                            <p className="text-xl uppercase text-gray-900 font-bold h-32">{data?.title} </p>
                        </div>
                        <div className="prod-title">
                            <p> </p>
                            <p className="text-2xl uppercase text-gray-900 font-bold">{data?.price} <span className="text-[#16e32f] lg:ml-10 md:ml-8">{data?.discount}</span></p>
                            <br />
                        </div>
                        <div className="prod-info grid gap-10">

                            <div className="flex flex-col md:flex-row justify-between datas-center text-gray-900">

                            <button className=" bg-[#fb641b] px-10 py-2 transition ease-in duration-200 uppercase text-white border-2 
                             focus:outline-none" onClick={()=> addCartItem(item)}>ADD to Cart</button>

                                <button className=" bg-[#fb641b] px-10 py-2 transition ease-in duration-200 uppercase text-white border-2  focus:outline-none">BUY NOW</button>
                            </div>

                        </div>
</div>
    </div>
  )
}

export default Catagory;
