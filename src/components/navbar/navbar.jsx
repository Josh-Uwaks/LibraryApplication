import React, { useState } from "react";
import styles from '../../module/navbar.module.css'
import {CiLock} from 'react-icons/ci'
import {HiOutlinePencil} from 'react-icons/hi'
import {BsHeart} from 'react-icons/bs'
import {CiShoppingCart} from 'react-icons/ci'
import logo from '../../assets/book.jpg'
import Search from "./search"
import Cart from "./cart"
import Submenu from "./submenu"
import { BookCategory, NavList } from "../../assets/data"
import { NavLink } from "react-router-dom"

function Navbar(){
    const [openNav, SetOpenNav] = useState(true)
    function HandleNav(){
        SetOpenNav(prev => !prev)
    }
    console.log(openNav)
    const active = 'bg-[#FFBA00] font-bold'
    const inactive = 'font-bold'
    return(
        <div>
            <div className="text-[13px] px-24">
                <div className=" flex justify-between py-3">
                    <h1>Welcome to The Booksellers Limited...Nigeria’s favourite bookshop.</h1>
                    <ul className={`flex ${styles.navbarlist}`}>
                        <li><span><CiLock/></span>Login</li>
                        <li><span><HiOutlinePencil/></span>Register</li>
                        <li><span><BsHeart/></span>My Wishlist(1)</li>
                        <li><span><CiShoppingCart/></span>Checkout</li>
                    </ul>
                </div>
            </div> 
            <div className="bg-white px-24 text-[13px]">
                <div className={`${styles.nav} py-3`}>
                    <div className="flex items-center">
                        <img src={logo} alt='logo' className="h-[100px] w-[100px]"/>
                        <h1 className="px-2 text-[22px] tracking-wider font-bold leading-6">The BookSellers Limited</h1>
                    </div>
                    <div>
                        <Search/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                </div>
                <div className={`bg-white ${styles.submenu}`}>
                    <div className="cursor-pointer relative" onClick={HandleNav}>
                        <Submenu/>
                        {openNav && <div className="absolute top-13 right-0 left-0">
                            {BookCategory.map((item) => (
                                <ul key={item.id} className='bg-[#252525]'>
                                    <li className="py-1 px-4 text-white uppercase">{item.linkName}</li>
                                </ul>
                            ))}
                        </div>}
                    </div>
                    <ul className="flex justify-end bg-[#f5f5f5]">
                        {NavList.map((item) => (
                        <NavLink to={item.link} className={({isActive}) => (isActive ? active:inactive)}>
                            <li className="py-[15px] px-[20px]">
                                    {item.item}
                            </li>
                        </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar