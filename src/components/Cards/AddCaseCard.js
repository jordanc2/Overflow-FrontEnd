import React, { useState } from "react";
import { connect } from 'react-redux';
import { addCase } from '../../actions/index';
import '../../styles/dashboard.css'



const CaseForm = props => {
    const [full_name, setFull_name] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [street_address, setStreet_address] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const submitHandler = e => {
        let newCase = {
            full_name: full_name,
            phone: phone,
            email: email,
            street_address: street_address,
            zip_code:zip_code,
            city:city,
            state:state
        }
        props.addCase(newCase)
    };


    const nameChangeHandler = e => {
        e.preventDefault();
        setFull_name(e.target.value)
    };

    const phoneChangeHandler = e => {
        e.preventDefault();
        setPhone(e.target.value)
    };
    const emailChangeHandler = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const addressChangeHandler = e => {
        e.preventDefault();
        setStreet_address(e.target.value)
    }
    const zipChangeHandler = e => {
        e.preventDefault();
        setZip_code(e.target.value)
    }
    const cityChangeHandler = e => {
        e.preventDefault();
        setCity(e.target.value)
    }
    const stateChangeHandler = e => {
        e.preventDefault();
        setState(e.target.value)
    }

    return (
        <form  className="addsCase" onChange ={submitHandler}>
            <p>Enter New Case Information Below</p>  
            <input onChange ={nameChangeHandler} type="text" value={full_name} placeholder="full name"/>
            <input onChange ={phoneChangeHandler}  type="text" value={phone} placeholder="phone"/>
            <input onChange ={emailChangeHandler} type="text" value={email} placeholder="email"/>
            <input onChange ={addressChangeHandler} type="text" value={street_address} placeholder="street address"/>
            <input onChange ={zipChangeHandler} type="text" value={zip_code} placeholder="zip code"/>
            <input onChange ={cityChangeHandler} type="text" value={city} placeholder="city"/>
            <input onChange ={stateChangeHandler} type="text" value={state} placeholder="state"/>
            <button type="submit">Submit</button>
        
        </form>
    )
}

export default connect(null, { addCase })(CaseForm); 