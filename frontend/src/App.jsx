import './App.css'
import Navbar from './Components/Navbar'
import QAPlace from './Components/QAPlace'


function App() {

  return (

    <>
    <div className='w-[100vw] h-[100%] flex overflow-hidden'>
      <div className='w-[20vw] h-full hidden md:flex'>
        
      </div>
      <div className='w-[100vw] md:w-[80vw] h-full'>
        <Navbar/>
        <QAPlace/>
      </div>
    </div>

    </>
  )
}

export default App
