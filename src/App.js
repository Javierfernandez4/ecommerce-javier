import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';
import ModalCostum from './components/Modal/Modal';
import Container from '@mui/material/Container';



function App() {

  const [open, setOpen] = useState(false);
  const handleClose = (value) =>{
    setOpen(true)
  }
  useEffect( () => {

  }

  )
  
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Container className='container-general'>
      <ListProducts></ListProducts>   
      </Container>
    </div>
  );
}

export default App;
