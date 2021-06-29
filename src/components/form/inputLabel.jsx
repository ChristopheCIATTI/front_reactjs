export default function InputLabel({type, label, placeholder, value, change, name, step, required}) {
    step = step || ""
    required = required || ""
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {
                required 
                ? <input onChange={change} defaultValue={value} name={name} type={type} id={name} placeholder={placeholder} step={step} required/>
                : <input onChange={change} defaultValue={value} name={name} type={type} id={name} placeholder={placeholder} step={step}/>
            }
        </div>
    )
}
