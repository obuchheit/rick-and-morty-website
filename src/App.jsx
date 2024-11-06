import { Outlet } from 'react-router-dom'
import MyNavbar from './components/NavBar'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    console.log(favorites)
  }, [favorites])

  return (
    <>
      <MyNavbar/>
      <Outlet context={{favorites, setFavorites}}/>
    </>
  )
}

export default App
