import {  Category } from './quality.model';
export class Skin extends Category{
  override id?: number;
  name: string;
  category:Category["id"];
  price: number;
  date: Date;
}
