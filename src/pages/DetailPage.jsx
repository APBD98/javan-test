import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import globe from '../assets/globe.svg'
import { FaArrowLeft } from 'react-icons/fa'

const DetailPage = () => {
    const {id} = useParams()
    const [datas, setDatas] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${id.replaceAll('-',' ')}`)
        .then((res) => setDatas(res.data));

    },[])

    

  return (
    <div className='w-full h-screen pl-24 pt-20'>
        <div className='w-[200px] h-[50px] bg-[#8362F2] flex items-center justify-center text-white gap-2 rounded-md cursor-pointer' onClick={() => navigate('/')}>
            <p><FaArrowLeft/></p>
            <p>Back to Homepage</p>
        </div>
        
            {
                datas.map((data) => (
                    <div className='w-[90%] h-[400px] grid grid-cols-2 grid-rows-3 mt-10 gap-10' key={data.name.common}>
                        <div className=''>
                            <div className='flex text-[48px]  items-center gap-2'>
                                <h1>{data.name.common}</h1>
                                <img src={data.flags.svg} alt="flag nation" className='w-[46px] h-[36px] mt-2'/>
                            </div>
                            <div className='text-[12px] flex gap-2'>
                                <p className='w-10 p-1 border-2 rounded-xl text-center bg-[#8DD5CC] text-white'>{data.altSpellings[0]}</p>
                                <p className='min-w-[20px] p-1 border-2 rounded-xl text-center bg-[#8DD5CC] text-white'>{data.name.official}</p>
                                <p className='min-w-[20px] p-1 border-2 rounded-xl text-center bg-[#8DD5CC] text-white'>{data.altSpellings[2]}</p>
                            </div>

                        </div>
                        <div className='col-start-1 ml-5 flex justify-between border-2 overflow-hidden p-5 rounded-md shadow-md'>
                            <div className=''>
                                <h1 className='text-[18px] font-semibold'>LatLong</h1>
                                <p className='text-[#8362F2] text-5xl font-bold'>{data.latlng[0]},{data.latlng[1]}</p>
                            </div>
                            <img src={globe} alt="globe image" className='w-[200px] h-[200px]'/>
                        </div>
                        <div className='text-lg ml-5 border-2 p-3 rounded-md shadow-md'>
                            <p>Capital: <span className='font-semibold'>{data.capital}</span> </p>
                            <p>Region: <span className='font-semibold'>{data.region}</span> </p>
                            <p>Subregion: <span className='font-semibold'>{data.subregion}</span></p>

                        </div>
                        <div>
                            <h1 className='text-lg font-semibold'>Calling Code</h1>
                            <p className='text-5xl font-bold text-[#8362F2]'>{data.idd.root.replaceAll('+','')}{data.idd.suffixes}</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold'>Currency</h1>
                            <p className='text-5xl font-bold text-[#8362F2]'>{Object.keys(data.currencies)}</p>
                        </div>
                
                    </div>
                ))
            }
        
            
        
    </div>

  )
}

export default DetailPage