export interface IProductItem {
  displayName?: string;
  sku?: string;
  name?: string;
  url?: string;
  images?: Image[];
  price: {
    sellPrice: number;
    supplierSalePrice: number;
  };
}

export interface Image {
  url: string;
  priority: number;
  path: string;
}
