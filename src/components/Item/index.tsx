import styles from './styles.module.scss'

import { useState } from "react";
import ItemModel from "../../core/item";

interface ItemProps {
    item: ItemModel
}

export function Item(props: ItemProps){
    const [item, setItem] = useState<ItemModel>(ItemModel.empty())

    return (
        <div className={styles.itemContent}>
            <div className={styles.thumb}>{item.thumbnail}</div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.oldPrice}>{item.oldPrice}</div>
            <div className={styles.price}>{item.price}</div>
        </div>
    )
}