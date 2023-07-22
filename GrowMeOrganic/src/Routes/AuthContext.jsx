import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const [auth,setAuth] = useState(false);

    const Login = () =>{
        setAuth(true);
    }
  return (
    <div>
      <AuthContext.Provider value={{auth,Login}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider;
