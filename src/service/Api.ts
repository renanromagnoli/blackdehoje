import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3456/'
})

export default {
    getCategoryOffers: async (category: number) => {
        const url = `${process.env.LMDURL}/${process.env.TOKEN}/offer/_category/${category}?sourceId=${process.env.SOURCE_ID}`
        const {data} = await axios.get(url)
        return data
    }, 
    getOffersStore: async (store: number) => {
        const {data} = await api.get('offersStore')
        console.log(data)
        return data
    }
}