'use client';

import { useEffect, useState } from "react";
import { Calendar,DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from 'react-date-object/locales/persian_fa';
import "react-multi-date-picker/styles/colors/green.css"
import { usePathname, useRouter } from "next/navigation";

export default function CalendarComponent() {
    let [date, setDate] = useState<any>(new Date());
    const { replace } = useRouter();
    const pathname = usePathname();

    useEffect(()=>{
        if (date instanceof DateObject){
            date = date.toDate();
        } else if(typeof date === 'string'){
            date = new Date(date)
        }
        date = date.toISOString().split('T')[0];
        replace(`${pathname}?date=${date.toString()}`);
    })

    return (
        <div className='scale-150 md:scale-110'>
            <Calendar calendar={persian} locale={persian_fa} value={date} onChange={setDate} className="green"/>
        </div>
    );
}