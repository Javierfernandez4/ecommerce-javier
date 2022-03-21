import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';
import ModalCostum from './components/Modal/Modal';


function App() {
  
  return (
    <div className='App'>
      <NavBar></NavBar>
      <ListProducts></ListProducts>   
    </div>
  );
}

export default App;
