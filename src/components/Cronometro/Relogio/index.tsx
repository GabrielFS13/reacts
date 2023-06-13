import style from './Relogio.module.scss'

interface Props{
    tempo: number | undefined
}

export default function Relogio({tempo = 0}:Props){

    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60

    const [dezena, unidade] = String(minutos).padStart(2, "0")
    const [sDezena, sUnidade] = String(segundos).padStart(2, "0")

    return(
        <>
            <span className={style.relogioNumero}>{dezena}</span>
            <span className={style.relogioNumero}>{unidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{sDezena}</span>
            <span className={style.relogioNumero}>{sUnidade}</span>
        </>
    )
}