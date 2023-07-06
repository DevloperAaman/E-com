import React, { useState } from 'react'
import axios from 'axios';



const useApi = () => {
    const BASE_URL = "https://fakestoreapi.com/";

    const [data, setData] = useState([]);
    const [error, seterror] = useState("");

    const getProduts = async (url, header = {}) => {
        await axios.get(BASE_URL + url)
            .then((res) => {            
                setData(res.data);
            })
            .catch((err) => {
                seterror(err);
            });
    };
    return { data, error, getProduts };
};

export default useApi;
