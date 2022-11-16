import "../button/  ";

const Button_type_classes = {
  google: "google-sigh-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_type_classes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
