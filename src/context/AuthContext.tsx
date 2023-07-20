import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {login} from '../utils/api';

const AuthContext = createContext({});

interface IAuth {
  id: number;
  username: string;
  name: string;
  token: string;
}

export function AuthContextProvider({children}: {children: any}) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<IAuth | null>(null);

  useEffect(() => {
    setMounted(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (mounted) {
    }
  }, [auth, mounted]);

  function loginHandler(username: string, password: string) {
    return new Promise((resolve, reject) => {
      login(username, password)
        .then((response: any) => {
          setAuth(response);
          resolve(response);
        })
        .catch((error: any) => {
          console.error(error);
          reject(error);
        });
    });
  }

  function logoutHandler() {
    setAuth(null);
  }

  const context = useMemo(
    () => ({
      loading,
      auth,
      token: auth && 'token' in auth ? auth.token : null,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [auth, loading],
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};
