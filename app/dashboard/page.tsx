import { fetchAppointments } from "../lib/data"
import { PencilIcon} from '@heroicons/react/24/outline';
import {changeApprove} from '../lib/actions'
import clsx from "clsx";

export default async function Page(){
    const appointments = await fetchAppointments()

    return(
        <div className="relative overflow-x-auto sm:rounded-lg p-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            نام
                        </th>
                        <th scope="col" className="px-6 py-3">
                            نام‌خانواداگی
                        </th>
                        <th scope="col" className="px-6 py-3">
                            شماره موبایل
                        </th>
                        <th scope="col" className="px-6 py-3">
                            روز
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ساعت
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments?.map((item)=>(
                        <tr key={item.id} className={clsx(" border-b ",{'bg-lime-200': item.condition==='approved','bg-red-200':item.condition==='disapproved'})}>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.firstname}
                            </th>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.lastname}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.phonenumber}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.day}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.hour}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <form action={changeApprove}>
                                    <input type="hidden" name="id" value={item.id} />
                                    <button type="submit" className="rounded-full border p-2 hover:bg-gray-100 bg-white w-10">
                                        <PencilIcon className="w-5"/>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}