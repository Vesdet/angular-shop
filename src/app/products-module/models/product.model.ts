export enum Categories {
  Fruit = 'FRUIT',
  Vegetable = 'VEGETABLE',
  Meat = 'MEAT',
  Drink = 'DRINK'
}

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
  category?: Categories;
  description?: string;
  composition?: Array<string>;
}

export class Product implements ProductInterface {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public isAvailable: boolean,
    public category?: Categories,
    public description?: string,
    public composition?: Array<string>
  ) {
    this.name = name || 'Strange Product';
    this.price = price || NaN;
    this.isAvailable = isAvailable || false;
  }
}
