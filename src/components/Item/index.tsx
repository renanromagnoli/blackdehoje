import styles from './styles.module.scss'
import ShareIcon from '@mui/icons-material/Share'
import Link from 'next/link'

// import {ItemModel} from '../../core/item';

interface ItemProps {
    id: string
    thumbnail: string
    name: string
    link: string
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
            <Link href={`https://api.whatsapp.com/send?text=${props.link}`} legacyBehavior>
                <a target={'_blank'}>
                    <div className={styles.shareItem} title='Compartilhar no Whatsapp'><ShareIcon fontSize='medium' style={{color: 'green'}} /></div>
                </a>
            </Link>
            <Link href={props.link}  legacyBehavior>
                <a className={styles.link} target="_blank"  rel="noopener noreferrer">
                    <div className={styles.itemContent}>
                            <img src={props.thumbnail} alt="image" title='Acessar produto na loja'/>
                            <p className={styles.name} title='Acessar produto na loja'>{props.name}</p>
                            <div className={styles.itemFooter}>
                                {props.oldPrice == 0 ? '' : <div className={styles.oldPrice}>{props.oldPrice}</div> }
                                <div className={styles.price} title='Acessar produto na loja'>{reais}</div>
                                <a href="#" target='_blank' title='Filtrar por produtos dessa loja'>
                                    <img className={styles.storeThumb} src={props.storeThumb} alt="Store Thumbnail" />
                                </a>
                            </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}