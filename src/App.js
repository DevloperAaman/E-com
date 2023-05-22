
import React ,{useState,useEffect} from 'react';
import './App.css';
import Nav from "./component/nav"
import Card  from './component/card';
import Basketlogo  from './image/basket.png';
function App() {
  const getcart =JSON.parse(window.localStorage.getItem('aman')||"0");
  const[basket ,setBasket] =useState(getcart);
    const Cart= ()=> {
    setBasket(basket + 1);
    }
    
    useEffect(() => {
      localStorage.setItem("aman", JSON.stringify(basket));
    }, [basket ]);

    const CardList =  [{
      id: Math.floor(Math.random() * 10000),
      name: " PUMA SHOES",
      shoeBasketlogo:  <img src= "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/1/s/l/10-f-15-black-red-10-blacktown-black-original-imagnqd8yfqss4hv.jpeg?q=70"/>,
      price: "$ 543",
      discount: "60% off",
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: " PUMA SHOES",
      shoeBasketlogo:  <img src= {Basketlogo}/>,
      price: " $ 399",
      discount: "30% off"
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: " PUMA SHOES",
      shoeBasketlogo:  <img src= {Basketlogo}/>,
      price: "$ 543",
      discount: "60% off"
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: " PUMA SHOES",
      shoeBasketlogo:  <img src= {Basketlogo}/>,
      price: "$ 543",
      discount: "70% off"
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: " PUMA SHOES",
      shoeBasketlogo:  <img src= {Basketlogo}/>,
      price: "$ 543",
      discount: "70% off"
    }
    
  ]
  return (
   <>
   <Nav cartVal={basket}/>
   <Card click={Cart} CardList={CardList}/>
   
   </>
  );
}

export default App;
