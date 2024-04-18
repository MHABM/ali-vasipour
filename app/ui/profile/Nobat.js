'use client';

import { useEffect, useRef } from 'react'
import './Nobat.css'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const Nobat = ()=>{
    const buttonRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
    
          if (window.scrollY >= document.getElementById("appointmentButtonScroll")?.offsetTop) {
            buttonRef.current?.classList.add('show');
          } else {
            buttonRef.current?.classList.remove('show');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <div className='nobat'>
            <button ref={buttonRef} onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}><AiOutlineQuestionCircle style={{fontSize:'22px',marginLeft:'5px'}} />دریافت نوبت</button>
            <button className='nobatMobile' onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}>دریافـت نـوبـت</button>
        </div>
    )
}

export default Nobat