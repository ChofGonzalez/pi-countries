import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const ORDER_ALPHABETICAL = 'ORDER_ALPHABETICAL'
export const ORDER_POPULATION = 'ORDER_POPULATION'
export const ORDER_BY_CONTINENT = 'ORDER_BY_CONTINENT'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const BY_ACTIVITY = 'BY_ACTIVITY'
export const SET_LOADING = 'SET_LOADING'

export function fetchCountries(){
    return function(dispatch){
        axios.get(`/countries`)
        .then((countries) => {
            dispatch({  
                type: FETCH_COUNTRIES,
                payload: countries.data
            })
        })
    }
}

export function loadingState(payload){
    return {
        type: SET_LOADING,
        payload
    }
}


export function searchCountries(country){
    return function (dispatch){
        axios.get(`/countries?name=${country}`)
        .then(countries => {
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: countries.data
            })
        })
        .catch(e => {
            alert('¡Pais no encontrado o inexistente!')
        })  
    }
}



export function orderAlphabetical(order){
    return {
        type: ORDER_ALPHABETICAL,
        payload: order, 
    }
}

export function orderPopulation(order){
    return {
        type: ORDER_POPULATION,
        payload: order,
    }
}

export function orderByContinent(continent){
    return {
        type: ORDER_BY_CONTINENT,
        payload: continent
    }
}

export function getActivities(){
    return async function (dispatch){
        const respuesta = await axios.get('/activities');
        return dispatch({
            type: GET_ACTIVITIES,
            payload: respuesta.data
        })
    }
}

export function byActivity(activity){
    return {
        type: BY_ACTIVITY,
        payload: activity,
    }
}


//payload es lo que quiero retornar y el value es el valor que recibe la fc
//las action creators devuelven un paquete de acciones(retornan un objeto que representa una acción) que el reducer recibire. 