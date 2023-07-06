import React, { useEffect, useState } from 'react'

const useCart = () => {
    const [items, setItems] = useState([]);
    console.log(items, "cartitem")

    useEffect(() => {
        const storreditemList = localStorage.getItem('cartList');
        if (storreditemList) {
            setItems(JSON.parse(storreditemList));
        }
    }, []);

    const addCartItem = (data) => {
       // debugger;
    //     const existingItem = items.find(item => item.id === data.id);
    //     if (existingItem) {
    //         const updatedCartItems = items.map(item => {
    //           if (item.id === data.id) {
    //             return {
    //               ...item,
    //               quantity: item.quantity + 1
           
    //             };
                
    //           }
    //           return item;
    //         });
            
    // setItems(updatedCartItems);
   // console.log({updatedCartItems});
     //   } else {
       // console.log({ data })
        const carts = [...items, data]
        setItems(carts)
        localStorage.setItem('cartList', JSON.stringify(carts))
       // }
    }

    const deleteCartItem = (id) => {
        const newItems = items.filter((item) => item.id !==id);
        setItems(newItems);
        localStorage.setItem('cartList', JSON.stringify(newItems))
    }

    const updatedCartItems =()=>{
         
    }


    return { items, addCartItem, deleteCartItem }
}

export default useCart; 