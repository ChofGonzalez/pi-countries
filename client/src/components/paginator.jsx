import styles from './css/paginator.module.css'

export default function Paginado ({countriesPerPage, countries, paginado}){
    const numeroPaginas = [];

    for(let i = 1; i <= Math.ceil(countries / countriesPerPage); i++){
        numeroPaginas.push(i)
    }

    return (
    <div className={styles.contenedor}>
        <ul className={styles.ul}>
            {
                numeroPaginas.map((numero) => (
                    <li className={styles.li}>
                        <button className={styles.btn} onClick={() => paginado(numero)}>{numero}</button>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}