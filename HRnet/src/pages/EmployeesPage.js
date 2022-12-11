// import REACT
import React from 'react';
import { Link } from 'react-router-dom';

// import COMPONENTS
import EmployeesTable from '../components/EmployeesPage/AllEmployeesTable.js';

// import STYLE
import '../style/EmployeesPageStyle.css';

const EmployeesPage = () => {
    return (
        <div className="current-employees">
            <div className="employees-title">
                <h2>Current Employees</h2>
            </div>
            <section className="employees-table">
                <EmployeesTable />
            </section>
            <div className="EmployeesLink">
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default EmployeesPage;