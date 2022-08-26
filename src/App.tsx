import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AdminLogin, Login, Welcome } from './login/login';
import background from './Airplane.jpg'
import { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { AddAirlines, AddEmployee, AddFlight, AddPilot } from './adminedit/adminedit';
import { DropTable } from './userview/flightlist';
import { hookstate } from '@hookstate/core';

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
        {/* { auth.get()!="" && 
          <Route path="/addflight" element={AddFlight} />
        } */}
        <Route path='/addflight' element={auth.get()==""|| auth.get()==null|| auth.get()=="null"? <AdminLogin/> : <AddFlight />} />
        <Route path='/addpilot' element={<AddPilot />} />
        <Route path='/userview' element={<DropTable />} />
        <Route path='/addairline' element={auth.get()==""|| auth.get()==null|| auth.get()=="null"? <AdminLogin/> : <AddAirlines />} />
      </Routes>
    </div>
  );
}

export default App;
export const auth=hookstate(window.localStorage.getItem("token"));
