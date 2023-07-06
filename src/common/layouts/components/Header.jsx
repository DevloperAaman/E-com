import Logo from './imgs/logo.png';
import { Link , useNavigate} from "react-router-dom";
import useCart from '../../../utils/hooks/useCarts';
import { useEffect } from 'react';

const Header =()=>{
   
    const { items ,deleteCartItem} = useCart();
   
    return(
        
        <div className="bg-black flex h-20  gap-8 items-center ">
            <div><img src={Logo} alt="Logo" className='h-20 ml-[6%]'></img></div>
            <div className='gap-6 flex text-white'>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/about'>About</Link></p>            
            <p><Link to='/contact' >Contact Us</Link></p>
            </div>
            <div className=' flex justify-end h-10 w-[50%] ml-[4%]'>
            <input className='rounded-l w-full ' type="text"/>
            <button className='bg-orange-300 rounded-r w-20 gap-12 justify-end'>Search</button>
            </div>
            <div className='gap-2 flex justify-end text-white' >
                <p><Link to='/signin'>Sign In</Link></p>
                <p><Link to='/signup'>Sign Up</Link></p>
                <p className='text-bold'> <Link to='/cart'>   &nbsp;  &nbsp; Cart </Link> <sup>{items.length}</sup></p>
            </div>
            
        </div>
    )
}

export default Header;