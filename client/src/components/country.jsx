// import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/country.module.css"

// export default function Country({id, nombre, bandera, continente}) {
//     return(
//         <div className={style.card}>
//             <Link to={`/${id}`}>
//             <h2>{nombre}</h2>
//             <h3>{continente}</h3>
//             <img src={bandera} alt='no flag'/>
//             </Link>
//         </div>
//     )
// }



export default function Country({id, nombre, bandera, continente}){ 
    return <div className={styles.contenedor}>
        <Link className={styles.link} to={`/${id}`}>
            <div className={styles.nombre}>{nombre} </div>
            <div className={styles.continente}>{continente}</div>
            <div className={styles.img}>
                <img className={styles.bandera} src={bandera} alt="bandera" width={200}/>
            </div>
        </Link>
    </div>
}