import React from 'react'
import {TfiMenuAlt} from 'react-icons/tfi'
function Submenu(){
    return(
        <div>
            <div className='bg-[#880018] text-white flex items-center justify-between p-[15px]'>
                <h1>Book Categories</h1>
                <span><TfiMenuAlt/></span>
            </div>
        </div>
    )
}
export default Submenu