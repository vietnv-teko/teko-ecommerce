import { commonHelper } from './index';

const { getUrlParamsObject, formatCurrency } = commonHelper;

const getActiveFiltersByType = (
  activeFilterCodes: Array<string>,
  allFilterOptions: Array<any>,
  type: string,
) => {
  if (!activeFilterCodes.length) return [];

  let arr = [];
  for (let i = 0; i < activeFilterCodes.length; i++) {
    let obj = allFilterOptions.find(
      (data: any) => data.option === activeFilterCodes[i],
    );
    if (obj) {
      arr.push({
        type: type,
        option: obj.option,
        count: obj.count,
        value: obj.value,
      });
    }
  }
  return arr;
};

const getActiveFilters = (sortItemList: any, brands: any, categories: any) => {
  const FILTER_TYPE = {
    brand: 'brand',
    category: 'category',
    hasPromotion: 'hasPromotion',
    price: 'price',
    sort: 'sort',
  };
  const paramsObject = getUrlParamsObject();
  const filterHasPromotions = paramsObject.hasPromotions;
  const filterBrands = paramsObject.brands
    ? paramsObject.brands.split(',')
    : [];
  const filterCategories = paramsObject.sellerCategories
    ? paramsObject.sellerCategories.split(',')
    : [];
  const filterSort = paramsObject._sort;
  const filterOrder = paramsObject._order;
  const filterPriceGte = paramsObject.bestPrice_gte;
  const filterPriceLte = paramsObject.bestPrice_lte;
  let arr = [];
  if (filterHasPromotions) {
    arr.push({
      type: FILTER_TYPE.hasPromotion,
      option: '',
      count: null,
      value: 'Sản phẩm có khuyến mãi',
    });
  }
  if (filterPriceGte && filterPriceLte) {
    arr.push({
      type: FILTER_TYPE.price,
      value: `${formatCurrency(parseInt(filterPriceGte))} - ${formatCurrency(
        parseInt(filterPriceLte),
      )}`,
    });
  }
  if (filterSort && filterOrder) {
    let sortParams = '&_sort=' + filterSort + '&_order=' + filterOrder;
    const sortItem: any = sortItemList.find(
      (i: any) => i.params === sortParams,
    );
    arr.push({
      type: FILTER_TYPE.sort,
      option: '',
      count: null,
      value: sortItem ? sortItem.name : '',
    });
  }
  let activeBrands = getActiveFiltersByType(
    filterBrands,
    brands,
    FILTER_TYPE.brand,
  );

  let activeCategories = getActiveFiltersByType(
    filterCategories,
    categories,
    FILTER_TYPE.category,
  );
  return [...arr, ...activeBrands, ...activeCategories];
};

export default {
  getActiveFilters,
};
