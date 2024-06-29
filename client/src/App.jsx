import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Outlet } from 'react-router-dom';
import style from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={style.body_container}>
        <Outlet />
      </div>
    </>
  )
}

export default App
