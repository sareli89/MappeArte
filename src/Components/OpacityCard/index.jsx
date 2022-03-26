import Input from "../../Components/Input"
import Button from "../../Components/Button"

const OpacityCard = ({ children }) => {
    
    return (
       <div className="w-2/5 shadow-md rounded bg-background bg-opacity-90 absolute top-20 right-10 ">
           {children}
       </div>    
    )
}
 export default OpacityCard