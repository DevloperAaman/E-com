import React from 'react';
import axios from 'axios';

const baseURL = "https://fakestoreapi.com/products/";

const About = () => {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
            setPost(response.data);
            console.log(response);
        });
    }, []);

    function Create () {
        axios.post(baseURL, {
               title: "Hello world",
               description: "This is a Post",
             })
             .then((response) => {
                setPost(response.data);
             });
    }
    if (!post) return null;
    return (
        <div>
            <h1>{post.userId}</h1>
            <p> {post.title}</p>
            <p>{post.price}</p>
            <img  src={post.image} className='w-40'/>
            <button onClick={Create}> Create </button>

        </div>

    )
}

export default About;