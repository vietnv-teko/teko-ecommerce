const formatCurrency = (money: number | string) => {
  return money
    ? money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
    : `${money}`;
};

export default {
  formatCurrency,
};
