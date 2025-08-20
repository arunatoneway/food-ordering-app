import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarland from './components/Navbar1';
import Catefiltr from './components/Fdfilltercomp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarland/>
      <Catefiltr/>
      
    </>
  )
}

export default App
