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
        <section className='team' style={sectionCss}>
            <h3 style={h3Css}>{props.nome}</h3>
            <Employee/>
            <Employee/>
        </section>
    );
};

export default Team;