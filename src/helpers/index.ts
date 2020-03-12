import { IProductItem } from 'interfaces';

const formatCurrency = (money: number | string) => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
    : `${money}`;
};

const getBestPrice = (product: IProductItem) => {
  return formatCurrency(product.price.sellPrice);
};

const getDiscountPercent = (product: IProductItem) => {
  let discount = 0;
  let supplierSalePrice = product.price.supplierSalePrice;
  let sellPrice = product.price.sellPrice;
  if (sellPrice && supplierSalePrice)
    discount = 100 - Math.round((sellPrice * 100) / supplierSalePrice);
  return discount;
};

export default {
  formatCurrency,
  getBestPrice,
  getDiscountPercent,
};
