'use client';

import './Footer.css'
import {MailOutline, Phone,Room,Favorite,Whatshot} from '@mui/icons-material'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className='footerTop'>
                <div className='footerRight'>
                    <div className='rightTitle'>لینک ها</div>
                    <div className='rightItem' onClick={()=>document.getElementById("picScroll").scrollIntoView({behavior:'smooth'})}>تصاویر</div>
                    <div className='rightItem' onClick={()=>document.getElementById("textScroll").scrollIntoView({behavior:'smooth'})}>درباره کلینیک</div>
                    <div className='rightItem' onClick={()=>document.getElementById("questionScroll").scrollIntoView({behavior:'smooth'})}>سوالات‌ متداول</div>
                    <div className='rightItem' onClick={()=>document.getElementById("reviewsScroll").scrollIntoView({behavior:'smooth'})}>نظرات ‌بیماران</div>
                </div>
                <div className='footerCenter'>
                    <div className='centerTitle'>خدمات</div>
                    <div className='centerItem'>روکش، پل، ترمیم، ایمپلنت، درمان ریشه(عصب‌کشی)، کشیدن دندان، ونیر کامپوزیت، بلیچینگ (سفیدکردن دندان)، جراحی دندان عقل، درمان مجدد ریشه</div>
                </div>
                <div className='footerLeft'>
                    <div className='leftTitle'>ارتباط با ما</div>
                    <div className='contactItem'><Room style={{marginLeft:'10px'}}/>تهران، میدان فاطمی،ابتدای شهیدگمنام، پلاک ۳، طبقه دوم، واحد ۵</div>
                    <div className='contactItem'><Phone style={{marginLeft:'10px'}}/>تماس با ما: ۸۸۹۷۹۶۶۱-۰۲۱</div>
                    <div className='contactItem'><MailOutline style={{marginLeft:'10px'}}/>MhdyHssny@gmail.com</div>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='bottomTop'>© 2024 Alomatab. | Privacy Policy | Made with<Favorite style={{fontSize:'1.3rem',margin:'0 5px',verticalAlign: '-0.25em'}}/>and<Whatshot style={{fontSize:'1.3rem',margin:'0 5px',verticalAlign: '-0.25em'}} /> in Babol & Tehran </div>
                <div className='bottomBottom'>
                <svg height="19" fill="#999999" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                <svg height="19" fill="#999999" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                <svg height="19" fill="#999999" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                <svg height="19" fill="#999999" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                <svg height="19" fill="#999999" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Footer