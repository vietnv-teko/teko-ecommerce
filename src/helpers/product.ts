import { FlashSale } from 'interfaces/FlashSale';

const getCountItemTextFlashSale = (flashSale: FlashSale) => {
  if (!flashSale) {
    return '';
  }
  const remain = flashSale.total - flashSale.used;
  if (remain > 5) {
    return `Đã bán ${flashSale.used}`;
  }
  if (remain <= 5 && remain > 0) {
    return `Còn lại ${remain}`;
  }

  return 'Đã bán hết';
};
export default {
  getCountItemTextFlashSale,
};
