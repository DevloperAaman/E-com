
import React ,{useState} from 'react';
import './App.css';
import Nav from "./component/nav"
import Card  from './component/card';
function App() {
  const[basket ,setBasket] =useState(0);
    const Cart= ()=> {
    setBasket(basket + 1);
    }
  return (
   <>
   <Nav cartVal={basket}/>
   <Card click={Cart}/>
   
   </>
  );
}

export default App;
