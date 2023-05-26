import Employee from '../Employee';
import './Team.css';


const Team = (props) => {
    const sectionCss = { 
        backgroundColor: props.corSecundaria
    }

    const h3Css = {
        borderBottom: `${props.corPrimaria} 4px solid`
    }

    return(
        props.colaboradores.length > 0 && <section className='team' style={sectionCss}>
            <h3 style={h3Css}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Employee nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.cargo} corFundo={props.corPrimaria}/>
                })}
            </div>
        </section>
    );
};

export default Team;