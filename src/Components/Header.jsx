import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { BsSearch } from "react-icons/bs";
import { HiMoon,HiSun } from "react-icons/hi";
import { ThemeContext } from '../Context/ThemeContext';
function Header() {
    
    const {theme,setTheme} = useContext(ThemeContext);

 
  return (
    <> 
        <div className='flex items-center p-3 '>
            <img src={logo} alt="Logo" width={60} height={60} />
            <h2 className='dark:text-white font-bold font-serif'>GameFolio</h2>
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full '>
                <BsSearch/>
                <input type="text" className='px-2 bg-transparent outline-none w-full' placeholder='Search Games'/>
                
            </div>
            <div>
                {theme=='light' ?<HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
                onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}/> : 
                <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}/>}
                
                
            </div>
        </div>
    
    </>
  )
}

export default Header
