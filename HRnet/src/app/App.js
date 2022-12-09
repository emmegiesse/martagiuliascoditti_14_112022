// import REACT
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import PAGES and COMPONENENTS
import CreateEmployee from './pages/CreateEmployeePage.js';
import Employees from './pages/EmployeesPage.js';
import Error from './pages/ErrorPage';
import Header from './components/Header';

// import STYLE
import './App.css'

//-----------------------------------------

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <main>
        <Header />
        <Routes>
          {/*
          <Route path="/" element={<CreateEmployee/>} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<Error />} /> 
           */}
        </Routes>
      </main>
    </BrowserRouter>

  );
}
export default App;
