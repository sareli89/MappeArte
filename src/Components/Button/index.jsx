const Button = ({color, nameButton, click}) => {
  const colorConfig = {
    orange: "bg-orange-punch",
    pink: "bg-rosa",
  };
  return (
    <button 
    className={`rounded-full ${colorConfig[color]} h-mid w-40 lg:w-80 text-white font-bold mt-8`} 
    onClick={click}>
       {nameButton}
    </button>
  );
};

export default Button;
