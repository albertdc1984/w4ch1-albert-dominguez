const Button = ({ text, classB, actionOnClick }) => {
  return (
    <button className={classB} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
