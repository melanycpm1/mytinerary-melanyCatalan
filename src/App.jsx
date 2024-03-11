import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Header from './components/header'
import MainHome from './components/main-home'
import Footer from './components/footer'
import Cities from './components/cities'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/cities' element={<Cities/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

      <Header></Header>
      <MainHome></MainHome>
      <Footer></Footer>
    </>
  )
}

export default App
