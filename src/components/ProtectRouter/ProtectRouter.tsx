'use client';
import { useAppSelector } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { Children } from 'react';

interface UserProtectedRouterProps {
  children: React.ReactNode;
}

const ProtectedRouter: React.FC<UserProtectedRouterProps> = ({
  children,
}): any => {
  let data: string[] = [];

  const router = useRouter();

  data[0] = useAppSelector((state) => state.authReducer.value.email) as string;
  data[1] = useAppSelector((state) => state.orgReducer.value.id) as string;

  console.log(data, 'prottectd rout user');

  if (!data[0]) {
    return router.push('/login');
  } else if (data[0] && !data[1]) {
    return router.push('/manageorganization');
  } else if (data[0] && data[1]) {
    return children;
  }
};
export default ProtectedRouter;
