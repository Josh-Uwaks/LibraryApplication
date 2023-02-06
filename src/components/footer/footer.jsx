import React from 'react'
import { FooterAddress } from '../../assets/data'
import '../../module/general.css'
import { AddressIcon } from '../../assets/data'
import { AddressInfo } from '../../assets/data'
import { CardLogo } from '../../assets/data'

const Footer = () => {
  return (
    <div className='bg-[#252525] px-24 pb-10 text-[14px] text-[#ABABAB]'>
      <div className='footer border-b-[.5px] border-[#363636]'>
          <div className='border-r-[.5px] border-[#363636] py-10 pr-4'>
            <div>
              <h1 className='uppercase tracking-wider text-[16px]'>The Booksellers limited</h1>
              <div className='py-6'>
              {FooterAddress.map((item) => (
                  <div className='flex items-center py-2 gap-x-3' key={item.id}>
                    <span className='p-3 rounded-full border-[#ababab] border-[0.5px] text-white'>{item.icon}</span>
                    <p>{item.address}</p>
                  </div>
              ))}
              </div>
            </div>
            <div className='py-3'>
              <h1 className='uppercase tracking-wider text-[#ababab]'>Follow us on</h1>
              <ul className='flex'>
              {AddressIcon.map((item) => (
                  <li className='p-3 bg-white rounded-full text-[#252525] mx-1 my-3 hover:bg-[#880018] hover:text-white cursor-pointer'>{item.icon}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className='flex-1 pt-10'>
            <div className='flex justify-around border-b-[.5px] border-[#363636]'>
              {AddressInfo.map((item) => (
                <div key={item.id}>
                  <h1 className='uppercase tracking-wider text-[16px]'>{item.title}</h1>
                  <ul className='py-6 text-white'>
                  {Object.values(item.links).map((list) => (
                      <li key={list.id} className='leading-7'>{list.link}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className='p-12 flex'>
              <div className='flex-1'>
                <div className='bg-[#1A1A1A] flex items-center p-1 pl-2'>
                  <h1 className='uppercase text-[14px] text-white font-bold tracking-widest'>Newsletter:</h1>
                  <input type='text' placeholder='Email Address...' className='outline-none mx-2 w-[100%] bg-[#1A1A1A]'/>
                  <button className='px-4 py-2 font-bold bg-[#aa2529] hover:bg-[#666666] text-white tracking-wider uppercase'>Subscribe</button>
                </div>
              </div>
              <div className='flex items-center px-2'>
              {CardLogo.map((item) => (
                  <div key={item.id} className='mx-1'>
                    <img src={item.logo} alt='/' className='h-[30px] w-[45px] rounded-[5px]'/>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer