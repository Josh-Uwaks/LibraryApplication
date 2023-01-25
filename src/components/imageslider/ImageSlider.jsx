import React,{useState} from 'react'
import { useEffect } from 'react'
import {AiOutlineArrowLeft,  AiOutlineArrowRight} from 'react-icons/ai'
import ImageSliderdata from '../../assets/data'
import '../../module/slider.css'
const ImageSlider = () => {
    const[currentSlide, setCurrentSlide] = useState(0)
    const slideLength = ImageSliderdata.length
    const autoScroll = true
    let slideInterval;
    let intervalTime = 10000;
    const OnPrevClick = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }
    const OnNextClick = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    function auto(){
        slideInterval = setInterval(OnNextClick, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if(autoScroll){
            auto()
            return () => clearInterval(slideInterval)
        }
    }, [currentSlide])
  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow left text-white' onClick={OnPrevClick}/>
        <AiOutlineArrowRight className='arrow right text-white' onClick={OnNextClick}/>

    {ImageSliderdata.map((item, index) => (
        <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
            {index === currentSlide && (
                <div>
                    <img src={item.url} alt='/'/>
                    <div className='content'>
                        <div>
                            {item.content}
                        </div>
                    </div>
                </div>
            )}    
        </div>
        ))}
    </div>
  )
}

export default ImageSlider