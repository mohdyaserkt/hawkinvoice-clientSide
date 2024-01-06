'use client';
import ProtectedRouterOrg from '@/components/ProtectRouter/protectRouterOrg';
import { logIn } from '@/redux/features/auth-slice';
import { useAppSelector } from '@/redux/store';
import { useSession } from 'next-auth/react';
import react, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const { data: session }: any = useSession();
const [first, setfirst] = useState(false)
  useEffect(() => {
    if (session?.user?.image?.user) {
      const { email, id, isGoogle, password, profile, status, verified } =
        session?.user?.image?.user;
      const AccessToken = session.user.image.AccessToken;
      dispatch(
        logIn({
          email,
          id,
          isGoogle,
          password,
          profile,
          status,
          verified,
          AccessToken,
        })
      );
    }
  }, [session]);
  const username = useAppSelector((state) =>
  state.authReducer.value.id
);

  return (
    <div>
      {username&&<ProtectedRouterOrg>{children}</ProtectedRouterOrg>}
    </div>
  );
};

export default Layout;
