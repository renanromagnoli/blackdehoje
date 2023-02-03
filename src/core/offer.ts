import { CategoryModel } from "./category"
import StoreModel from "./store"

export default class OfferModel {
    #id: string
    #name: string
    #category: CategoryModel
    #link: string
    #thumbnail: string
    #price: number
    #priceFrom?: number
    #discount: number
    #store: StoreModel

    constructor(id:string, name:string, category:CategoryModel, link:string, thumbnail:string, price:number, discount:number, store: StoreModel) {
        this.#id = id
        this.#name = name
        this.#category = category
        this.#link = link
        this.#thumbnail = thumbnail
        this.#price = price
        // this.#priceFrom = priceFrom
        this.#discount = discount
        this.#store = store
    }
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get category() {
        return this.#category
    }
    get link() {
        return this.#link
    }
    get thumbnail() {
        return this.#thumbnail
    }
    get price() {
        return this.#price
    }
    get priceFrom() {
        return this.#priceFrom
    }
    get discount() {
        return this.#discount
    }
    get store() {
        return this.#store
    }

    set priceFrom(priceFrom) {
        this.#priceFrom = priceFrom
    }
    
}