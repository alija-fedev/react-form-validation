import "../Button/Button.css";

const Button = ({ editformarray }) => {
  return (
    <div>
      <button className="submit-button" type="submit">
        {editformarray}
      </button>
    </div>
  );
};

export default Button;
