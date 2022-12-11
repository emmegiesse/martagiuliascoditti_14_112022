// import REACT
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import PAGES and COMPONENENTS
import NewEmployeePage from '../pages/NewEmployeePage.js';
import EmployeesPage from '../pages/EmployeesPage.js';
import ErrorPage from '../pages/ErrorPage';

// import STYLE
import '../style/AppStyle.css'

//-----------------------------------------
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <main>
       {/* <Header /> */}
        <Routes>
          <Route path="/" element={<NewEmployeePage/>} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </main>
    </BrowserRouter>

  );
}
export default App;
