import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from './style.module.scss';
import {useState} from 'react'

function App() {
  interface Tarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}
  const [tarefas, setTarefas] = useState<Tarefas[]>([])
  const [selecionado, setSelecionado] = useState<Tarefas>()

  function selecionaTarefa(tarefaS: Tarefas){
    setSelecionado(tarefaS)
    setTarefas(prev => prev.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaS.id ? true : false
    })))

  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(prev => prev.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas = {setTarefas}/>
      <Lista tarefas = {tarefas} selecionaTarefa={selecionaTarefa}/>
      <Cronometro selecionado = {selecionado} finalizaTarefa = {finalizarTarefa}/>
    </div>
  );
}

export default App;
