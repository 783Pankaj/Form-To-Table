import React, { useState } from "react";
import validator from "validator";

const Form = () => {
    const [user, setUser] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [emailError, setEmailError] = useState('')
    const [contErr, setContErr] = useState('');

    function loginHandle(e) {
        if (user.length < 3) {
            alert("type correct values")
        }
        else {
            alert("all good :)")
        }

        e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 5 || item.length > 15) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }

    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    const validContact = (e) => {
        let cont = e.target.value;
        if (cont.length <= 9 || cont.length > 10) {
            setContErr(true)
        } else {
            setContErr(false);
        }
        setUser(cont)
    }
    return (
        <div>
            <form className="inputForm" onSubmit={loginHandle}>
                <input type="text"
                    placeholder="Enter User Name"
                    onChange={userHandler} 
                    />
                {userErr ? <span>User Not Valid</span> : ""} <br />


                <input type="radio"
                    name="gender"
                    value="male" />Male

                <input type="radio"
                    name="gender"
                    value="female" />Female
                <br />
                <br />
                select your city <select>
                    <option>Mumbai</option>
                    <option>Bhopal</option>
                    <option>Jaipur</option>
                    <option>Pune</option>
                    <option>delhi</option>
                </select>
                <br />
                <br />

                <input type="text" placeholder="enter email" id="userEmail"
                    onChange={(e) => validateEmail(e)}></input> <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'black',
                }}>{emailError}</span>
                <br />

                <input type="text"
                    placeholder="enter your contact number"
                    onChange={validContact} />
                {contErr ? <span>must enter Ten Number</span> : ""}
                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;