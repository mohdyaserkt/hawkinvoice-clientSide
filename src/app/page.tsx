import { useAppSelector } from '@/redux/store';
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';

export default function Home() {

  let data= useAppSelector((state)=> state.authReducer.value)
  console.log(data,"my data   knkjk");
  
  return (
    <>
      <div className='w-screen h-screen '>
        <nav></nav>
        <div className='flex h-full justify-center items-center text-secondary text-6xl '>
        HOME PAGE

        </div>
      </div>
    </>
  )
}
