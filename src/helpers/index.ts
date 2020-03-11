import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

const formatCurrency = (money: number | string) => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
    : `${money}`;
};
const getBestPrice = (product: any) => {
  // Logic caculate best price here

  return formatCurrency(product.price.sellPrice);
};

const getProductName = (product: any) => {
  return product.displayName ? product.displayName : product.name;
};

export default {
  getBestPrice,
  getProductName,
  formatCurrency,
};
