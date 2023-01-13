import { Item } from "../components/Item";
import { CategoryModel } from "../core/category";
import { ItemModel } from "../core/item";
import Api from "../service/Api";

export async function createCategoriesOffers(categories: CategoryModel[]): Promise<ItemModel[]> {
    let newItems = categories?.map(async category => {
        let offer = await Api.getCategoryOffers(category.id)
        // offers.push(offer)
        return new ItemModel(category.id, category)
    return newItems
    })
    // console.log('offers: ', offers)
    // return offers
    
}