interface PurchaseInterface {
  productId: number;
  productName: string;
  price: number;
  count: number;
}

export class Purchase implements PurchaseInterface {
  constructor(
    public productId: number,
    public productName: string,
    public price: number,
    public count: number
  ) {}
}
