import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from './style.module.scss';
import {useState} from 'react'

function App() {

  const [tarefas, setTarefas] = useState([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas}/>
      <Lista tarefas = {tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
