import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/country.module.css"


export default function Country({id, nombre, bandera, continente}){ 
    return <div className={styles.contenedor}>
        <Link className={styles.link} to={`/${id}`}>
            <div className={styles.nombre}>{nombre} </div>
            <div className={styles.continente}>{continente}</div>
            <div className={styles.img}>
                <img className={styles.bandera} src={bandera} alt="bandera"/>
            </div>
        </Link>
    </div>
}