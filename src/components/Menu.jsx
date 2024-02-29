import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
const Menu = ({cat}) => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[cat]);
  return (
    <div className='menu'>
      <h1>Other posts you may like </h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
           <Link className='link' to={`/post/${post.id}`}> 
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Menu
