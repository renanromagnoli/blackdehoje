import axios from "axios";

export default {
    getCategoryOffers: async (category: number) => {
        const url = `http://sandbox-api.lomadee.com/v3/${process.env.TOKEN}/offer/_category/${category}?sourceId=${process.env.SOURCE_ID}`
        const {data} = await axios.get(url)
        return data
    }
}