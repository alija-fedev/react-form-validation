const Dropdown = ({onChange, onValue, placeholder, name, labelname}) => {
    return(
        <div>
           <select value={onValue} name={name} onChange={onChange}>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="Nepal">Nepal</option>
           </select>
        </div>
    )
}

export default Dropdown;