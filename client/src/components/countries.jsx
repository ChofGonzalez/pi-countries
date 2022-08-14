import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../actions";
import Country from "./country";
import Paginado from "./paginator";
import styles from './css/countries.module.css'

export default function Countries(){
    let countries = useSelector((state) => state.filteredCountries )
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries())
    },
    // eslint-disable-next-line
    [])

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(9);
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountry = countries.slice(firstCountry, lastCountry);
    // const indiceUltimoPais = paginaActual * paisesPorPagina;
    // const indicePrimerPais = indiceUltimoPais - paisesPorPagina;
    // const paisesActuales = countries.slice(indicePrimerPais, indiceUltimoPais)

    // const paginacion = (numeroPagina) => setPaginaActual(numeroPagina)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    return <div>
        <div className={styles.cardContainer}>
        {currentCountry.length ? currentCountry.map((c) => {
            return < Country id={c.id} nombre={c.nombre} bandera={c.imagenBandera} continente={c.continente}/>
        }): <span className={styles.span}>
            <h2 className={styles.subtitle}>"Toto, I've got a feeling we're not in Kansas anymore"</h2>
            <h1 className={styles.name}>Doroty, The Wizard of Oz</h1>
            </span>}
        </div>
        <Paginado countriesPerPage={countriesPerPage} countries={countries.length} paginado={paginado}/>
    </div>
}
