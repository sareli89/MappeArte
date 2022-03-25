import Input from "../../Components/Input"
import Button from "../../Components/Button"

const OpacityCard = () => {
    return (
       <div className="w-2/5 h-80 shadow-md rounded bg-background bg-opacity-90 absolute top-20 right-10 ">
           <Input />
           <Button color="orange" nameButton="INGRESAR"/>
       </div>    
    )
}
 export default OpacityCard