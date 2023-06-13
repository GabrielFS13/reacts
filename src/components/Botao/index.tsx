import style from './style.module.scss';

interface BotaoProps{
    texto: string,
    type?: "submit" | "button",
    onClick?: () => void 
}

export default function Botao( {texto, type, onClick}: BotaoProps ){
    return(
        <button onClick={onClick} className={style.botao} type={type}>
            {texto}
        </button>
    )
}