import Item from './Item';
import style from './style.module.scss';

interface Tarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}
interface ListaProps{
    tarefas: Tarefas[],
    selecionaTarefa: (tarefa: Tarefas) => void
}
export default function Lista({tarefas, selecionaTarefa} : ListaProps) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item 
                    {...tarefa}
                     key = {tarefa.id}
                     selecionaTarefa={selecionaTarefa}
                     />
                ))}
            </ul>
        </aside>
    )
}