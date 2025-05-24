import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [data, setData] = useState(null)

  useEffect(()=>{
    axios
      .get("https://dummyjson.com/recipes")
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally()
  }, [])
  
  return (
    <div>
      <h2 className='text-center text-4xl'>Hero</h2>
      <div className='container mx-auto grid grid-cols-4 gap-2'>
        {
          data?.recipes?.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hero