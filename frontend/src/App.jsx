import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import QAPlace from './Components/QAPlace'
import Input from './Components/Input'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>

    <div className='h-[100vh] w-[100vw] overflow-hidden' style={{background: 'linear-gradient(90deg, #000016, #13035c, #030352)'}}>
      <Navbar/>
      <QAPlace/>
     
    </div>
    </>
  )
}

export default App
