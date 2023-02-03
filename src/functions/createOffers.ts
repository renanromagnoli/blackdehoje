import { CategoryModel } from '../core/category'
import OfferModel from '../core/offer'
import Api from '../service/Api'


export async function createOffersModel(offers): Promise<OfferModel[]> {
    return offers.map((offer: any) => {
      const model = new OfferModel(offer.id, offer.name, offer.category, offer.link, offer.thumbnail, offer.price, offer.discount, offer.store)
      if(offer.priceFrom) model.priceFrom = offer.priceFrom
      return model
    })
}

export async function createCategoryOffer(category: CategoryModel, page=1) {
  let categoryOffers = await Api.getCategoryOffers(category.id, page)
  if(categoryOffers) {
    return {
      [category.name]: {
        show: true,
        pagination: {page: categoryOffers.pagination.page, dateReq: new Date(), offers: categoryOffers.offers},
        totalPages: categoryOffers.pagination.totalPage
      }
    }
  }
}

export async function createCategoriesOffers(categories: CategoryModel[], categoriesOffers: OfferModel[]){
  categories?.map(async category => {
      let req = await Api.getCategoryOffers(category.id)
      if(req)
      // offers.push(offer)
      return {
        ...categoriesOffers,
        [category.name]: {
          show: true,
          pagination: {page: req.pagination.page, dateReq: new Date(), offers: req.offers},
          totalPages: req.pagination.totalPage
        }
      }
  })
  // console.log('offers: ', offers)
  // return offers
  
}