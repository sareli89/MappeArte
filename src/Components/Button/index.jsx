const Button = (props) => {
  const { color, nameButton } = props;
  const colorConfig = {
    orange: "bg-orange-punch",
    pink: "bg-rosa",
  };
  return (
    <button className={`rounded-full ${colorConfig[color]} h-mid w-small lg:w-big text-white font-bold mt-8`}>
       {nameButton}
    </button>
  );
};

export default Button;
