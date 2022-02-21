import React, {useState} from 'react';
import './FanAccount.css';
import './HeroBtn.css';

function FanAccount() {

    const [enterFirstName, setFirstName] = useState('');
    const [enterLastName, setLastName] = useState('');
    const [enterUserName, setUserName] = useState('');
    const [enterEmail, setEmail] = useState('');
    const [enterPassword, setPassword] = useState('');

    const FirstNameChange = (event) => {
        setFirstName(event.target.value);
    }; 
    const LastNameChange = (event) => {
        setLastName(event.target.value);
    }; 
    const UserNameChange = (event) => {
        setUserName(event.target.value);
    }; 
    const EmailChange = (event) => {
        setEmail(event.target.value);
    }; 
    const PasswordChange = (event) => {
        setPassword(event.target.value);
    }; 

    const formSubmit = (event) => {
        event.preventDefault();
        const enterData = {
            FirstName: enterFirstName,
            LastName: enterLastName,
            Username: enterUserName,
            Email: enterEmail,
            Password: enterPassword
        };
        fetch('http://wren.in:3200/api/sign-up/talent', {
                method: 'POST',
                body: JSON.stringify(enterData),
                headers: {
                    'content-type' : 'application/json'
                }
            }).then( (result) =>{
                console.log(result)
            });
        // const addEnterData = (enterData) => {
            
        // };
        console.log(enterData);
        setFirstName('');
        setLastName('');
        setUserName('');
        setEmail('');
        setPassword('');
    }; 
    return (
        <div>
            <form className="row g-3 needs-validation justify-content-center" onSubmit={formSubmit} novalidate>
                <div className='col-12 mt-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <label  htmlFor="validationCustom01" className="form-label ps-3">First name</label>
                            <input type="text" onChange={ FirstNameChange } className="form-control" id="validationCustom01" value={enterFirstName} placeholder='First name' required />
                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <label htmlFor="validationCustom02" className="form-label ps-3">Last name</label>
                            <input type="text" onChange={ LastNameChange } className="form-control" id="validationCustom02" value={enterLastName} placeholder='Last name' required />
                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <label htmlFor="validationCustomUsername" className="form-label ps-3">Username</label>
                            <div className="input-group has-validation">
                                <input type="text" onChange={ UserNameChange } className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"  placeholder='Username' value={enterUserName} required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <label htmlFor="validationCustomUsername" className="form-label ps-3">Email</label>
                            <div className="input-group has-validation">
                                <input type="email" onChange={ EmailChange } className="form-control" id="validationCustomUsername" placeholder='Email' value={enterEmail} aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose an email .
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='col-12 mt-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <label htmlFor="validationCustomUsername" className="form-label ps-3">Password</label>
                            <div className="input-group has-validation">
                                <input type="password" className="form-control" onChange={ PasswordChange } id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={enterPassword} placeholder='Password' required />
                                <div className="invalid-feedback">
                                    Please password.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='col-12 mt-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="col-12 mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 d-flex justify-content-center">
                            <button className="my-btn2 ps-5 pe-5" type="submit">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FanAccount;