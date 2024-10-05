import { useNavigate } from "react-router-dom";

const NavBar =()=>{
    const navigate = useNavigate()

    return(

        <>
        <div className="flex justify-center">
            <nav >
                <ul className="flex space-x-8">
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li onClick={()=>navigate('/login')}>Login </li>
                    <li onClick={()=>navigate('/register')}>Register</li>
                </ul>
            </nav>
        </div>

        </>
    )
}
export default NavBar;