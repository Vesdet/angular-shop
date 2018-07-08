## Model
path: `src/app/model/product.model.ts`

Enum with categories: _Fruit_, _Vegetable_, _Meat_, _Drink_

Interface **ProductInterface** with follow fields:
- name: string
- price: number
- isAvailable: boolean
- category?: Categories
- description?: string
- composition?: Array<string>

Class **Product** implements **ProductInterface** with default properties

## Services
### Products service
path: `src/app/servises/products.service.ts`

It has private field with products in shop, methods for get all products and create product by name

### Card service
path: `src/app/servises/card.service.ts`

It has private field with purchases array and **purchasesChange$** EventEmitter for emit changes in purchases array

Also, it has methods for working with purchase array (get, add, clear)

Moreover, service save data in localstorage and get this data from localstorage after reload page

## Components
### Product
path: `src/app/product/**.*`

It has 2 input fields: _product_: **Product** and _isReadOnly_: boolean (for display with Buy button or w/o it)

_onBuy_ method: call cardService method for add product to purchases

### Product-list
path: `src/app/product-list/**.*`

It get all products from productsService and display them using *ngFor directive and Product comp

### Card
path: `src/app/card/**.*`

It has array of products in card and them total price. Display them using *ngFor directive and Product comp

It subscribe to **purchasesChange$** from cardService and update card on each changes in cardService


