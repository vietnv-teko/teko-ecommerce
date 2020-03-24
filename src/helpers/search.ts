import { commonHelper } from './index';

const { onRedirect, getUrlParamsObject, cleanObject } = commonHelper;

const onSearch = (type: string, object: {}) => {
  // Clear Filter
  if (!Object.keys(object).length) {
    onRedirect('push', {});
  }
  const queryStringObj = getUrlParamsObject();
  if (
    queryStringObj.hasOwnProperty('_page') &&
    !object.hasOwnProperty('_page')
  ) {
    delete queryStringObj._page;
  }
  onRedirect(type, cleanObject(object));
};

// Remove filter value if It already in search's params
const cleanFilter = (filters: any[]) => {
  const queryStringObj = getUrlParamsObject();
  if (!Object.keys(queryStringObj).length) {
    return filters;
  }
  Object.keys(queryStringObj).forEach(item => {
    for (let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      if (filter.code === item) {
        for (let j = 0; j < filter.values.length; j++) {
          if (filter.values[j].option === queryStringObj[item]) {
            filter.values.splice(j, 1);
          }
        }
      }
    }
  });
  return filters;
};

const onSort = (_sort: string) => {
  const queryStringObj = getUrlParamsObject();
  let _order = queryStringObj._order ? queryStringObj._order : 'desc';
  if (_sort === 'bestPrice') {
    _order === 'desc' ? (_order = 'asc') : (_order = 'desc');
  }
  if (_sort) {
    onSearch('push', {
      _sort: _sort,
      _order: _order,
    });
  } else {
    delete queryStringObj._sort;
    delete queryStringObj._order;
    onRedirect('push', queryStringObj);
  }
};

export default {
  onSearch,
  cleanFilter,
  onSort,
};
