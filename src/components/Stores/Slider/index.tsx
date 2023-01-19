import { ReactNode } from 'react'
import {Swiper, SwiperProps} from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper';
// import StoreModel from '../../../core/store'
// import { Store } from '../Store'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

export function Slider({settings, children}: SliderProps) {

    return (

        <Swiper modules={[Navigation, A11y, Scrollbar]} {...settings}>
            {
                // stores.map((store: StoreModel, i) => {
                //     return (
                //         <SwiperSlide key={i}>
                //             <Store store={store}/>
                //         </SwiperSlide>
                //     )
                // })
                children
            }
        </Swiper>
    )
}
