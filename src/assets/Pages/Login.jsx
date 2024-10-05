import { useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";

const Login=()=>{
    const url ="http://127.0.0.1:5000/login"
    const [logindata,setLoginData]=useState({
        user:"",
        password:""
    });

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({
            ...logindata,
            [name]:value,
        })

    }
    const postLogin = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(url,logindata)
            const token = response.data.access_token
            localStorage.setItem('access_token',token)
        }
        catch(error){
            console.log(`Error posting login ${e}`)
        }
    }

    return(
       <div>
        <div><NavBar/></div>
        <div>
            <h1>This is the loginpage</h1>
        </div>
        <div>
            <form className="space-y-4" onSubmit={postLogin}>
                <div>
                    <input type="email" 
                    name="user"
                    placeholder="Enter your email or username"
                    className="border border-black font-bold"
                    onChange={handleChange}
                    value={logindata.email}
                    />
                </div>
                <div>
                    <input type="password" 
                    name="password"
                    placeholder="Enter your password"
                    className="border border-black font-bold"
                    onChange={handleChange}
                    value={logindata.password}
                    />
                </div>
                <div>
                    <button className="border border-black w-16 font-bold">Login</button>
                </div>
            </form>
        </div>
       </div>
    )
}
export default Login;