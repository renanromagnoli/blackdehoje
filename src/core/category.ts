export class CategoryModel {
    #id: number
    #name: string
    #hasOffer: number
    #link: string

    constructor(id: number, name: string, hasOffer: number, link: string) {
        this.#id = id
        this.#name = name
        this.#hasOffer = hasOffer
        this.#link = link
    }

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get hasOffer() {
        return this.#hasOffer
    }
    get link() {
        return this.#link
    }
}