"use client"
import { useAppSelector } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { Children } from 'react'






interface UserProtectedRouterProps {
    children: React.ReactNode
}


const ProtectedRouter:React.FC<UserProtectedRouterProps> = ({ children}): any => {

    const router=useRouter()
    const username = useAppSelector((state) =>
    state.authReducer.value.email.split("@")
  );
    
    console.log(username,"prottectd rout user");
    return username ? children:router.push('/login')
}
export default ProtectedRouter
