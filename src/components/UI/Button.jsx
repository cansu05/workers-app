const Button = (props) => {
  return (
    <button
      className={`p-2 text-lg  bg-violet-950 text-white ${props.className}`}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
