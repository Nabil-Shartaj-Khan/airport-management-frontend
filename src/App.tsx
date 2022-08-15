import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AdminLogin, Login, Welcome } from './login/login';
import background from './r6back.png'
import { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Signup } from './signup/signup';

function App() {
  return (
    <div className="App" style={{height:"100vh", backgroundImage: `url(${background})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'white'}}>
          Kemon asen <b>jonogon</b>
        </p>
        {/* <Login/> */}
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin_login' element={<AdminLogin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
