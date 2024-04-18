import { addNewHour,deleteHour } from '@/app/lib/actions';
import CalendarComponent from '@/app/ui/dashboard/calendar-component';
import { fetchTimes } from '@/app/lib/data';

export default async function Page({searchParams}:{searchParams:{date:string}}) {
    const hours = ['۸:۳۰صبح', '۹:۳۰صبح', '۱۰:۳۰صبح', '۱۱:۳۰صبح', '۱۲:۳۰ظهر', '۱:۳۰عصر', '۲:۳۰عصر', '۳:۳۰عصر', '۴:۳۰عصر', '۵:۳۰عصر', '۶:۳۰عصر', '۷:۳۰شب', '۸:۳۰شب', '۹:۳۰شب', '۱۰:۳۰شب'];
    const date = searchParams.date;
    const times = await fetchTimes(date)


    return (
        <div dir="rtl" className="flex">
            <div className="w-1/2 h-screen border-l-8 flex flex-col">
                <div className='mt-10 text-center font-black'>انتخاب ساعت ها</div>
                <div className='grid grid-cols-3 gap-5 p-16'>
                    {hours.map(item => (
                        <form action={addNewHour} >
                            <input type="hidden" name="date" value={date} />
                            <input type="hidden" name="hour" value={item} />
                            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded" >{item}</button>
                        </form >
                    ))}
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center gap-5 mt-14">
                <CalendarComponent />
                <div className='grid grid-cols-3 gap-3 mt-5'>
                    {times.map((item)=>(
                        <form action={deleteHour}>
                            <input type="hidden" name="date" value={date} />
                            <input type="hidden" name="hour" value={item} />
                            <button className='bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded text-sm'>{item}</button>
                        </form>
                    ))}
                </div>
            </div>
        </div>
    );
}