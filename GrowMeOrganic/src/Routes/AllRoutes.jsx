import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Component1 from '../components/Component1'
import PrivateRoute from './PrivateRoute'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Component1/>}></Route>
        <Route path="/dashboard" element={
        <PrivateRoute> <Dashboard/> </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes;
