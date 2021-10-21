import React, {useEffect, useState } from 'react';
import { render } from 'react-dom';
import Header from './componets/Header/header';
import Beers from './componets/Beer/beers';
import './styles/style.css';
import './App.css'
import {  getBeerData } from './componets/Api/index';

const App = () => {
  const [beers, setbeers] = useState([])
 
 useEffect (() => {
   let beers = true;
   getBeerData()
   .then(items => {
     if(beers){
       setbeers(items)
     }
   })
   return () => beers = false;
   //.then((data)=> {setbeers([])})

 },[]);
  
    return (
    <>
     
     <Header />
        <Beers beers={setbeers} />
        
        {beers.map(items => items.name)}
        
    </>
    );
  
};

export default App;