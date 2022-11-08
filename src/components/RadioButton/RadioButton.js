import "../RadioButton/RadioButton.css"

const RadioButton = ({onChange, onValue, placeholder, name, labelname}) => {
    return(
        <div>
            <div className="gender-input">
                <label>{labelname}</label>
                <input type="radio" value={onValue} onChange={onChange} name={name} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default RadioButton;