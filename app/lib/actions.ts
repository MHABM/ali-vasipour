'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth'

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