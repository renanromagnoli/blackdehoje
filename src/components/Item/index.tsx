import styles from './styles.module.scss'
import ShareIcon from '@mui/icons-material/Share';

// import {ItemModel} from '../../core/item';

interface ItemProps {
    id: string
    thumbnail: string
    name: string
    oldPrice?: number | '0'
    price: number
    storeThumb: string
}


export function Item(props: ItemProps){

    const reais = props.price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <div className={styles.itemCard}>
            <div className={styles.shareItem} title='Compartilhar'><ShareIcon fontSize='medium' style={{color: 'green'}} /></div>
            <div className={styles.itemContent}>
                <img src={props.thumbnail} alt="image" />
                <p className={styles.name}>{props.name}</p>
                <div className={styles.itemFooter}>
                    {props.oldPrice == 0 ? '' : <div className={styles.oldPrice}>{props.oldPrice}</div> }
                    <div className={styles.price}>{reais}</div>
                    <img className={styles.storeThumb} src={props.storeThumb} alt="Store Thumbnail" />
                </div>
            </div>
        </div>
    )
}