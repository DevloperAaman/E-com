import React ,{useState}from "react";

const Card =({click})=> {
    return (
        <div className="w-screen h-screen flex justify-center items-center grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-2">
  <div className="container mx-auto  w-full p-4 ">
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div className="prod-title">
        <p className="text-2xl uppercase text-gray-900 font-bold">Puma Shoes</p>
        <p className="uppercase text-sm text-gray-400">
          The best shoes in the marketplace
        </p>
      </div>
      <div className="prod-img">
        <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
             className="w-full object-cover object-center" />
      </div>
      <div className="prod-info grid gap-10">
        {/* <div>
          <ul className="flex flex-row justify-center items-center">
            <li className="mr-4 last:mr-0">
              <span
                    className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                <a href="" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span
                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span
                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="" className="block w-6 h-6 bg-red-500 rounded-full"></a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span
                    className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="" className="block w-6 h-6 bg-green-500 rounded-full"></a>
              </span>
            </li>
          </ul>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl">65 $</p>
          <button onClick={click}
                  className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart</button>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</div>
    )
}



export default Card;