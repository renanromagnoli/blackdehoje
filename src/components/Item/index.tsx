import styles from './styles.module.scss'

// import {ItemModel} from '../../core/item';

interface ItemProps {
    id: string
    thumbnail: string
    name: string
    oldPrice?: number
    price: number
}


export function Item(props: ItemProps){

    return (
        <div className={styles.itemContent}>
            <img src={props.thumbnail} alt="image" />
            <div className={styles.name}>{props.name}</div>
            <div className={styles.oldPrice}>{props.oldPrice}</div>
            <div className={styles.price}>{props.price}</div>
        </div>
    )
}