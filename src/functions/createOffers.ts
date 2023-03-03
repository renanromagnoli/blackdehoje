import { ReactNode, useContext } from 'react'
import { CategoriesContext } from '../contexts/CategoriesContext'
import { CategoryModel } from '../core/category'
import OfferModel from '../core/offer'
import Api from '../service/Api'

function setRandomNumberBetween(n1:number, n2:number) {
  const min = Math.ceil(n1)
  const max = Math.floor(n2)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function filterOffersLimitTime(offers, limitMinutesTime=1) {
  let dateNow = new Date()

  for(let [i, offer] of offers.entries()) {
    let offerDate = Object.values(offer)[0].dateReq
    let dif = Math.ceil((dateNow / 1000 / 60) - (offerDate / 1000 / 60))
    console.log('OFFER: ', Object.values(offer))
    console.log('DIF: ', dif)
    if(dif >= limitMinutesTime) {
      console.log('DELETE OFFER: ', Object.values(offer)[0])
      offers.splice(i, 1)
    }
  }
  return offers
}

export function createOffersModel(offers): Promise<OfferModel[]> {
    return offers?.map((offer: any) => {
      const model = new OfferModel(offer.id, offer.name, offer.category, offer.link, offer.thumbnail, offer.price, offer.discount, offer.store)
      if(offer.priceFrom) model.priceFrom = offer.priceFrom
      return model
    })
}

export async function createCategoryOffer(category: CategoryModel, page=1) {
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

async function createCategoryOfferWithRandomPage(category: CategoryModel, categoryOffersCtxt: ReactNode) {

  const totalPages = categoryOffersCtxt[category.name]?.totalPages
  let offersPage = categoryOffersCtxt[category.name]?.offersPage

  offersPage = offersPage ? filterOffersLimitTime(offersPage) : false

  
  if(offersPage && offersPage.length === totalPages) {
    return false
  }

  if(offersPage && offersPage.length < totalPages) {
    if(totalPages > 1) {
      let randomPage = setRandomNumberBetween(1, totalPages)
      let offersPageKeys = []

      for(const value of offersPage) {
        let key = Object.keys(value)[0]
        offersPageKeys.push(parseInt(key))
      }
      while(offersPageKeys.includes(randomPage)) {
        randomPage = setRandomNumberBetween(1, totalPages)
      }
      return await createCategoryOffer(category, randomPage)
    } else {
      return await createCategoryOffer(category)    
    }
  } 
  return await createCategoryOffer(category)    
}


export async function upOffersInCategoriesContext(categoriesSelected: CategoryModel[], categoriesOffersContext: JSX.Element) {
  const categoryOffersCtxt = categoriesOffersContext
  let newCategoriesOffers = categoryOffersCtxt
  
  if(categoriesSelected.length > 0) {
    for(const category of categoriesSelected) {
      const offersPage = await createCategoryOfferWithRandomPage(category, categoryOffersCtxt)
      
      if(offersPage) {
        const offersExist = categoryOffersCtxt[category.name]?.offersPage ?? []
        console.log('OFFERSEXIST: ', offersExist)
        // if(offersExist) {
        //   offersExist = filterOffersLimitTime(offersExist)
        // } else {
        //   offersExist = []
        // }
        
        newCategoriesOffers = {
          ...newCategoriesOffers,
          [category.name]: {
            show: true,
            offersPage: [ 
              ...offersExist,
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
      }
    }
    return newCategoriesOffers
  }
}