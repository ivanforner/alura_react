import { useState } from "react";

import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";
import Button from "../Button";


const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const whenSubmmit = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
    }
    
    return (
        <section className="form">
            <form onSubmit={whenSubmmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropDown 
                    required={true} 
                    label="Time" 
                    itens={props.teams}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                {/* Maneira diferente de passar propriedades */}
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
};

export default Form;