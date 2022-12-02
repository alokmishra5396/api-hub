import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { FirstProgra } from './components/Home/FirstProgra';
import { Footer } from './components/Footer/Footer';
import { TopNav } from './components/Header/TopNav';
import { Wetherapi } from './components/Home/Wetherapi';
  
const App = ()=>{

return(
      <div className="App">
       <TopNav/> 
      <Wetherapi/>
     <Footer/>
    </div>
  )
}
  
export default App;
