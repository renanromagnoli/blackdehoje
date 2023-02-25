import { ReactNode, useContext } from 'react'
import { CategoriesContext } from '../contexts/CategoriesContext'
import { CategoryModel } from '../core/category'
import OfferModel from '../core/offer'
import Api from '../service/Api'

function setRandomNumberBetween(n1:number, n2:number) {
  return Math.floor(Math.random() * (n2 - n1) + n1)
}

function filterOffersLimitTime(offers, limitMinutesTime=1) {
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

export async function createCategoryOffer(category: CategoryModel, page=1) {
  let data = await Api.getCategoryOffers(category.id, page)
  console.log('dataApi: ', data)
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
    return await createCategoryOffer(category)    
  }
}



// export async function upCategoryOffersContext(category: CategoryModel, categoriesOffersContext: any){
  
//   const categoryOffersCtxt = categoriesOffersContext

//   const offersPage = await createCategoryOfferWithRandomPage(category, categoryOffersCtxt[category.name]?.totalPages)
//   // const offersPage = await createCategoryOffer(category, 1)
//   console.log('offersPage: ', offersPage)

//   // const offersTimeReview = filterOffersLimitTime(categoryOffersCtxt[category.name]?.offersPage)
//   const oldOffers = categoryOffersCtxt[category.name]?.offersPage
//   const offersExist = oldOffers ? oldOffers : []
//   console.log('offersExist: ', offersExist)
  
//   if(offersPage) {
//     return {
//       ...categoryOffersCtxt,
//       [category.name]: {
//         show: true,
//         offersPage: [ 
//           ...offersExist,
//           {
//             [offersPage.page]: {
//               dateReq: offersPage.dateReq, 
//               offers: offersPage.offers
//             }
//           }
//         ]
//         ,
//         totalPages: offersPage.totalPage
//       }
//     }
//   }
// }

export async function upOffersInCategoriesContext(categoriesSelected: CategoryModel[], categoriesOffersContext: JSX.Element) {
  
  const categoryOffersCtxt = categoriesOffersContext
  
  let newCategoriesOffers = categoryOffersCtxt
  
  if(categoriesSelected.length > 0) {
    
    // categoriesSelected.forEach(async category => {

    for(const category of categoriesSelected) {
      
      const offersPage = await createCategoryOfferWithRandomPage(category, categoryOffersCtxt[category.name]?.totalPages)
      console.log('offersPage: ', offersPage)
      
      // const oldOffers = categoryOffersCtxt[category.name]?.offersPage
      const oldOffers = filterOffersLimitTime(categoryOffersCtxt[category.name]?.offersPage)
      const offersExist = oldOffers ? oldOffers : []
      console.log('offersExist: ', offersExist)
      
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
      console.log('newCategoriesOffers: ', newCategoriesOffers)
      // return newCategoriesOffers
      // let categoryOffer = await upCategoryOffersContext(category, categoriesOffersContext)
    }
    console.log('!!!!!!!!!!!: ', newCategoriesOffers)
    return newCategoriesOffers
    // console.log('categoriesOffers: ', newCategoriesOffers)
    // setCategoriesOffers(newCategoriesOffers)
    // return newCategoriesOffers
  }
  // return {}
}