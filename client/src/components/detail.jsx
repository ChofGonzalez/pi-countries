import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import styles from './css/detail.module.css'

export default function CountryDetail(){

    const [country, setCountry] = useState([])
    let {id} = useParams()
    useEffect(() => {
        let isMounted = true;   
        axios.get(`/countries/${id}`)
        .then((respuesta) => {
            if (isMounted) setCountry(respuesta.data)
        })
        return () => { isMounted = false };
    })
    return (
    <div className={styles.container}>
        <Link className={styles.button} to="/home">Back</Link>
        <div className={styles.cardPais}>
            {
                country?
                <div className={styles.cardPais}>
                    <img className={styles.bandera} src={country.imagenBandera} alt="bandera" />
                    <h2>{country.nombre}</h2>
                    <h3>ID: {country.id}</h3>
                    <h3>Habitantes: {country.poblacion} millones</h3>
                    <h3>Capital: {country.capital}</h3>
                    <h3>Subregion: {country.subregion}</h3>
                    <h3>Area: {country.area} kilometros</h3>

                </div>
                :
                <h3>cargando</h3>
            }
        </div>
        <div className={styles.cardActividad}>
        <h5 className={styles.activities} >Actividades</h5>
        {country? country.activities?.map(a=>{
            return(
                <div className={styles.containerActivity}>
                    <h2 className={styles.textoActividad}> Actividad: {a.nombre} </h2>
                    <h2 className={styles.textoActividad}> Dificultad: {a.dificultad} </h2>
                    <h2 className={styles.textoActividad}> Duracion: {a.duracion} hs</h2>
                    <h2 className={styles.textoActividad}> Temporada: {a.temporada} </h2>
                </div>)
            
            })
        : null
        }
        </div>
        
       
    </div>
    )
}



/*
 class CountryDetail extends Component {

         function mapStateToProps (state) {
             return {
                activity: state.activity,
                activityXcountry: state.activityXcountry
             }
          }
           
     render() {
         let country = this.props.country
         return (
             <Link className={styles.button} to="/home">Back</Link>
             <div className={style.cardPais}>
                     <div className={style.cardPais}>
                         <p className={style.text}>{country.nombre}</p>
                         <p className={style.text}>ID: {country.id}</p>
                         <p className={style.text}>Habitantes: {country.poblacion}</p>
                         <p className={style.text}>Capital: {country.capital}</p>
                         <p className={style.text}>Subregion: {country.subregion}</p>
                         <p className={style.text}>Area: {country.area}</p>
                 <div>
                     <img className={style.bandera} 
                             src={country.imagenBandera} 
                             alt={`${country.nombre} bandera`} />
                         </div>
                         </div>
                         <div className={styles.cardActividad}>
                            {this.props.country_activity.map(p => 
                                 { if (p.id === country.id) {
                                     let activity = this.props.actoviry.find(activity => activity.id === p.id)
                                     return (
                                         <div key={activity.id} className={style.activityContainer}> 
                                             <p className={styles.textoActividad}> Name: {activity.nombre}</p>
                                             <p className={styles.textoActividad}>Difficulty: {activity.dificultad}</p>
                                             <p className={styles.textoActividad}>Duraction: {activity.duracion} horas</p>
                                             <p className={styles.textoActividad}>Season: {activity.temporada}</p>
                                         </div>)
                                     } else return null
                                 }
                             )}
                         </div>
                     </div>
                 )
             }
         }
        
         export default connect (mapStateToProps)(Country)
*/