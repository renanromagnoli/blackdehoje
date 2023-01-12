import Image from 'next/image';
import {ItemModel} from '../../core/item';
import { Item } from '../Item';
import styles from './styles.module.scss'



export function Offers(offers: ItemModel[]) {
    const offersToRender = offers
    return offersToRender.map((offer: ItemModel) => {
            return (
                <Item key={offer.id} id={offer.id} name={offer.name} price={offer.price} oldPrice={offer?.oldPrice} thumbnail={offer.thumbnail}/>
            )
        }
    )
}
    