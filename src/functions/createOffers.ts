import OfferModel from '../core/offer'
import Api from '../service/Api'


export async function createOffers(): Promise<OfferModel[]> {
    const offers = await Api.getOffersStore()
    // return offers
    return offers.map((offer: any) => {
      return new OfferModel(offer.id, offer.name, offer.category, offer.link, offer.thumbnail, offer.price, offer.discount, offer.store)
    })
    console.log('offers: ', offers)
}