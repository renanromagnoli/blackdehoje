import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { ItemModel } from "../../core/item";
import { Item } from "./Item";

import styles from './styles.module.scss'

function getAllOffers(offersContext) {
    let offersListToShow = []
    const all = Object.values(offersContext)
    console.log('all: ', all)
    for(const data of all) {
        console.log('data LENGTH: ', Object.values(data).length)
        if(Object.values(data).length > 1 && data.show == true) {
            for(const page of data.offersPage) {
                console.log('page: ', Object.values(page))
                for(const offers of Object.values(page)) {
                    console.log('OFFERS: ', offers.offers)
                    for(const offer of offers.offers) {
                        console.log('OFFER!!!: ', offer)
                        offersListToShow.push(offer)
                    }
                }
            }
        }
    }
    console.log('offersListToShow: ', offersListToShow)
    return offersListToShow
}

export function Items() {

    const {categoriesOffers} = useContext(CategoriesContext)
    const [offers, setOffers] = useState([])

    useEffect(() => {
        let allOffers = getAllOffers(categoriesOffers)
        console.log('ALLOFFERS: ', allOffers)
        setOffers(allOffers)
    }, [categoriesOffers])
    
    return (
        <div className={styles.items}>
            {
                offers.map((offer: ItemModel) => {
                return <Item 
                            key={offer.id}
                            id={offer.id} 
                            name={offer.name} 
                            price={offer.price}  
                            thumbnail={offer.thumbnail}
                            oldPrice={offer.oldPrice}
                            storeThumb={offer.store.thumbnail}
                            link={offer.link}
                        />
                })
            }
        </div>
        
    )
}