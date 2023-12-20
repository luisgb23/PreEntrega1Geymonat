import style from './ItemListContainer.module.css'
const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <h1 className={style.subTitle}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer