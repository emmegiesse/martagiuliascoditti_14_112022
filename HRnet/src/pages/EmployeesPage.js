// import REACT
import React from 'react';
import { Link } from 'react-router-dom';

// import COMPONENTS
import EmployeeTable from '../components/EmployeesPage/CurrentEmployeeTable.js';

// import STYLE
import '../style/CurrentEmployeePageStyle.css';

const Employees = () => {
    return (
        <div className="current-employees">
            <div className="employees-title">
                <h2>Current Employees</h2>
            </div>
            <section className="employees-table">
                <EmployeeTable />
            </section>
            <div className="EmployeesLink">
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Employees;