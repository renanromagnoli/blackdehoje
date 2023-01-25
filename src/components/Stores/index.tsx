import styles from './styles.module.scss'
import StoreModel from "../../core/store";
import { Store } from './Store';
import { Slider } from './Slider';

import {SwiperProps, SwiperSlide} from 'swiper/react'
import { useContext } from 'react';
import { StoresContext } from '../../contexts/StoresContext';

interface StoresProps {
    stores: StoreModel[]
}

export function Stores({stores}: StoresProps) {

    const {listSelectedStores} = useContext(StoresContext)

    const slideSettings: SwiperProps = {
        spaceBetween: 10,
        slidesPerView: 10,
        navigation: true,
        pagination: {
            clickable: true
        },
        loop: true,
        loopPreventsSlide: true,
        autoplay: true
        // loopAdditionalSlides: 10
        // effect: 'fade'
    }

    return (
        <div className={styles.storesContent}>
            <Slider settings={slideSettings}>
                {/* <SwiperSlide>
                    <h1>Teste Slide</h1>
                </SwiperSlide> */}

                {stores.map(store => {
                    if(store.hasOffer >= 12) {
                        if(listSelectedStores.includes(store) == false) {
                            return (
                                <SwiperSlide>
                                    <Store key={store.id} store={store}/>
                                </SwiperSlide>
                            )
                        }
                    }      
                })}
            </Slider>
        </div>
    )
}