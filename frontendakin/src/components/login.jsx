import React, { useState, useEffect } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    /*async function login() {
        let item = { email, password };
        let result = await fetch("http://localhost:9000/", {
            methode: 'POST',
            header:{
                //still in progress
            },
            body: JSON.stringify(item)        
        });
        result = await result.json();
        localStorage.setItem("",JSON.stringify(result))
    }*/


    return (
        <div className="flex items-center justify-center h-screen bg-indigo-300 ">

            <div className="border-2 border-solid border-black col-sm-6 offset-sm-3  space-y-1 p-5  bg-gray-300 ">

                <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800">Login</h1>

                <input type='email'
                    placeholder="email"
                    className="form-control border-2 border-solid border-black "
                    onChange={(e) => setEmail(e.target.value)}>
                </input>

                <br />
                <input
                    type='password'
                    className="form-control border-2 border-solid border-black "
                    onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    /*onClick={login}*/>
                    login
                </button>
                <button 
                    className=" hover:bg-gray-500 text-black font-bold py-2 px-4 rounded"
                    /*onClick={registreren}*/
                >register</button>

            </div>

        </div>
    )
}

export default Login;