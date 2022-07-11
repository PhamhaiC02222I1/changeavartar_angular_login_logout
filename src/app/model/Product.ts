import {Category} from './Category';

export class Product{
  private nameProduct:string;
  private description:string;
  private avatarProduct:string;
  private category:Category;


  constructor(nameProduct: string, description: string, avatarProduct: string, category: Category) {
    this.nameProduct = nameProduct;
    this.description = description;
    this.avatarProduct = avatarProduct;
    this.category = category;
  }
}
