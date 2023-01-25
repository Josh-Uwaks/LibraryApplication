import React from "react";
import styles from '../../module/navbar.module.css'
import {CiLock} from 'react-icons/ci'
import {HiOutlinePencil} from 'react-icons/hi'
import {BsHeart} from 'react-icons/bs'
import {CiShoppingCart} from 'react-icons/ci'
import logo from '../../assets/book.jpg'
import Search from "./search"
import Cart from "./cart"
import Submenu from "./submenu"
import { NavList } from "../../assets/data"
import { NavLink } from "react-router-dom";

function Navbar(){
    const active = 'bg-[#880018] text-white'
    const inactive = ''
    return(
        <div>
            <div className="text-[14px] px-16">
                <div className=" flex justify-between py-3">
                    <h1>Welcome to the UwaksBooks Limited... Nigeria's favourite bookshop</h1>
                    <ul className={`flex ${styles.navbarlist}`}>
                        <li><span><CiLock/></span>Login</li>
                        <li><span><HiOutlinePencil/></span>Register</li>
                        <li><span><BsHeart/></span>My Wishlist(1)</li>
                        <li><span><CiShoppingCart/></span>Checkout</li>
                    </ul>
                </div>
            </div> 
            <div className="bg-white px-16">
                <div className={`${styles.nav} py-3`}>
                    <div className="flex items-center">
                        <img src={logo} alt='logo' className="h-[100px] w-[100px]"/>
                        <h1 className="px-2 text-[22px] tracking-wider font-bold leading-6">The  UwaksBooks Library</h1>
                    </div>
                    <div>
                        <Search/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                </div>
                <div className={`bg-white ${styles.submenu}`}>
                    <div>
                        <Submenu/>
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