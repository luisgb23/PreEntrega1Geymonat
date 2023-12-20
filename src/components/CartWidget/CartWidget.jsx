import cart from './assets/cart.svg'
import style from './CartWidget.module.css'

const CartWidget = () =>{
    return(
        <div className={style.wrapper}>
            <img src={cart} className={style.cart} alt="cart-widget" />
            <p className={style.counter}>0</p>
        </div>
    )
}

export default CartWidget