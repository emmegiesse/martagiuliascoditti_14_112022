// import REACT
import React from 'react';
import { Link } from 'react-router-dom';

// import COMPONENTS
import EmployeeForm from '../components/FormPage/CreateEmployeeForm';

// import STYLE
import '../style/CreateEmployeePageStyle.css';

const CreateEmployee = () => {
    return (
        <main className="create-employee-page">
            <div class="title">
                <h1>HRnet</h1>
                <div className="employee-page-link">
                    <Link to="/employees">
                        View Current Employees
                    </Link>
                </div>
                <h2>Create Employee</h2>
            </div>
            <div className="create-employee-form">
                <EmployeeForm />
            </div>
        </main>
    );
};

export default CreateEmployee;
