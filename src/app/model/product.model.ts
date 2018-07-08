export enum Categories {
  Fruit = 'FRUIT',
  Vegetables = 'VEGETABLE',
  Meat = 'MEAT',
  Drink = 'DRINK'
}

interface ProductInterface {
  name: string;
  price: number;
  isAvalable: boolean;
  category?: Categories;
  description?: string;
  composition?: Array<string>;
}

export class Product implements ProductInterface {
  constructor(
    public name: string,
    public price: number,
    public isAvalable: boolean,
    public category?: Categories,
    public description?: string,
    public composition?: Array<string>
  ) {
    this.name = name || '';
    this.price = price || NaN;
    this.isAvalable = isAvalable || false;
  }
}
