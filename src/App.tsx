import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AdminLogin, Login, Welcome } from './login/login';
import background from './Airplane.jpg'
import { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { AddEmployee, AddFlight, AddPilot } from './adminedit/adminedit';
import { DropTable } from './userview/flightlist';
import { createState } from '@hookstate/core';

function App() {
  return (
    <div className="App" style={{ height: "100vh", backgroundImage: `url(${background})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
      <header className="App-header" >
        <p style={{ color: 'white' }}>
          <b>Your online flight assistant</b>
        </p>
        {/* <Login/> */}
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin_login' element={<AdminLogin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/addEmployee' element={<AddEmployee />} />
        <Route path='/addflight' element={<AddFlight />} />
        <Route path='/addpilot' element={<AddPilot />} />
        <Route path='/userview' element={<DropTable />} />
      </Routes>
    </div>
  );
}

export default App;
export const auth=createState("");