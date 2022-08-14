import { Link }from 'react-router-dom';
import style from './css/notfound.module.css';

export default function NotFound (){
    <>
    <div className={style.container}>
        <h4 className={style.title}>ERROR 404</h4>
        <h2 className={style.subtitle}>"Toto, I've got a feeling we're not in Kansas anymore"</h2>
        <h1 className={style.name}>Doroty, The Wizard of Oz</h1>
    </div>
        < Link className={style.btnlink} to='/home'>HOME</Link>
    </>
}