import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Page1 from '../components/Page1'
import Page2 from '../components/Component2'
import Page3 from '../components/Component3'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1/>}></Route>
        <Route path="/page2" element={<Page2/>}></Route>
        <Route path="/page3" element={<Page3/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes;
