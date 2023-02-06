import React,{useEffect, useRef, useState} from 'react'
import styles from '../../module/home.module.css'
import ImageSlider from '../imageslider/ImageSlider'
import { AboutBook } from '../../assets/data'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import { BookDisplay } from '../../assets/data'
const Home = () => {
    const [show, setShow] = useState()
    const catelogueRef = useRef(null)
    let divW = null;
    // const autoScroll = true
    // let slideInterval;
    // let intervalTime = 5000;

    useEffect(() => {
        divW = catelogueRef.current.offsetWidth;
    }, [catelogueRef])

    const handleScroll = (sign) => {
        const distance = 200
        catelogueRef.current.scrollBy({
        left: sign === "-" ? -distance : distance,
        behavior: 'smooth',
        });
        divW = sign === "+" ? divW + distance : divW - distance
        console.log(divW)
    }

    // function auto(){
    //     slideInterval = setInterval(handleScroll, intervalTime);
    // }

    // useEffect(() => {
    //     if(autoScroll){
    //         auto()
    //         return () => clearInterval(slideInterval)
    //     }
    // }, [])

  return (
    <div>
        <div className='px-24'>
            <div className={styles.home}>
                <div></div>
                <ImageSlider/>
            </div>  
        </div>
        <div className='bg-white px-24 grid grid-cols-3'>
        {AboutBook.map((item, index) => (
            <div className=' py-8 flex text-[14px]'>
                <div className='p-3 text-[22px] text-[#880018]'>{item.logo}</div>
                <div>
                    <h1 className='py-3 text-[#727272]'>{item.h1}</h1>
                    <div>{item.writeup}</div>
                </div>
            </div>
        ))}
        </div>
        <div className='px-24 py-6'>
            <div className='relative flex justify-center'>
                <h1 className='text-2xl tracking-wider font-bold uppercase'>BestSeller</h1>
                <div className='absolute top-0 right-0 flex gap-x-3'>
                    <div className='p-2 cursor-pointer hover:text-[#880018] bg-white' onClick={() => handleScroll("-")}>
                        <BiChevronLeft/>
                    </div>
                    <div className='p-2 cursor-pointer hover:text-[#880018] bg-white' onClick={() => handleScroll("+")}>
                        <BiChevronRight/>
                    </div>
                </div>
            </div>
            <div className={`py-4 flex gap-2 text-[13px] flex-wrap md:flex-nowrap overflow-x-scroll ${styles.catelogue}`} ref={catelogueRef}>
                {BookDisplay.map((item) => (
                    <div className='min-w-[225px] p-2 bg-white flex flex-col items-center text-center' key={item.id}>
                        <img src={item.image} alt='description' height={200} width={200}/>
                        <div className='my-3 py-3'>
                            <h1 className='font-bold'>{item.title}</h1>
                            <h2 className='py-2 text-[#880018] font-bold'>{item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home