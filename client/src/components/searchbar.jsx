import { React, useState } from 'react';
import { useDispatch } from "react-redux";
import { searchCountries } from "../actions";
import { RiSearch2Line } from "react-icons/ri"
import styles from './css/searchBar.module.css'

export default function SearchBar(){
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchCountries(search))
    }

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return(
            <> 
            <form  onSubmit={(e) => handleSubmit(e)}>
            <button className={styles.btn} type='submit'><RiSearch2Line/> Search</button>
            <input type="text" placeholder='Enter a country' value={search} onChange={e => handleChange(e)}/>
            <button className={styles.btn}>
                <a  href="/home">Reset</a>
            </button>
            </form>

            </>
    )
}