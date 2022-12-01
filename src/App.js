import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { FirstProgra } from './components/Home/FirstProgra';
import { Footer } from './components/Footer/Footer';
import { TopNav } from './components/Header/TopNav';
  
const App = ()=>{

return(
      <div className="App">
       <TopNav/> 
     <FirstProgra/>
     <Footer/>
    </div>
  )
}
  
export default App;
