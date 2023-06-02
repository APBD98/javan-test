import React, { useState } from 'react'
import axios from 'axios'
import {FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';


const Home = () => {
    const [dataCountry, setDataCountry] = useState([])
    const navigate = useNavigate()
    const [active, setActive] = useState(false)


    const search = (e) =>{
      
        const q = e.target.value
        if(q.length >= 1){
          setActive(true)
        }else{
          setActive(false)
        }
        axios.get(`https://restcountries.com/v3.1/name/${q}`)
        .then((response) => setDataCountry(response.data))
    }
  return (
    <div className="w-full h-screen" >
      <div className='absolute top-32 left-0  right-0'>
        <h1 className='text-center text-7xl font-bold mb-20'>Country</h1>
        <form className='text-center w-3/5 mx-auto h-20 relative' onSubmit={search}>
          <input type="text" className={`border-2 w-full h-16 border-gray-200 rounded-xl pl-5 outline-none ${active == true && 'border-violet-400'}`} placeholder='Type any country name' onChange={search}/>
          <button className='text-gray-200 absolute top-5 right-5 text-xl' type='submit'><FaSearch/></button>   
        </form>
        <div className={`border-2 mx-auto w-3/5 min-h-[100px] rounded-xl ${active == true ? 'block': 'hidden'}`}>
          {
            dataCountry?.slice(0,5).map((country) => (
              <h1 className=' cursor-pointer hover:bg-gray-200 w-full h-10 p-2' id={country.name.common} key={country.name.common} onClick={() => navigate(`/${country.name.common.replace(/\s+/g,'-')}`)}>{country.name.common}</h1>
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home