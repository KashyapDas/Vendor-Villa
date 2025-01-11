import React from 'react'
import Routing from './routes/Routing'
import MNavbar from './Components/MNavbar'
import Navbar from './Pages/Navbar'

const App = () => {

  return (
    <div className='w-screen h-screen bg-slate-100 overflow-hidden relative'>
      <Navbar />
      <Routing />
      <MNavbar />
    </div>
  )
}

export default App
