import React, { useState } from 'react'
import axios from 'axios'

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ username: '', password: '' });
    const { username, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <>
            <form>
                <label>
                    Username
                </label>
                <input type='text' value={username} handleChange={handleChange} required />
                <label>
                    Password
                </label>
                <input type='password' value={password} handleChange={handleChange} required />
                <input type='submit' />
            </form>
        </>
    )
}

export default SignIn