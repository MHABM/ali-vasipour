'use client';

import {FieldValues, useForm, FieldError} from 'react-hook-form'
import Image from "next/image"
import { booking, sendCode } from "../lib/actions";
import { useState } from 'react';
import clsx from 'clsx';

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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isError, setIsError] = useState(false)

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

        setIsSubmitting(true)
        const num = await sendCode(phone)
        setIsSubmitting(false)
        if (num) {
        reset()
        setStepTwo(true)
        setCode(num)
        setFirstName(firstName)
        setLastName(lastName)
        setPhoneNumber(phone)
        }else setIsError(true)
        
    }
    async function verifyCodeFunction(data: FieldValues){
        const {pass} = data;
        if(convertPersianToEnglish(pass.toString()) === code){
            setMessage('نوبت شما با موفقیت ثبت شد به زودی از کلینیک با شما تماس گرفته خواهد شد.');
            await booking(firstName,lastName,phoneNumber,day,hour)
        }else{
        setMessage('کد وارد شده اشتباه می‌باشد مجددا تلاش کنید!')}
    }
    function convertPersianToEnglish(input: string) {
        const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        for (let i = 0; i < 10; i++) {
            input = input.replace(persianNumbers[i], englishNumbers[i]);
        }
    
        return input;
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
                <div className="flex mt-7 mb-8">
                    <Image src="/images/dentino.jpg" width={80} height={80} alt="" className='rounded-full' />
                    <div className="flex flex-col justify-center gap-1 mr-7">
                        <span className="font-extrabold text-xl">کلینیک دنتینو</span>
                        <span className="text-sm">مرکز تخصصی دندانپزشکی</span>
                        <span className="text-sm">تهران، میدان جهاد</span>
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
                    <div>
                        <form onSubmit={handleSubmit(verifyCodeFunction)} className={clsx('mt-20 flex flex-col',{'hidden':message})}>
                            <label className="mb-4 font-bold text-gray-700">کد تایید به شماره موبایل شما ارسال شد لطفا آن را وارد نمائید.</label>
                            <input inputMode='numeric' type='text' {...register('pass')} required className=" border-gray-400 text-gray-900 rounded-md focus:border-lime-500 p-2.5 h-12 bg-transparent text-center"/>
                            <button className="text-white bg-lime-500 w-full rounded-md h-12 mt-5 mb-5 text-lg">تایید</button>
                        </form>
                        <div className='mt-14 flex flex-col justify-center items-center gap-4 font-bold text-gray-700 text-center'>
                        {message && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#66c61c" className="w-20 h-20"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>
}
                        {message}
                        </div>
                    </div>
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
                        <input {...register('phone',{pattern: { value: /^[\d۰۱۲۳۴۵۶۷۸۹]{10,11}$/, message: '' }})} required inputMode='numeric' className=" border-gray-400 text-gray-900 rounded-md focus:border-lime-500 p-2.5 h-12 bg-transparent"></input>
                        {(isError || errors.phone) && (<p className='text-sm mt-1 text-red-600'>شماره موبایل نادرست است.</p>)}
                    </div>
                    <button disabled={isSubmitting} className="text-white bg-lime-500 w-full rounded-md h-12 mt-10 mb-5 text-lg">
                        ادامه
                    </button>
                    </form>
                )}
            </div>
        </div>
    )
}