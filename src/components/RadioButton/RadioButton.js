import "../RadioButton/RadioButton.css";

const RadioButton = ({ onChange, onValue, placeholder, name, labelname, checked }) => {
  return (
    <div>
      <div className="gender-input">
        <label>{labelname}</label>
        <input
          className="radio-button"
          type="radio"
          value={onValue}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          checked={checked}
        />
      </div>
    </div>
  );
};

export default RadioButton;
