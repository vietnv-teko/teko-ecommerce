import { createBrowserHistory } from 'history';
import { IProductItem } from 'interfaces';

const formatCurrency = (money: number | string) => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
    : `${money}`;
};

const getBestPrice = (product: IProductItem) => {
  return formatCurrency(product.price.sellPrice);
};

export const browserHistory = createBrowserHistory();

const getDiscountPercent = (finalPrice: number, oldPrice: number) => {
  let discount = 0;
  if (finalPrice && oldPrice) {
    discount = 100 - Math.round((finalPrice * 100) / oldPrice);
  }
  return discount;
};

export const cleanObject = (obj: any) => {
  if (!obj) {
    return {};
  }
  Object.keys(obj).forEach(k => !obj[k] && delete obj[k]);
  return obj;
};

export default {
  formatCurrency,
  getBestPrice,
  getDiscountPercent,
};
