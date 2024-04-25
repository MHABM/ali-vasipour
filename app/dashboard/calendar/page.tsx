import { addNewHour,deleteHour } from '@/app/lib/actions';
import CalendarComponent from '@/app/ui/dashboard/calendar-component';
import { fetchTimes } from '@/app/lib/data';

export default async function Page({searchParams}:{searchParams:{date:string}}) {
    const hours = ['۸:۳۰صبح', '۹:۳۰صبح', '۱۰:۳۰صبح', '۱۱:۳۰صبح', '۱۲:۳۰ظهر', '۱:۳۰عصر', '۲:۳۰عصر', '۳:۳۰عصر', '۴:۳۰عصر', '۵:۳۰عصر', '۶:۳۰عصر', '۷:۳۰شب', '۸:۳۰شب', '۹:۳۰شب', '۱۰:۳۰شب'];
    const date = searchParams.date;
    const times = await fetchTimes(date)

    async function sortTimes(){
        const sort = [];
        for (let i = 0; i < hours.length; i++) {
          for (let x = 0; x < times.length; x++) {
            if (hours[i] === times[x]) {
              sort.push(hours[i]);
            }
          }
        }
        return sort;
    }
    const sortedTimes = await sortTimes()

    return (
        <div dir="rtl" className="flex flex-col-reverse md:flex-row">
            <div className="flex flex-col border-t-4 md:border-l-8 md:w-1/2 md:h-screen">
                <div className='hidden text-center font-black md:mt-10 md:block'>انتخاب ساعت ها</div>
                <div className='p-2 px-3 grid grid-cols-3 gap-3 mb-5 md:gap-5 md:p-16'>
                    {hours.map((item)=> (
                        <form key={Math.random()} action={addNewHour} >
                            <input type="hidden" name="date" value={date} />
                            <input type="hidden" name="hour" value={item} />
                            <button className="bg-lime-500 hover:bg-lime-700 text-white py-1 px-4 rounded md:py-2 md:font-bold" >{item}</button>
                        </form >
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 mt-14 md:w-1/2">
                <CalendarComponent />
                <div className='grid grid-cols-3 gap-3 mb-5 mt-12 md:mt-5'>
                    {sortedTimes.map((item)=>(
                        <form key={Math.random()} action={deleteHour}>
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