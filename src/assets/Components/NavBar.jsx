import { useNavigate } from "react-router-dom";

const NavBar =()=>{
    const navigate = useNavigate()

    return(

        <>
        <div className="flex justify-center  h-8  w-[70%] ml-24 ">
            <nav >
                <ul className="flex space-x-8 text-[0.8rem] mt-2 text-white ">
                    <li onClick={()=>navigate('/')}> <i>Home</i> </li>
                    <li onClick={()=>navigate('/login')}> <i>Login</i> </li>
                    <li onClick={()=>navigate('/register')}> <i>Register</i> </li>
                    <li onClick={()=>navigate('/dashboard')}>  <i>DashBoard</i> </li>
                </ul>
            </nav>
        </div>

        </>
    )
}
export default NavBar;