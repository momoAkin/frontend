import React, { useState, useEffect } from "react";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [name, setName] = useState('');

    /* async function signUp()
     {
         let item=(name,password,email);
         let result = await fetch("",{
             method:'POST',
             body:JSON.stringify(item),
             headers:{
              //still in progress
             }
         });
         result = await result.json();
         localStorage.setItem("",JSON.stringify(result));
     }*/

    return (
        <div className="flex items-center justify-center h-screen bg-indigo-300">

            <div className="border-2 border-solid border-black col-sm-6 offset-sm-3  space-y-1 p-5  bg-gray-300 ">
                <h1 className="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800">Sign up</h1>
                <input
                    type='text'
                    placeholder="name"
                    className="form-control border-2 border-solid border-black "
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <br />
                <input
                    type='email'
                    placeholder="email"
                    className="form-control border-2 border-solid border-black "
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <br />
                <input 
                    type='password' 
                    placeholder="password" 
                    className="form-control border-2 border-solid border-black "
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                <br />
                <input 
                    type='password' 
                    placeholder="repassword" 
                    className="form-control border-2 border-solid border-black "
                    onChange={(e) => setRepassword(e.target.value)}>

                    </input>
                <br />
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    /*onClick={signUp}*/>register</button>

            </div>

        </div>
    )
}
export default Register;