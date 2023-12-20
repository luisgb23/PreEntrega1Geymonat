import style from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () =>{
    return(
        <nav className={style.navbar}>
            <h3 className={style.title}>Ecommerce</h3>
            <div className={style.buttons}>
                <button className={style.category}>Celulares</button>
                <button className={style.category}>Tablets</button>
                <button className={style.category}>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar