'use client';

import {FieldValues, useForm} from 'react-hook-form'
import Image from "next/image"
import { booking, sendCode } from "../lib/actions";
import { useState } from 'react';

export default function Page({searchParams}:{searchParams:{day:string,hour:string}}){
    const day = persianDate(searchParams.day)
    const hour = searchParams.hour
    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const [stepTwo, setStepTwo] = useState(false)
    const [code, setCode] = useState('')
    const [message,setMessage] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')

    function persianDate(stringDate: string): string {
        const [year, month, day] = stringDate.split('-');
        const jsDate = new Date(Number(year), Number(month) - 1, Number(day));
        const firstFa = new Intl.DateTimeFormat('fa-IR', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(jsDate);
        const weekDay = firstFa.split(' ')[3];
        const monthDay = firstFa.split(' ')[2].split(',')[0];
        const monthName = firstFa.split(' ')[1];
        const persianDate = `${weekDay} ${monthDay} ${monthName}`;
        return persianDate;
    }
    async function sendCodeFunction(data: FieldValues){
        const {firstName,lastName,phone} = data
        const {num} = await sendCode(phone)
        if (!num) return
        reset()
        setStepTwo(true)
        setCode(num)
        setFirstName(firstName)
        setLastName(lastName)
        setPhoneNumber(phone)

    }
    async function verifyCodeFunction(data: FieldValues){
        const {pass} = data;
        if(pass.toString() === code){
            setMessage('نوبت شما با موفقیت ثبت شد به زودی از طرف مطب دندانپزشک با شما تماس گرفته خواهد شد.');
            await booking(firstName,lastName,phoneNumber,day,hour)
        }else{
        setMessage('کد وارد شده اشتباه می‌باشد مجددا تلاش کنید.')}
    }

    return(
        <div dir="rtl" className="min-h-screen bg-mygreen">
            <div className="px-6 py-4 flex justify-between h-20">
                <Image src="/images/fastDentGreen.svg" width={85} height={80} alt="" className="md:w-28 mr-2" />
                <div className="flex items-center">
                    <svg role="img" aria-hidden="true" height="16" viewBox="0 0 14 20" fill="none" data-test="header-secure-logo"><title>secure icon</title><path d="M11.667 7.083h-.834V5.417c0-2.3-1.866-4.167-4.166-4.167A4.168 4.168 0 0 0 2.5 5.417v1.666h-.833C.75 7.083 0 7.833 0 8.75v8.333C0 18 .75 18.75 1.667 18.75h10c.916 0 1.666-.75 1.666-1.667V8.75c0-.917-.75-1.667-1.666-1.667Zm-5 7.5c-.917 0-1.667-.75-1.667-1.666 0-.917.75-1.667 1.667-1.667.916 0 1.666.75 1.666 1.667 0 .916-.75 1.666-1.666 1.666Zm2.583-7.5H4.083V5.417a2.586 2.586 0 0 1 2.584-2.584A2.586 2.586 0 0 1 9.25 5.417v1.666Z" fill="#333333ad"/></svg>
                    <span className="text-gray-500 text-sm font-bold mr-2">امن و رایگان</span>
                </div>
            </div>
            <div className="px-5 md:px-128">
                <div className="flex mt-7 mb-10">
                    <Image src="/images/ali-vasipour.png" width={80} height={80} alt="" />
                    <div className="flex flex-col justify-center gap-1 mr-7">
                        <span className="font-extrabold text-xl">دکتر علی وصی‌پور</span>
                        <span className="text-sm">جراح دندانپزشک</span>
                        <span className="text-sm">تهران، یوسف‌آباد</span>
                    </div>
                </div>
                <div>
                    <span className="text-xl">تایید نهایی نوبت شما</span>
                    <p className="mt-2">
                        <span>لطفا برای تایید نوبت خود در ساعت</span>
                        <span className="text-lime-600 font-bold">{` ${hour} ${day} `}</span>
                        <span>نام و نام‌خانوادگی و شماره تماس خود را وارد نمائید.</span>
                    </p>
                </div>
                {stepTwo ? (
                    <form onSubmit={handleSubmit(verifyCodeFunction)} className='mt-20 flex flex-col'>
                        <label className="mb-4 font-bold text-gray-700">کد تایید به شماره موبایل شما ارسال شد لطفا آن را وارد نمائید.</label>
                        <input type='text' {...register('pass')} required className=" border-gray-400 text-gray-900 rounded-md focus:border-lime-500 p-2.5 h-12 bg-transparent text-center"/>
                        <button className="text-white bg-lime-500 w-full rounded-md h-12 mt-5 mb-5 text-lg">تایید</button>
                        {message}
                    </form>
                ):(
                    <form onSubmit={handleSubmit(sendCodeFunction)} className="mt-20 md:mt-6">
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="flex flex-col">
                            <label className="mb-2 font-bold text-gray-700">نــام</label>
                            <input {...register('firstName')} type="text" required className=" border-gray-400 text-gray-900 rounded-md focus:border-lime-500 p-2.5 h-12 bg-transparent"></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-bold text-gray-700">نام‌خانوادگی</label>
                            <input {...register('lastName')} type="text" required className=" border-gray-400 text-gray-900 rounded-md focus:border-lime-500 p-2.5 h-12 bg-transparent"></input>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 font-bold text-gray-700">شماره موبایل</label>
                        <input {...register('phone')} required type="text" className=" border-gray-400 text-gray-900 rounded-md focus:border-lime-500 p-2.5 h-12 bg-transparent"></input>
                    </div>
                    <button className="text-white bg-lime-500 w-full rounded-md h-12 mt-10 mb-5 text-lg">
                        ادامه
                    </button>
                    </form>
                )}
            </div>
        </div>
    )
}