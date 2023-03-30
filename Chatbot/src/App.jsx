import { useState } from 'react'
import './App.css'

import Aboutus from '../components/Aboutus'
import Faq from '../components/Faq'
import Mainfield from '../components/Mainfield'


function App() {
    return(
        <div>
            <Aboutus />
            <Faq />
            <Mainfield />
        </div>
    )
  
}

export default App
