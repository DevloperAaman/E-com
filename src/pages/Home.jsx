
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../utils/hooks/useApi";
import Card from "../common/layouts/card";


const Home = () => {
    const navigate= useNavigate();
    const { data, error, getProduts } = Api();
    useEffect(() => {
        getProduts("products");
    }, []);

    const handleproductClick=(id)=>{
        navigate(`products/${id}`);
console.log(id,"hello");
    }
    console.log(data, "data")

    return (
        <div className="flex justify-center items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
            {
                data.map((item) => {
                    return (
                        <Card item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}
//handleClick={handleproductClick}

export default Home;