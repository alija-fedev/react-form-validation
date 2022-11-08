import "../TextField/TextField.css"

const TextField = ({onChange, onValue, placeholder, name, type}) => {
    return(
        <div>
            <input type={type} className="form-input" value={onValue} onChange={onChange} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default TextField;