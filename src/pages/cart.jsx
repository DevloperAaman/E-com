import React from 'react';
import useCart from '../utils/hooks/useCarts';

const Cart = () => {
  const { items ,deleteCartItem} = useCart();
  console.log({ items},"test");
  var totalpriceCount = 0;
  items?.map((item) => totalpriceCount += item?.price)
  return (  
    <div>
              <div className='card flex flex-col justify-center p-10 bg-white  shadow-2xl'>
              <b><span className='mr-[30%] ml-[30%]' >Total Quantity: {items.length}</span>
                <span>Subtotal: {totalpriceCount}</span></b>
              </div>

      {
        items?.map((item) => {
          return (
            <div className="container mx-auto  p-4" >
              {/* <div className='grid grid-cols-4 gap-16'> */}
               
              <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl grid grid-cols-4 gap-4 text-2xl col-span-3">
                <div className="prod-img">
                  <img src={item?.image}
                    className="object-cover object-center h-56" />
                    <p>{item?.title}</p>
                </div>
                <div className="prod-img col-span-2">
             
              <b>  <span>Price: ${item?.price}</span></b> <br/><br/>
               <b> <h1> {item?.category}</h1></b>
                <p>{item?.description}</p>
                <p>Quantity: {item?.quantity}</p> 
                </div>
                <div>
                <button className=" bg-[#fb641b] px-10 py-2 transition ease-in duration-200 uppercase text-white border-2 
                 focus:outline-none" onClick={ () => deleteCartItem(item?.id)} >Remove Item</button>
                  <span>{}</span>
                </div>
              </div>
              </div>
          
          )
        })
      }

    </div>

  )
}

export default Cart;
