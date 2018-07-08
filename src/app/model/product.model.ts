export enum Categories {
  Fruit = 'FRUIT',
  Vegetable = 'VEGETABLE',
  Meat = 'MEAT',
  Drink = 'DRINK'
}

interface ProductInterface {
  name: string;
  price: number;
  isAvailable: boolean;
  category?: Categories;
  description?: string;
  composition?: Array<string>;
}

export class Product implements ProductInterface {
  name = 'Strange Product';
  price = NaN;
  isAvailable = false;

  constructor(
    name?: string,
    price?: number,
    isAvailable?: boolean,
    public category?: Categories,
    public description?: string,
    public composition?: Array<string>
  ) {
    if (name) { this.name = name; }
    if (price) { this.price = price; }
    if (isAvailable) { this.isAvailable = isAvailable || false; }
  }
}
