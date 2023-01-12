import {Item} from '../components/Item'
import {ItemModel} from '../core/item'
import Api from '../service/Api'


export async function createOffers(): Promise<ItemModel[]> {
    const offers = await Api.getOffersStore()
    // return offers
    return offers.map((offer: ItemModel) => {
      return new ItemModel(offer.id, offer.name, offer.category, offer.link, offer.thumbnail, offer.price, offer.oldPrice)
    })
    console.log('offers: ', offers)
}