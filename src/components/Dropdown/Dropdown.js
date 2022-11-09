import "../Dropdown/Dropdown.css"

const Dropdown = ({onChange, onValue, name}) => {
    return(
        <div>
           <select className="select-country" value={onValue} name={name} onChange={onChange}>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="Nepal">Nepal</option>
           </select>
        </div>
    )
}

export default Dropdown;