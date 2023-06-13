import { TempoParaSegundos } from '../../common/utils/date';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';
import {useState, useEffect} from 'react'

interface Tarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}
interface Props{
    selecionado : Tarefas | undefined,
    finalizaTarefa: Function
}

export default function Cronometro({selecionado, finalizaTarefa} : Props){

    const [tempo, setTempo] = useState<number>()

    useEffect(() =>{
        if(selecionado?.tempo){
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    
    function regressiva(contador: number = 0){
        setTimeout(() =>{
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizaTarefa()
        }, 1000)
    }

    return(
       <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo = {tempo} />
        </div>
        <Botao texto='Iniciar' onClick = {() => regressiva(tempo)}/>
       </div>
    )
}