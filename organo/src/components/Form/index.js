import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";

const Form = () => {
    const itens = [
        "Programação",
        "Front-End",
        "Data Science",
        "DevOps",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];
    
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite o seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown label="Time" itens={itens}/>
            </form>
        </section>
    )
};

export default Form;