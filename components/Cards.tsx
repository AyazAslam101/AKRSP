import React from 'react'
import Image from "next/image";

function Cards({img,title,description,readMore}:any) {
  return (
    <div className='bg blue'>
<div className='flex '>
  <div className=''>

        <Image src={img} alt="alt" />
  </div>
  <div>

        <h6>{title}</h6>
        <p>{description}</p>
        <button>{readMore}</button>
  </div>
  </div>        
        
    </div>  
  )
}

export default Cards