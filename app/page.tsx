import Nobat from '@/app/ui/profile/Nobat'
import Header from '@/app/ui/profile/Header'
import Main from '@/app/ui/profile/Main'
import Footer from '@/app/ui/profile/Footer'
import { fetchTimesForPatient } from './lib/data'

export default async function Page(){
  const times = await fetchTimesForPatient()

  return(
    <div dir='rtl' className='select-none'>
      <Nobat />
      <Header />
      <Main times={times}/>
      <Footer />
    </div>
  )
}