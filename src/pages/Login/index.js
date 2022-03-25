import api from '../../lib/api'
import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Login = props => {

    const [token, setToken] = useState()
    const navigate = useNavigate();

    useEffect(async () => {
        let data = await api.getAllUsers();
        const token = localStorage.getUser("token");
        setToken(token);
        console.log(token);
        setAllUsers(data);
    }, []);

    const userExist = async () => {
        let result = await api.login()
        setToken(result.name)
            localStorage.setItem('token',result.name)
            navigate("/Home")
    }
      
    return (        
        
        <div>
            <div className="relative">
                <img src="https://labahiamasbella.com/wp-content/uploads/2020/01/Mural-misael.jpg" 
                className="h-75 w-3/5 ml-8"/>
            </div>       
            <div>
            <div className="w-2/5 h-80 shadow-md rounded bg-background bg-opacity-90 absolute top-20 right-10 ">
                
            <div className="mb-8 mt-8 text-left">
                <label 
                className="block font-medium text-white ">Nombre:
                </label>
                <input
                name="name"
                type="text"
                placeholder="Nombre"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                />
            </div>
            <div className="mb-8 mt-8 text-left">
                <label 
                className="block font-medium text-white ">Password:
                </label>
                <input
                name="password"
                type="password"
                placeholder="Password"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                />
            </div>
                            
                <button 
                className="rounded-full bg-rosa h-mid 
                w-small lg:w-big text-white font-bold mt-8" 
                >
                    Ingresar
                </button>  
                <span>Aun no tienes una cuenta? 
                    <Link to="/UserRegister">
                        <a>Registrate</a>
                    </Link>
                </span>         
                </div>    
            </div>
           
       
        </div>
  
    )
}

export default Login