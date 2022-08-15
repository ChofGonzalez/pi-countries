import React, { useState } from 'react'
import styles from './css/paginator.module.css'

export default function Paginado ({countriesPerPage, countries, paginado}){
    const [currentPage, setCurrentPage] = useState(1)
    const numeroPaginas = [];

    for(let i = 1; i <= Math.ceil(countries / countriesPerPage); i++){
        numeroPaginas.push(i)
    }

    return (
    <div className={styles.contenedor}>
        <ul className={styles.ul}>
            {numeroPaginas.includes(currentPage +1) && <button className={styles.btn} onClick={()=>{
            setCurrentPage(currentPage +1);
            paginado(currentPage +1);
        }}>NEXT</button>}
            {numeroPaginas.map((numero) => (
            <li className={styles.li}>
            <button className={styles.btn} onClick={() => paginado(numero)}>{numero}</button>
            </li>))}
            {numeroPaginas.includes(currentPage -1) && <button className={styles.btn} onClick={()=>{
            setCurrentPage(currentPage -1);
            paginado(currentPage -1);
        }}>PREV</button>}
        </ul>
    </div>
    )
}



