import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';
import List from './components/List';

function App() {
  var nome = 'Maria';

  return (
    <div className="App">
      <h1>Testando Meu Css</h1>
      <Frases />
      <Frases />
      <SayMyName nome="Thiago Schug" />
      <SayMyName nome="Dayara" />
      <SayMyName nome={nome} />
      <Pessoa nome="Thiago" idade="22 Anos" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
