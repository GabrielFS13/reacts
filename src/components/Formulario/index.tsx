import Botao from "../Botao";
import style from './style.module.scss';
import { useState } from 'react'
import { v4 as uuid4} from 'uuid'

interface Tarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}

export default function Formulario({setTarefas} : {setTarefas: Function}) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00:00")

    function addTarefa(e: React.FormEvent){
        e.preventDefault()

        setTarefas((antigos: Tarefas[]) => [...antigos, {tarefa, tempo, selecionado: false, completado: false, id: uuid4()}])

        setTarefa("")
        setTempo("00:00:00")
    }
    return (
        <form className={style.novaTarefa} onSubmit={(e) => addTarefa(e)}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefe">Adicione um novo estudo</label>
                <input type="text"
                    name="tarefa"
                    id="tarefe"
                    required
                    value={tarefa} 
                    onChange = {(e) => setTarefa(e.target.value)}
                    />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="horario">Tempo</label>
                <input type="time"
                    name="horario"
                    id="horario"
                    required
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    value={tempo}
                    onChange = {(e) => setTempo(e.target.value)}
                />
            </div>
            <Botao texto="Adicionar" type="submit"/>
        </form>
    )
}