import './TextField.css';


const TextField = (props) => {
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
};

export default TextField;