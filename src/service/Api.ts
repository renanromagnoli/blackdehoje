import axios from "axios";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

const api = axios.create({
    baseURL: 'http://localhost:3456/'
})

export default {
    getCategoryOffers: async (categoryNumber: number, page: number) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_DEV_LMD_URL}/offer/_category/${categoryNumber}`
            const {data} = await axios.get(url, {
                params: {
                    sourceId: `${process.env.NEXT_PUBLIC_SOURCE_ID}`, 
                    page
                }
            })
            return data
        } catch (error) {
            console.error(error)
        }
    }, 
    
    getOffersStore: async () => {
        const {data} = await api.get(`offersStore`)
        // setOffers(data)
        // console.log('ApiData: ', data.offers)
        return data.offers
    }, 
    
    getCategories: async () => {
        const url = `${process.env.NEXT_PUBLIC_DEV_LMD_URL}/category/_all`
        const {data} = await axios.get(url, {
            params: {
                sourceId: `${process.env.NEXT_PUBLIC_SOURCE_ID}`, 
                hasOffer: true
            }
        })
        // console.log('findCategories: ', data.categories)
        return data.categories
    },
    // getCategories: async () => {
    //     const url = `${process.env.NEXT_PUBLIC_DEV_LMD_URL}/category/_all?`
        
    //     const response = await fetch(url + new URLSearchParams({
    //         sourceId: process.env.NEXT_PUBLIC_SOURCE_ID, 
    //         hasOffer: true
    //         }), {
    //             next: {
    //                 revalidate: 30,
    //             },
    //         }
    //     )
    //     const data = await response.json()
    //     console.log('findCategories: ', data.categories)
    //     return data.categories
    // },

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
        if(data) {
            // console.log('Data Store: ', data)
            return data
        }
    }
}