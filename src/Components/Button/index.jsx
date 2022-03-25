const Button = (props) => {
  const { color } = props;
  const colorConfig = {
    orange: "bg-orange-punch",
    pink: "bg-rosa",
  };
  return (
    <button class={`rounded-full ${colorConfig[color]} h-mid w-small lg:w-big`}>
      Save Changes
    </button>
  );
};

export default Button;
