import style from './style.module.scss';

interface BotaoProps{
    texto: string,
    type?: "submit" | "button"
}

export default function Botao( {texto, type}: BotaoProps ){
    return(
        <button className={style.botao} type={type}>
            {texto}
        </button>
    )
}