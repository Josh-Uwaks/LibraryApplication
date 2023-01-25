import React from "react";
import {HiOutlineSearch} from 'react-icons/hi'
import styles from '../../module/navbar.module.css'
function Search(){
    return(
        <div className="px-6">
            <div className={`${styles.search}`}>
                    <input type='text' placeholder="search entire online store"/>
                    <button className="px-8 bg-[#880018] text-white"><HiOutlineSearch/></button>
            </div>
        </div>
    )
}
export default Search;