import { useState } from 'react';
import Banner from './components/Banner/';
import Form from './components/Form';
import Team from './components/Team';
import Rodape from './components/Rodape'


function App() {

  const teams = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    // Abra o console do navegador para debugar
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {teams.map(team => {
        return (
          <Team 
            key={team.nome} 
            nome={team.nome} 
            corPrimaria={team.corPrimaria} 
            corSecundaria={team.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === team.nome)}
          /> 
        )
      })}
      <Rodape/>
    </div>
  );
}

export default App;
