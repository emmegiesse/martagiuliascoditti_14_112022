// import REACT
import React from 'react';
import { useState } from 'react';

// import REDUX
import { useDispatch} from 'react-redux';
import { addEmployee } from '../../redux/reducer.js';

// import COMPONENTS pour formulaire
import Input from './FormInput.js';
import Select from './DropdownSelect.js';

// import DROPDOWN component from REACT et Data 
import {departments, states} from "../../data/data.js";
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


// import DATEPICKER component from REACT
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import MODALE component
import useModal from '../../modale/useModal.js';
import Modal from '../../modale/Modal.js';

// import STYLE
import '../../style/NewEmployeePageStyle.css';

//JS---------------------------------------------
//const AddEmployeeForm = ({ setOpen }) => 
const AddEmployeeForm = () => {
    // initialisation des données
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    let [birthDate, setBirthDate] = useState(new Date())
    let [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")

    const dispatch = useDispatch();
    const { isShowing: showModal, toggle: toggleModal } = useModal();

    // fonction qui permet de créer une constante avec les informations passées du store 
    /**
     * @param {*} e 
    */
    const saveEmployee = (e) => {
        e.preventDefault();
        birthDate = birthDate.toLocaleDateString()
        startDate = startDate.toLocaleDateString()
        const data = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            startDate: startDate,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            department: department
        };
        dispatch(addEmployee(data))
        toggleModal()
        console.log("newEmployee",data)
        console.log("employee",firstName, lastName, birthDate, startDate, department)
        console.log("adresse",street,city,state,zipCode)
        //  modal to confirm envoie
    };

    return (
        <div className="create-employee">
            <Modal
                isShowing={showModal}
                hide={toggleModal}
                text="Employee Created!"
                title="HRnet - Create Employee" 
            />
            <form id="employee-form" onSubmit={saveEmployee}>
                <div className="employee-informations">
                    <Input 
                        id="firstName" 
                        label="First Name" 
                        type="text" 
                        setter={setFirstName}
                    />
                    <Input 
                        id="lastName" 
                        label="Last Name"
                        type="text"  
                        setter={setLastName} 
                    />
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker 
                        className="customDatePicker"
                        selected={birthDate} 
                        onChange={(date) => setBirthDate(date)} 
                    />
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                    />
                </div>
                <div className="employee-address">
                    <Input 
                        id="street" 
                        label="Street" 
                        type="text" 
                        setter={setStreet} 
                    />
                    <Input 
                        id="city" 
                        label="City" 
                        type="text" 
                        setter={setCity} 
                    />
                    <Select 
                        id="state" 
                        label="State" 
                        data={states}
                        setter={setState}  
                    />
                    <Input 
                        id="zipCode"
                        label="Zip Code"
                        type="number" 
                        setter={setZipCode} 
                    />
                </div>
                <div className="employee-department">
                    <Select 
                        id="department" 
                        label="Department" 
                        data={departments}
                        setter={setDepartment}  
                    />
                </div>
                <div className="bottom">
                    <button>Save</button>
                </div>
            </form >
        </div>
    )
};
export default AddEmployeeForm;
