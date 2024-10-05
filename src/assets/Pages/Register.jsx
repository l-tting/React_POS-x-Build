import { useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";

const Register=()=>{
    const url ="http://127.0.0.1:5000/register"

    const [registerdata,setLoginData]=useState({
        email:"",
        username:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setLoginData({
            ...registerdata,
            [name]:value,
        });

    };

    const postRegister = async (e)=>{
        e.preventDefault();
        try{
            const register = await axios.post(url,logindata)
            console.log("Login:",register.data)  
        }
        catch(e){
            console.log(`Error posting login:${e}`)
        } 
    }

    return(
       <div className="relative">
        <div><NavBar/></div>
        <div>
            <h1 className="">This is the registerpage</h1>
        </div>
        <div>
            <form className="space-y-4" onSubmit={postRegister}>
                <div>
                    <input type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border border-black font-bold"
                    onChange={handleChange}
                    value={registerdata.email}
                    />
                </div>
                <div>
                    <input type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={registerdata.username}
                    className="border border-black font-bold"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={registerdata.password}
                    className="border border-black font-bold"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="border border-black w-20 font-bold">Register</button>
                </div>
            </form>
        </div>
       </div>
    )
}
export default Register;