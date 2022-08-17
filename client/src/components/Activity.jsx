import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import style from "./css/activity.module.css"
import { getActivities, fetchCountries} from "../actions";
//import { RiCloseCircleLine } from "react-icons/ri";

export function validador (input){
    let error = {};

    if (!input.nombre){
        error.nombre = 'Ingrese un valor'
    } else if(input.nombre < 3){
        error.nombre = 'El nombre de la actividad debe tener 3 o más letras'
    }
  
    if(!input.dificultad){
        error.dificultad = 'Ingrese un valor'
    } 
   //  else if(input.dificultad !== Number){
   //       error.dificultad = "Debe ser un número"
   //   }
    else if(!/\d/.test(input.dificultad)){
        error.dificultad = 'Debe ser un número'
    }
     else if (input.dificultad < 1 || input.dificultad > 5){
        error.dificultad = 'Debe ser un valor entre 1 y 5'
    }

    if(!input.duracion){
        error.duracion = 'Ingrese un valor'
    } 
  //   else if(input.duracion !== Number){
   //       error.duracion = 'Debe ser un número'
   //   } 
    else if(!/\d/.test(input.duracion)){
        error.duracion = 'Debe ser un número'
    }
    else if(input.duracion < 1 || input.duracion > 24){
        error.duracion = 'Debe ser un valor entre 1 y 24'
    }
  
    if(!input.temporada){
        error.temporada = 'Seleccione un valor'
    }

    if(!input.pais){
        error.pais = 'Ingrese un país válido'
    }

    return error;
}

export default function AddActiviy(){
    const [activity, setActivity] = useState({
        nombre: '',
        dificultad: 1,
        duracion: 1,
        temporada: 'seleccionar',
        pais: []
    })
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    let history = useHistory();

    function handleChange(e){
        e.preventDefault();
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })

        let err = validador({...activity, [e.target.name]:e.target.value})
        setError(err)
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('/activities', activity)
        .then(() => {
            dispatch(fetchCountries())
            dispatch(getActivities())
            history.push('/home')

        })
    }

     useEffect(() => {
         dispatch(fetchCountries())
     },
     // eslint-disable-next-line
    [])

     useEffect(() => {
         dispatch(getActivities())
     },
     // eslint-disable-next-line
    [])

    //-----
    //  //todos los buscados
    // const [statePaises, setStatePaises] = useState([]) 
    //  //uso temporal
    // const [paisesNombres, setPaisesNombres] = useState([])
    
    //  async function buscado(e){
    //      try {
    //          const resultados = await axios.get(`/countries?name=${e.target.value}`)
    //          setStatePaises(resultados.data)
    //      } catch (error) {
    //          return error;
    //      }
    //  }

    //  function agregado(idPais, nombrePais){
    //      setActivity({
    //          ...activity,
    //          pais: activity.pais.indexOf(idPais) === -1 ? [...activity.pais, idPais] : [...activity.pais]
    //      })
    //      setPaisesNombres([...paisesNombres, {nombre: nombrePais, id: idPais}])
    //  }
    
    // function eliminado(countryId){//recibo el id del pais a borrar
    //     setActivity (prev => {
    //         return {
    //             ...prev,
    //             pais: activity.pais.filter(e => e !== countryId)
    //         }
    //     });
    // }

    //------



    return (
        <div className={style.container}>
            <Link className={style.link} to='/home'>Back</Link>
        <h2 className={style.titulo}> Crear actividad </h2>
        <form className={style.form} onSubmit={handleSubmit}>
             
           <label>Nombre</label>
           <input className={style.input} onChange={handleChange} name="nombre" type="text" value={activity.nombre} />
           {error.nombre && <p className={style.error}>{error.nombre}</p>}
         
           <br/>
            <label>Dificultad</label>
            <input className={style.input} min='1' max='5' onChange={handleChange} name="dificultad" type="number" value={activity.dificultad}/>
            {error.dificultad && <p className={style.error}>{error.dificultad}</p>}

            <br/>
            <label>Duracion</label>
            <input className={style.input} min='1' max='24' onChange={handleChange} name="duracion" type="number" value={activity.duracion}/>
            {error.duracion && <p className={style.error}>{error.duracion}</p>}

            <br/>
            <label>Temporada</label>
            <select  className={style.input} onChange={handleChange} name="temporada" type="text" value={activity.temporada}>
                <option value="seleccionar">Seleccionar...</option>
                <option value="invierno">Invierno</option>
                <option value="otoño">Otoño</option>
                <option value="primavera">Primavera</option>
                <option value="verano">Verano</option>
            </select>
            {error.temporada && <p className={style.error}>{error.temporada}</p>}

            <br/>
            <label>Pais</label>
            <input className={style.input} onChange={handleChange} name="pais" type="text" value={activity.pais}/>
            {error.pais && <p className={style.error}>{error.pais}</p>} 

            {/* <label htmlFor="pais"> País </label>
            <input type="text" id="pais" name="pais" onChange={buscado}/>
            {statePaises.length > 0 ?
            <> <h4>Encontrados</h4>
                <div className={style.container}>
                    <div id="paisesContainer">
                        <ul className={style.lista}>
                            {statePaises?.map((e,index)=>{
                                return (
                                        <li key={index}>{e.nombre}
                        <button className={style.btn} onClick={agregado}>Agregar</button>
                                  </li>)})}
                        </ul>
                    </div>
                </div>
            </> : null} */}
{/* 
            <br/>
            {activity.pais.length > 0 ?
                <> <h4>Agregados</h4>
                    <div className={style.container}>
                        <div>
                            <ul className={style.lista}>
                                {activity.pais?.map((e) => 
                 <li key={e.id}>{paisesNombres.find(el => el.id === e).nombre} 
                        <button className={style.btnEliminado} onClick={eliminado}>X</button>
                 </li>)}
                            </ul>
                        </div>
                    </div>
                </>: null}
         */}
            <br/> 
            <button className={style.btn} type="submit">Agregar actividad</button>
        
        </form>
    </div>)
}