# ~Task2~

Split application into several Modules

* Core module - LocalStorage service
* Shared module - ***Highlight directive*** (path: `src/app/shared-module/directives/highlight.directive.ts`)
* Products module - Product and Product-list components, ProductsService
* Card module - Card and Card-item components, CardService

## Core module
### LocalStorageService
path: `src/app/core-module/servises/local-storage.service.ts`

Custom decorator checkExceptions() 
Methods for working with localstorage (convert JS data to JSON and inverse it)

## Products module

Add methods to ***ProductService***: `addProfuct`, `changeQuantityOfProduct`

## Card Module

* Add ***Purchase*** model (path: `src/app/card-module/models/purchase.model.ts`)
* Add quantity of products, change product quantity logic (in service)
* Add card-item component
* Add buttons of change quantity and remove Purchase to CardItemComponent

## Additional logic

Warning when user remove Purchase from card:
Used:
1. template variables (CardComponent)
2. ngClass and ngStyle directives (CardComponent, CardItemComponent)
3. ngOnDestroy lifecycle method for emit event to parent component (CardItemComponent)

# ~Task1~
## Model
path: `src/app/products-module/models/product.model.ts`

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
path: `src/app/products-module/servises/product.service.ts`

It has private field with products in shop, methods for get all products and create product by name

### Card service
path: `src/app/card-module/servises/card.service.ts`

It has private field with purchases array and **purchasesChange$** EventEmitter for emit changes in purchases array

Also, it has methods for working with purchase array (get, add, clear)

Moreover, service save data in localstorage and get this data from localstorage after reload page

## Components
### Product
path: `src/app/products-module/product/**.*`

It has 2 input fields: _product_: **Product** and _isReadOnly_: boolean (for display with Buy button or w/o it)

_onBuy_ method: call cardService method for add product to purchases

### Product-list
path: `src/app/products-module/product-list/**.*`

It get all products from productsService and display them using *ngFor directive and Product comp

### Card
path: `src/app/card-module/card/**.*`

It has array of products in card and them total price. Display them using *ngFor directive and Product comp

It subscribe to **purchasesChange$** from cardService and update card on each changes in cardService


