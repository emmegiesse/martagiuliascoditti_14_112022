// import REACT
import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';

// import COMPONENTS
import AddEmployeeForm from '../components/FormPage/NewEmployeeForm.js';

// import STYLE
import '../style/NewEmployeePageStyle.css';

//JS___________________________________
const NewEmployeePage = () => {
    //const [setOpen] = useState(false);

    return (
        <main className="create-employee-page">
            <div className="title">
                <h1>HRnet</h1>
                <div className="employee-page-link">
                    <Link to="/employees">
                        View Current Employees
                    </Link>
                </div>
                <h2>Create Employee</h2>
            </div>
            <div className="create-employee-form">
                <AddEmployeeForm />
                {/* <AddEmployeeForm setOpen={setOpen}/> */}
            </div>
        </main>
    );

};

export default NewEmployeePage
