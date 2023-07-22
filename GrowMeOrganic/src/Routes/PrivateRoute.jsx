import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';



const PrivateRoute = ({children}) => {
const {auth} = useContext(AuthContext);

   if(!auth){
    alert("Please Login First")
     return <Navigate to="/"/>
    }
    return children;
}



export default PrivateRoute;
