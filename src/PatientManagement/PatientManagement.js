import React, { useReducer, useRef } from 'react';

const patientInitial = {
    patients : []
}

const patientReducer = (state, action) => {
    switch(action.type){
        case 'add':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatient = [...state.patients, newPatient];
            return {patients: allPatient};
        default:
            throw new Error();
    }
}


const PatientManagement = () => {
    const inputRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientInitial)

    const handleForm = (e) =>{
        e.preventDefault();
        dispatch({
            type:'add',
            id: state.patients.length ,
            name: inputRef.current.value 
        })
        inputRef.current.value = '';
        console.log(inputRef.current.value)
    }

    return (
        <>
            <h4>Total Patient List : {state.patients.length}</h4>
            <form onSubmit={handleForm}>
                <input ref={inputRef} ></input>
            </form>
            {
                state.patients.map(pt=> <li key={pt.id}> {pt.name} </li>)
            }
        </>
    );
};

export default PatientManagement;