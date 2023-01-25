import React from 'react'
import styles from '../../module/home.module.css'
import ImageSlider from '../imageslider/ImageSlider'
import { AboutBook } from '../../assets/data'
const Home = () => {
  return (
    <div>
        <div className='px-16'>
            <div className={styles.home}>
                <div>1</div>
                <ImageSlider/>
            </div>  
        </div>
        <div className='bg-white px-16 grid grid-cols-3'>
        {AboutBook.map((item, index) => (
            <div className='px-4 py-8 flex text-[14px]'>
                <div className='p-3 text-[22px] text-[#880018]'>{item.logo}</div>
                <div>
                    <h1 className='py-3 text-[#727272]'>{item.h1}</h1>
                    <div>{item.writeup}</div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Home