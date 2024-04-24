'use client';

import './Header.css';
import { HiBars3 } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { useRef } from 'react';
import Image from 'next/image';

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsiveNav');
  };
  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerTopRight">
          <div
            className="rightItem"
            onClick={() =>
              document
                .getElementById('picScroll')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            تصاویر
          </div>
          <div
            className="rightItem border"
            onClick={() =>
              document
                .getElementById('textScroll')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            درباره کلینیک
          </div>
          <div
            className="rightItem border"
            onClick={() =>
              document
                .getElementById('questionScroll')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            سوالات متداول
          </div>
          <div
            className="rightItem border"
            onClick={() =>
              document
                .getElementById('reviewsScroll')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            نظرات بیماران
          </div>
        </div>
        <button className="navBtn" onClick={showNavbar}>
          <HiBars3 style={{ height: '25px' }} />
        </button>
        <div ref={navRef} className="headerTopRight2">
          <div
            className="rightItem2"
            onClick={() => {
              document.getElementById('picScroll').scrollIntoView();
              showNavbar();
            }}
          >
            تصاویر
          </div>
          <div
            className="rightItem2"
            onClick={() => {
              document.getElementById('textScroll').scrollIntoView();
              showNavbar();
            }}
          >
            درباره کلینیک
          </div>
          <div
            className="rightItem2"
            onClick={() => {
              document.getElementById('questionScroll').scrollIntoView();
              showNavbar();
            }}
          >
            سوالات متداول
          </div>
          <div
            className="rightItem2"
            onClick={() => {
              document.getElementById('reviewsScroll').scrollIntoView();
              showNavbar();
            }}
          >
            نظرات بیماران
          </div>
          <button className="navBtn nav-close-btn" onClick={showNavbar}>
            <LiaTimesSolid />
          </button>
        </div>
        <a href='https://alomatab.com' className="headerTopLeft">
          <Image
            src="/images/fastDentGreen.svg"
            width={110}
            height={80}
            alt=""
            className=""
          />
        </a>
      </div>
      <div className="headerBottom">
        <div className="headerBottomRight">
          <div className="rightStart">
            <Image
              src="/images/dentino.jpg"
              width={150}
              height={150}
              alt=""
              className='rounded-full '
            />
          </div>
          <div className="rightEnd">
            <span className="rightEndTop">کلینیک دنتینو</span>
            <span className="rightEndMiddle">مرکز تخصصی دندانپزشکی</span>
            <span className="rightEndBottom">تهران، میدان جهاد</span>
          </div>
        </div>
        <div className="headerBottomLeft">
          <div className="leftItem twoRight" id="shameOnY">
            <div className="leftItemTop">
              <svg viewBox="0 0 43 40">
                <path
                  d="M32.2 40l-10.7-7.8L10.8 40l-3.7-2.7 4.1-12.6L.5 17l1.4-4.4h13.2L19.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6z"
                  fill="#66c61c"
                ></path>
              </svg>
              <span className="topText">امتیاز کلی</span>
            </div>
            <div className="leftItemMiddle1">۴.۹</div>
            <div
              className="leftItemBottom"
              onClick={() =>
                document
                  .getElementById('reviewsScroll')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              دیدن نظرات
            </div>
          </div>
          <div className="leftItem twoRight">
            <div className="leftItemTop">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
                <path
                  d="M6.514.103C4.415 1.851 1.137 2.218.219 2.264c-.132 0-.219.138-.219.276.219 10.989 5.246 13.104 6.383 13.426a.71.71 0 00.437 0c1.136-.322 6.164-2.391 6.513-13.334 0-.138-.087-.276-.218-.276-.918-.092-4.197-.46-6.208-2.253-.131-.137-.306-.137-.393 0z"
                  fill="#66c61c"
                ></path>
                <path
                  d="M6.516 1.575C4.855 3 2.188 3.276 1.446 3.368c-.132 0-.22.092-.22.184.175 8.92 4.241 10.666 5.159 10.942.131.046.262.046.35 0 .918-.275 4.983-1.93 5.29-10.85 0-.138-.088-.23-.175-.23-.744-.046-3.41-.368-5.072-1.84-.043-.091-.174-.091-.262 0z"
                  fill="#66c61c"
                ></path>
                <path
                  d="M4 7.112h2.133V5h.923v2.112h2.126v.923H7.056v2.14h-.923v-2.14H4v-.923z"
                  fill="#fff"
                ></path>
              </svg>
              <span className="topText">خدمات قابل ارائه</span>
            </div>
            <div className="leftItemMiddle2">
              لمینت، ایمپلنت، روکش، درمان ریشه(عصب‌کشی) و ...
            </div>
            <div
              className="leftItemBottom"
              id="bottomSecond"
              onClick={() =>
                document
                  .getElementById('serviceScroll')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              دیدن همه خدمات
            </div>
          </div>
          <div className="leftItem theLastLeft">
            <div className="leftItemTop end">
              <svg
                className="svgShorter"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.46647 20.3467H16.9665C17.6581 20.3467 18.2498 19.9301 18.4998 19.3301L21.0165 13.4551C21.0915 13.2634 21.1331 13.0634 21.1331 12.8467V11.1801C21.1331 10.2634 20.3831 9.51339 19.4665 9.51339H14.2081L14.9998 5.70505L15.0248 5.43839C15.0248 5.09672 14.8831 4.78005 14.6581 4.55505L13.7748 3.68005L8.28314 9.17172C7.98314 9.47172 7.7998 9.88839 7.7998 10.3467V18.6801C7.7998 19.5967 8.5498 20.3467 9.46647 20.3467ZM9.46647 10.3467L13.0831 6.73005L11.9665 11.1801H19.4665V12.8467L16.9665 18.6801H9.46647V10.3467ZM2.7998 10.3467H6.13314V20.3467H2.7998V10.3467Z"
                  fill="#66c61c"
                ></path>
              </svg>
              <span className="topText">بسیار توصیه شده</span>
            </div>
            <div className="leftItemMiddle3">
              %۱۰۰ بیماران این کلینیک را توصیه کرده‌اند
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
