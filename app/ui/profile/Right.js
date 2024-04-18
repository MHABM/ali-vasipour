'use client';

import { useRef, useState } from 'react';
import './Right.css';
import Image from 'next/image';
import Link from 'next/link';
const jalaali = require('jalaali-js');

const Right = ({ times }) => {
  function persianDate(stringDate) {
    if(stringDate){const [year, month, day] = stringDate.split('-');
    const jsDate = new Date(year, month - 1, day);
    const firstFa = new Intl.DateTimeFormat('fa-IR', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(jsDate);
    const weekDay = firstFa.split(' ')[3];
    const monthDay = firstFa.split(' ')[2].split(',')[0];
    const monthName = firstFa.split(' ')[1];
    const persianDate = weekDay + ' ' + monthDay + ' ' + monthName;
    return persianDate;}
    return ''
  }

  const days = [...new Set(times.rows.map((item) => item.day))];

  const sortedDates = days.sort((date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return d1 - d2;
  });

  const hours = [
    '۸:۳۰صبح',
    '۹:۳۰صبح',
    '۱۰:۳۰صبح',
    '۱۱:۳۰صبح',
    '۱۲:۳۰ظهر',
    '۱:۳۰عصر',
    '۲:۳۰عصر',
    '۳:۳۰عصر',
    '۴:۳۰عصر',
    '۵:۳۰عصر',
    '۶:۳۰عصر',
    '۷:۳۰شب',
    '۸:۳۰شب',
    '۹:۳۰شب',
    '۱۰:۳۰شب',
  ];
  function sortHours(N) {
    const aSort = times.rows.map((item) => {
      if (item.day === sortedDates[N]) return item.hour;
    });
    const sort = [];
    for (let i = 0; i < hours.length; i++) {
      for (let x = 0; x < aSort.length; x++) {
        if (hours[i] === aSort[x]) {
          sort.push(hours[i]);
        }
      }
    }
    return sort;
  }

  const day0 = {
    day: persianDate(sortedDates[0]),
    hour: sortHours(0),
  };
  const day1 = {
    day: persianDate(sortedDates[1]),
    hour: sortHours(1),
  };
  const day2 = {
    day: persianDate(sortedDates[2]),
    hour: sortHours(2),
  };
  const day3 = {
    day: persianDate(sortedDates[3]),
    hour: sortHours(3),
  };
  const day4 = {
    day: persianDate(sortedDates[4]),
    hour: sortHours(4),
  };

  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const [show, setShow] = useState(false);
  const showButton = () => {
    setShow(true);
    buttonRef1.current.classList.add('buttonOff');
    buttonRef2.current.classList.add('buttonOn');
  };

  return (
    <div className="right">
      <div className="appointment" id="appointmentScroll">
        <h5 className="appointmentTop" id="appointmentButtonScroll">
          دریافت نوبت
        </h5>
        <div className="p-4">
          <div className="mb-5 text-sm font-bold text-slate-500">
            * لطفا روز و زمان دلخواه خود را انتخاب نمائید.
          </div>
          <div className="mb-5">
            <div className="mb-3 text-lg">{day0.day}</div>
            <div>
              {day0.hour.map((item,index) => {
                return (
                  <Link key={index} href={`/booking?day=${sortedDates[0]}&hour=${item}`}>
                    <button className="mb-2 ml-2 h-8 w-1/4 bg-lime-500 text-sm font-semibold text-white active:bg-blue-950 " >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-3 text-lg">{day1.day}</div>
            <div>
              {day1.hour.map((item,index) => {
                return (
                  <Link key={index} href={`/booking?day=${sortedDates[1]}&hour=${item}`}>
                    <button className="mb-2 ml-2 h-8 w-1/4 bg-lime-500 text-sm font-semibold text-white active:bg-blue-950 " >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-3 text-lg">{day2.day}</div>
            <div>
                {day2.hour.map((item,index) => {
                return (
                  <Link key={index} href={`/booking?day=${sortedDates[2]}&hour=${item}`}>
                    <button className="mb-2 ml-2 h-8 w-1/4 bg-lime-500 text-sm font-semibold text-white active:bg-blue-950 " >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-3 text-lg">{day3.day}</div>
            <div>
            {day3.hour.map((item,index) => {
                return (
                  <Link key={index} href={`/booking?day=${sortedDates[3]}&hour=${item}`}>
                    <button className="mb-2 ml-2 h-8 w-1/4 bg-lime-500 text-sm font-semibold text-white active:bg-blue-950 " >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-3 text-lg">{day4.day}</div>
            <div>
            {day4.hour.map((item,index) => {
                return (
                  <Link key={index} href={`/booking?day=${sortedDates[4]}&hour=${item}`}>
                    <button className="mb-2 ml-2 h-8 w-1/4 bg-lime-500 text-sm font-semibold text-white active:bg-blue-950 " >
                      {item}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="location">
        <h5 className="locationTop">آدرس مطب</h5>
        <Image src={'/images/map.jpg'} width={400} height={200} alt="" />
        <div className="locationText">
          تهران، خیابان ولیعصر، قبل از تقاطع مطهری، خیابان حسینی راد، ساختمان
          رادکام، طبقه دوم
        </div>
        <div className="locationTime">
          <div>شنبه: ۱۰صبح الی ۶عصر</div>
          <div>یکشنبه: ۱۰صبح الی ۶عصر</div>
          <div>دوشنبه: ۱۰صبح الی ۶عصر</div>
          <div>سه‌شنبه: ۱۰صبح الی ۶عصر</div>
          <div>چهارشنبه: ۹صبح الی ۲عصر</div>
        </div>
      </div>
      <div className="service" id="serviceScroll">
        <div className="serviceTop">خدمات قابل ارائه</div>
        <div className="serviceContent">
          روکش، پل، ترمیم، ایمپلنت، درمان ریشه(عصب‌کشی)، کشیدن دندان، ونیر
          کامپوزیت، بلیچینگ(سفیدکردن دندان)، جراحی دندان عقل، درمان مجدد ریشه
        </div>
      </div>
    </div>
  );
};

export default Right;
