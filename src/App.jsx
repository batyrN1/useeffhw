import React , {useEffect,useState}  from 'react';
import {Route,Routes,Router} from 'react-router-dom';
import './App.css';
import Card from './components/Cards/Card';
import Header from './components/Header/Header';
import Tovars from './components/Tovars/Tovars';


// import img1 from './assets/dress.png'
// import img2 from './assets/kub.png'
// import img3 from './assets/leon.png'



const App = () => {

  return(
    <>
    <Header/>
    <Routes>
        <Route 
          path='/tovar'
            element={<Tovars/>}/>
        <Route path='/' element={<Card/>}/>
    </Routes>
    </>
  )
}



export default App;
