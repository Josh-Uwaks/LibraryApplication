import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaChevronDown} from 'react-icons/fa'
function Cart(){
    return(
        <div className="flex justify-end items-center gap-x-2">
            <span className="text-[#DC2626]"><AiOutlineShoppingCart size={25}/></span>
            <div className="flex items-center gap-x-3">
                <span>MY CART 0 </span>
                <span><FaChevronDown/></span>
            </div>
        </div>
    )
}
export default Cart