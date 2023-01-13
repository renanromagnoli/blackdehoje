import { CategoryModel } from "../core/category";
import Api from "../service/Api";

interface CategoriesParams{
    id: number
    name: string
    hasOffer: number
    link: string
}

export async function createCategories(): Promise<CategoryModel[]> {
    const categories = await Api.getCategories()
    return categories.map((category: CategoriesParams) => {
        return new CategoryModel(category.id, category.name, category.hasOffer, category.link)
    })
}