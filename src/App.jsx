 import React from 'react'
import GeneralInfo from './Component/GeneralInfo'
import Education from './Component/Education'
import PracticalExperience from './Component/PracticalExperience'
import './Global.css'

 const App = () => {
   return (
     <div className='App'>
        <h1>CV Application</h1>
        <GeneralInfo/>
        <Education/>
        <PracticalExperience/>
     </div>
   )
 }
 export default App