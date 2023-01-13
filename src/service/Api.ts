import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3456/'
})

export default {
    getCategoryOffers: async (categoryNumber: number) => {
        const url = `${process.env.DEV_LMD_URL}/category/_id/${categoryNumber}`
        const {data} = await axios.get(url, {
            params: {
                sourceId: `${process.env.SOURCE_ID}`
            }
        })
        return data.offers
    }, 

    getOffersStore: async () => {
        const {data} = await api.get(`offersStore`)
        // setOffers(data)
        console.log('ApiData: ', data.offers)
        return data.offers
    }, 
    
    getCategories: async () => {
        const {data} = await api.get('findCategories', {
            params: {
                hasOffer: true
            }
        })
        console.log('findCategories: ', data.categories)
        return data.categories
    },

    getSearchOffers: async (search: string) => {
        const url = `${process.env.DEV_LMD_URL}/_search`
        const {data} = await axios.get(url, {
            params: {
                sourceId: `${process.env.SOURCE_ID}`,
                keyword: search
            }
        })
        return data
    },

    getStores: async () => {
        const {data} = await api.get('findStores')
        console.log('Data Store: ', data)
        return data
    }
}