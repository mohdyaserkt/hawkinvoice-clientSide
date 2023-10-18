interface IUserCredentials {
  email: string;
  password: string;
}

interface IUser {
  id?: string;
  email: string;
  password: string;
  isGoogle?: boolean;
  status?: boolean;
  verified?: boolean;
  profile?: string;
}

interface IhandleSignup {
  email: string;
  password: string;
  setError: (field: string, errors: string[]) => void;
}

interface IhandleSignup1 {
  email: string;
  password: string;
 
}
interface IThemeProviderProps {
  children: React.ReactNode;
}


interface IhandleSignup1 {
  email: string;
  password: string;
  
}

interface ICompanyData {
  NoOfEmployees: string;
  annualRevenue: string;
  businessName: string;
  createdDate: string;
  email: string;
  id: string;
  phoneNumber: number;
  profile: string;
  typeOfBusiness: string;
  userId: string;
}
