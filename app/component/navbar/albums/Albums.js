import React, { useEffect, useState } from 'react'
'use client'
function Albums() {
    const [albums,setAlbums]=useState();
    async function getAlbums(){
        let {data}=await axios.get("https://jsonplaceholder.typicode.com/albums")
        setAlbums(data);
        console.log(data);
   
    }
    useEffect(()=>{
        getAlbums();
    })
  return (
    <div>
        <div className='container'>
  <h1>our albums</h1>
  <div className='row'>
    {
        albums.map((album,index)=>{
            return <div className='col-md-3' key={index}>
        <h2>{album.title}</h2>
            </div>
        }
       
        )
    }
  </div>
</div>

    </div>
  )
}

export default Albums