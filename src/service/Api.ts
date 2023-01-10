import axios from "axios";

export default {
    getCategoryOffers: async (category: number) => {
        const url = `${process.env.LMDURL}/${process.env.TOKEN}/offer/_category/${category}?sourceId=${process.env.SOURCE_ID}`
        const {data} = await axios.get(url)
        return data
    }
}