import Input from "../../Components/Input"
import Button from "../../Components/Button"

const OpacityCard = () => {
    return (
       <div className="w-2/5 h-80 shadow-md rounded bg-background bg-opacity-90 absolute top-20 right-10 ">
           <Input labelName="Nombre" typeInput="text" inputName="name" nameTag="Nombre"/>
           <Input labelName="Contraseña" typeInput="password" inputName="password" nameTag="Password"/>
            
           <Button color="pink" nameButton="INGRESAR" />
       </div>    
    )
}
 export default OpacityCard