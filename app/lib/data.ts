import { sql } from '@vercel/postgres';
import {User} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchTimes(date:string) {
  noStore()

  try {
    const {rows} = await sql`
      SELECT
        hours.hour
      FROM hours
      WHERE hours.day = ${date};
    `;
    const newRows = rows.map((item)=>item.hour.toString())
    return newRows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch times.');
  }
}

export async function fetchTimesForPatient() {
  noStore()

  try {
    const {rows} = await sql<{day:string,hour:string}>`
    SELECT *
    FROM hours
    WHERE TO_DATE(day, 'YYYY-MM-DD') IN (
      SELECT DISTINCT TO_DATE(day, 'YYYY-MM-DD')
      FROM hours
      WHERE TO_DATE(day, 'YYYY-MM-DD') > CURRENT_DATE
      ORDER BY TO_DATE(day, 'YYYY-MM-DD')
      LIMIT 5
    );`

    return{
      rows
    };

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch times.');
  }
}