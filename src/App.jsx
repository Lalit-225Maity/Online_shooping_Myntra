import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Men from './Components/Men'
import Women from './Components/Women'
import Beauty from './Components/Beauty'
import Home from './Components/Home'
import Kids from './Components/Kids'
import Data from './Datafile/Data'
import Wish from './Datafile/Wish'
import Allform from './Myform/Allform'
import Signup from './Components/Signup'
 

const App = () => {
  const [view, setview] = useState();
  
  const[change,setchange]=useState(false);

  return (
    <div className="myapp">
      <Navbar view={view} change={change}/>
      <Routes>

        <Route path='/' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/home' element={<Home />} />
        <Route path='/data' element={<Data view={view} />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/form' element={<Allform />} />
        <Route path='/signup' element={<Signup setview={setview} setchange={setchange} />} />

      </Routes>
    </div>
  )
}

export default App
