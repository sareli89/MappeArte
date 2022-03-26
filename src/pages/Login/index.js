import api from '../../lib/api';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import OpacityCard from '../../Components/OpacityCard';

const Login = props => {

    const [token, setToken] = useState()
    const navigate = useNavigate();

    // useEffect(async () => {
    //     let data = await api.getAllUsers();
    //     const token = localStorage.getUser("token");
    //     setToken(token);
    //     console.log(token);
    //     setAllUsers(data);
    // }, []);

    // const userExist = async () => {
    //     let result = await api.login()
    //     setToken(result.name)
    //         localStorage.setItem('token',result.name)
    //         navigate("/Home")
    // }
      
    return (        
        
        <div>

            
            <div className="relative">
                <img src="https://labahiamasbella.com/wp-content/uploads/2020/01/Mural-misael.jpg" 
                className="h-75 w-3/5 ml-8"/>
            </div>       
            <div>
            <div className="w-2/5 shadow-md rounded bg-background bg-opacity-90 absolute top-20 right-10 ">
            <div>
                <div className="mb-8 mt-8 text-left">
                    <Input 
                    labelName="Nombre" 
                    inputName="user" 
                    typeInput="text" 
                    nameTag="Nombre"

                    />
                    <Input 
                    labelName="Password" 
                    inputName="password" 
                    typeInput="password" 
                    nameTag="Password"

                    />
                    
                </div>
            </div>
                
            
                <Button 
                nameButton="INGRESAR" 
                color="pink"
                />            
                <div className="m-4">
                    
                    <span className="text-white">Aun no tienes una cuenta? 
                        <Link to="/UserRegister">
                            <a className="m-2 ">Registrate</a>
                        </Link>
                    </span>  
                </div>
                        
                </div>    
            </div>
           
       
        </div>
  
    )
}

export default Login