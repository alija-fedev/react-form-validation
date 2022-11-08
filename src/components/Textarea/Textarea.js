import "../Textarea/Textarea.css"

const Textarea = ({onChange, onValue, name}) => {
    return(
        <div>
            <div className="textarea-input">
                <textarea value={onValue} onChange={onChange} name={name} placeholder="Type here..." rows="4" cols="70"/>
            </div>
        </div>
    )
}

export default Textarea;