import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderAlphabetical, orderPopulation, orderByContinent, getActivities, byActivity} from "../actions";
import styles from './css/order.module.css';

export default function Order(){
    let dispatch = useDispatch()

    const activities = useSelector(state => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    }, 
    // eslint-disable-next-line
    [])

    function handleOrderAlphabetical(e){
        e.preventDefault();
        dispatch(orderAlphabetical(e.target.value))
    }

    function handleOrderPopulation(e){
        e.preventDefault();
        dispatch(orderPopulation(e.target.value))
    }

    function handleOrderByContinent(e){
        e.preventDefault();
        dispatch(orderByContinent(e.target.value))
    }

    function handlefilteredByActivity(e){
        e.preventDefault();
        dispatch(getActivities(e.target.value))
        dispatch(byActivity(e.target.value))
    }

    return (
    <div className={styles.contenedor}>
        <div className={styles.filtros}>
        <span className={styles.label}>Alphabetical Order</span>
        <select className={styles.select} onChange={handleOrderAlphabetical}>
        <option value='todos'>All</option>
            <option value="ascendente">A-Z</option>
            <option value="descendente">Z-A</option> 
        </select>
        <span className={styles.label}>Population</span>
        <select className={styles.select} onChange={handleOrderPopulation}>
        <option value='todos'>All</option>
            <option value="ascendente">Max</option>
            <option value="descendente">Min</option> 
        </select>
        <span className={styles.label}>Continent</span>
        <select className={styles.select} onChange={handleOrderByContinent}>
        <option value='todos'>All</option>
            <option value='Africa'>Africa</option>
            <option value='Antarctica'>Antarctica</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='North America'>North America</option>
            <option value='Oceania' >Oceania</option>
            <option value='South America'>South America</option>
        </select>
        <span className={styles.label}>Activity</span>
        <select className={styles.select} onChange={handlefilteredByActivity}>
            <option value="todas">All</option>
            {activities.map((act) => (
                <option value={act.nombre}>{act.nombre}</option>
            ))}
        </select>
            <button className={styles.btn}>
                <a className={styles.a} href="/home">Reset</a>
            </button>
    </div>
    </div>
    )
}