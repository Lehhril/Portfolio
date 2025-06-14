import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Layout from './Components/Layout'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App