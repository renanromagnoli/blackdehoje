import StoreModel from "../core/store";
import Api from "../service/Api";

interface StoreApi {
    id: number
    name: string
    thumbnail: string
    link: string
    hasOffer: number
}

export async function createStores() {
    const data = await Api.getStores()
    // console.log('data: ', data)
    // const stores = data?.stores
    return data?.stores?.map((store: StoreApi) => {
        return new StoreModel(store.id, store.name, store.thumbnail, store.link, store.hasOffer)
    })
    // return stores
}