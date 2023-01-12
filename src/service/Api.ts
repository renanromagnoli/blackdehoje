import axios from "axios";
import {ItemModel} from "../core/item";

const api = axios.create({
    baseURL: 'http://localhost:3456/'
})

export default {
    getCategoryOffers: async (category: number) => {
        const url = `${process.env.LMDURL}/${process.env.TOKEN}/offer/_category/${category}?sourceId=${process.env.SOURCE_ID}`
        const {data} = await axios.get(url)
        return data
    }, 

    getOffersStore: async () => {
        const {data} = await api.get(`offersStore`)
        // setOffers(data)
        console.log('ApiData: ', data.offers)
        return data.offers
    }
}