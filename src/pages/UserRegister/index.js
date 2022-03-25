import api from '../../lib/api'
import { useState, useEffect } from 'react'


const UserRegister = () => {
    const [user, setUser] = useState({})

    const newUser = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setUser({ ...user, [property]: value });
        console.log(user);
    };

    const createUser = async () => {
        let result = await api.login(user)
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
                className="block font-medium text-white ">Usuario:
                </label>
                <input
                name="user"
                type="text"
                placeholder="Nombre de usuario"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                onChange={newUser}
                />
            </div> 
            <div className="mb-8 mt-8 text-left">
                <label 
                className="block font-medium text-white ">Nombre:
                </label>
                <input
                name="name"
                type="text"
                placeholder="Nombre"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                onChange={newUser}
                />
            </div>
            <div className="mb-8 mt-8 text-left">
                <label 
                className="block font-medium text-white ">Apellido:
                </label>
                <input
                name="lastname"
                type="text"
                placeholder="Apellido"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                onChange={newUser}
                />
            </div>
            <div className="mb-8 mt-8 text-left">
                <label 
                className="block font-medium text-white ">Correo electronico:
                </label>
                <input
                name="email"
                type="email"
                placeholder="Email"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                onChange={newUser}
                />
            </div>
            <div className="mb-8 mt-8 text-left">
                <label 
                className="block font-medium text-white ">Contraseña:
                </label>
                <input
                name="password"
                type="password"
                placeholder="Password"
                className='form-controlw-10 rounded h-mid w-small lg:w-big'
                onChange={newUser}
                />
            </div>
                            
                <button 
                className="rounded-full bg-rosa h-mid 
                w-small lg:w-big text-white font-bold mt-8" 
                onClick={createUser}>
                    Ingresar
                </button>            
                </div>    
            </div>
           
       
        </div>
  
    )
}

export default UserRegister