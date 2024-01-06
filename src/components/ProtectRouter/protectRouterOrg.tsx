"use client"
import { useAppSelector } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { Children } from 'react'






interface UserProtectedRouterProps {
    children: React.ReactNode
}


const ProtectedRouterOrg:React.FC<UserProtectedRouterProps> = ({ children}): any => {

    const router=useRouter()
    const username = useAppSelector((state) =>
    state.authReducer.value.email
  );
    
    console.log(username,"prottectd rout user");
    return username.length>1 ? children:router.push('/login')
}
export default ProtectedRouterOrg
