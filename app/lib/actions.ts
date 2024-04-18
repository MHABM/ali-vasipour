'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth'
import axios from 'axios'

export type sendCode = {num:null|string,error: null|string|unknown}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function addNewHour(formData:FormData){
  const date= formData.get('date')?.toString();
  const hour= formData.get('hour')?.toString();

  try{
    await sql`
      INSERT INTO hours (day, hour)
      VALUES (${date}, ${hour});
    `;
  }catch(error){
    return{message: 'Database Error: Failed to Delete Invoice.'}
  }
  
  revalidatePath('/dashboard/calendar');
}

export async function deleteHour(formData:FormData) {
  const date= formData.get('date')?.toString();
  const hour= formData.get('hour')?.toString();

  try{
    await sql`DELETE FROM hours WHERE hour = ${hour} AND day = ${date}`;
  }catch(error){
    return{message: 'Database Error: Failed to Delete hour.'}
  }
  
  revalidatePath('/dashboard/calendar');
}

export async function sendCode(phone: string){
    var num = (Math.floor(Math.random() * 90000) + 10000).toString()

    var data = JSON.stringify({
        "mobile": phone,
        "templateId": "100000",
        "parameters": [
            { name: 'CODE', value: num },
        ],
    });

    var config = {
        method: 'post',
        url: 'https://api.sms.ir/v1/send/verify',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
            'x-api-key': 'ho1YH3zQm9lLy9UihDHcxAZfcPHsKFRIS4NylaCyHuSe60QgChT1qaX1vQB7cUWn'
        },
        data: data
    };

    try {
        const response = await axios(config);
        return {num,error:null}
    } catch (error) {
        console.error('Error sending verification code:', error);
        return {num:null,error}
    }
}

export async function booking(firstName:string,lastName:string,phoneNumber:string,day:string,hour:string){
  const condition = 'approved'
  
  try{
    await sql`
      INSERT INTO appointments (firstname, lastname, phonenumber, day, hour, condition)
      VALUES (${firstName}, ${lastName},${phoneNumber}, ${day}, ${hour}, ${condition});
    `;
  }catch(error){
    return{message: 'Database Error: Failed to Delete Invoice.'}
  }

}

export async function changeApprove(formData:FormData){
  const id = formData.get('id')?.toString();

  try{
    await sql`
      UPDATE appointments
      SET condition = 
        CASE 
            WHEN condition = 'approved' THEN 'disapproved'
            WHEN condition = 'disapproved' THEN 'approved'
            ELSE condition
        END
      WHERE id = ${id};
    `;
  }catch(error){
    return{message: 'Database Error: Failed to Change Condition.'}
  }
  revalidatePath('/dashboard');
}