import Item from './Item';
import style from './style.module.scss';

interface Tarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}
export default function Lista({tarefas} : {tarefas: Tarefas[]}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, i) => (
                    <Item {...tarefa} key = {i}/>
                ))}
            </ul>
        </aside>
    )
}