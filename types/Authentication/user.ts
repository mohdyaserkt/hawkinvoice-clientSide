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
