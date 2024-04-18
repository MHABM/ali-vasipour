'use client';

import { useEffect, useState } from 'react'
import './Main.css'
import RAndP from './RAndP'
import Reviews from './Reviews'
import Right from './Right'
import Text from './Text'

const Main = ({times})=>{
    const [width,setWidth] =useState(true);
    useEffect(() => {
        const checkIsMobile = () => {
          setWidth(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
    
        checkIsMobile();
    
        window.addEventListener("resize", checkIsMobile);
        return () => {
          window.removeEventListener("resize", checkIsMobile);
        };
      }, []);
    return(
        <div className='mainContainer'>
            {width ? <div className='mainMobile'>
                <RAndP />
                <Right times={times}/>
                <Text />
                <Reviews />
            </div> :<div className='main'>
                <div className='mainRight'>
                    <Right times={times}/>
                </div>
                <div className='mainLeft'>
                    <RAndP />
                    <Text />
                    <Reviews />
                </div>
            </div>}
        </div>
    )
}

export default Main

            
            