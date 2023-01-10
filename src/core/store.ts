export default class StoreModel {
    #id: number
    #name: string
    #thumbnail: string
    #link: string
    #hasOffer: number

    constructor(id: number, name: string, thumbnail:string, link:string, hasOffer:number) {
        this.#id = id
        this.#name = name
        this.#thumbnail = thumbnail
        this.#link = link
        this.#hasOffer = hasOffer
    }

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get thumbnail() {
        return this.#thumbnail
    }
    get link() {
        return this.#link
    }
    get hasOffer() {
        return this.#hasOffer
    }

}