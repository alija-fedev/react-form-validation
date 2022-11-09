import "../Button/Button.css";

const Button = ({ editformarray, disabled }) => {
  return (
    <div>
      <button className="submit-button" type="submit" disabled={disabled}>
        {editformarray}
      </button>
    </div>
  );
};

export default Button;
