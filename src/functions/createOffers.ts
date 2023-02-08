import { ReactNode } from 'react'
import { CategoryModel } from '../core/category'
import OfferModel from '../core/offer'
import Api from '../service/Api'

function setRandomNumberBetween(n1:number, n2:number) {
  return Math.floor(Math.random() * (n2 - n1) + n1)
}

function filterOffersLimitTime(offers, limitMinutesTime=10) {
  let dateNow = new Date()
  offers?.forEach((offer, i) => {
    let reqOfferMinutes = offer?.dataReq
    let dif = parseInt((dateNow / 1000 / 60) - (reqOfferMinutes / 1000 / 60))
    if(dif > limitMinutesTime) offers.splice(i, 1)
  })
  return offers
}


export function createOffersModel(offers): Promise<OfferModel[]> {
    return offers?.map((offer: any) => {
      const model = new OfferModel(offer.id, offer.name, offer.category, offer.link, offer.thumbnail, offer.price, offer.discount, offer.store)
      if(offer.priceFrom) model.priceFrom = offer.priceFrom
      return model
    })
}

export async function createCategoryOffer(category: CategoryModel, page: number) {
  let data = await Api.getCategoryOffers(category.id, page)
  if(data) {
    const modelOffers = createOffersModel(data.offers)
    return {
      dateReq: new Date(),
      offers: modelOffers,
      page,
      totalPage: data.pagination.totalPage
    }
  }
}

async function createCategoryOfferWithRandomPage(category: CategoryModel, totalPage: number) {
  if(totalPage > 1) {
    const totalPages = totalPage
    const randomPage = setRandomNumberBetween(1, totalPages)
    return await createCategoryOffer(category, randomPage)
  } else {
    return await createCategoryOffer(category, 1)    
  }
}



async function upCategoryOffersContext(category: CategoryModel, categoriesOffersContext: any){
  
  const categoryOffersCtxt = categoriesOffersContext
  const offersPage = await createCategoryOfferWithRandomPage(category, categoryOffersCtxt[category.name]?.totalPages)

  const offersTimeReview = filterOffersLimitTime(categoryOffersCtxt[category.name]?.offersPage)

  if(offersPage) {
    return [
      // ...categoryOffersCtxt,
      {
        [category.name]: {
          show: true,
          offersPage: [ 
            // ...offersTimeReview,
            {
              [offersPage.page]: {
                dateReq: offersPage.dateReq, 
                offers: offersPage.offers
              }
            }
          ]
          ,
          totalPages: offersPage.totalPage
        }
      }
    ]  
  }
}

export async function upOffersInCategoriesContext(categoriesSelected: CategoryModel[], categoriesOffersContext: JSX.Element, setCategoriesOffersContext: any) {
  if(categoriesSelected.length) {
    categoriesSelected.forEach(category => {
      let categoryOffer = upCategoryOffersContext(category, categoriesOffersContext)
      setCategoriesOffersContext(categoryOffer)
    })
  }
}