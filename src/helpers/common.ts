import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

const getQueryStringFromObj = (obj: any) => {
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');
};

const getUrlParamsObject = () => {
  const str = browserHistory.location.search;
  const pairs = str.slice(1).split('&');
  if (pairs.length === 1 && !pairs[0]) {
    return {};
  }
  const result: { [key: string]: string } = {};
  pairs.forEach(pair => {
    const newPair = pair.split('=');
    try {
      result[newPair[0]] = decodeURIComponent(newPair[1] || '');
    } catch (e) {
      result[newPair[0]] = newPair[1] || '';
    }
  });
  return result;
};

const onRedirect = (type: string, obj: {}) => {
  const filterQueryStr = getQueryStringFromObj(obj);
  const pathname = obj.hasOwnProperty('q')
    ? '/search'
    : browserHistory.location.pathname;
  if (type === 'push') {
    browserHistory.push({
      pathname: pathname,
      search: '?' + filterQueryStr,
    });
  }
  if (type === 'replace') {
    browserHistory.replace({
      pathname: pathname,
      search: '?' + filterQueryStr,
    });
  }
};

const cleanObject = (obj: any) => {
  if (!obj) {
    return {};
  }
  Object.keys(obj).forEach(k => !obj[k] && delete obj[k]);
  return obj;
};

const formatCurrency = (money: number | string) => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
    : `${money}`;
};
const getDiscountPercent = (finalPrice: number, oldPrice: number) => {
  let discount = 0;
  if (finalPrice && oldPrice) {
    discount = 100 - Math.round((finalPrice * 100) / oldPrice);
  }
  return discount;
};

export default {
  getUrlParamsObject,
  onRedirect,
  cleanObject,
  formatCurrency,
  getDiscountPercent,
};
