import style from '../style.module.scss';

interface Tarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string,
    selecionaTarefa: Function
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa} : Tarefas ) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} onClick = {() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}