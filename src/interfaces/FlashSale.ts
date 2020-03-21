export interface FlashSale {
  channel: string;
  discountPercent: number;
  terminal: string;
  total: 20;
  used: 0;
  definition: Definition;
}
interface Definition {
  description: string;
  endedAt: string;
  id: number;
  name: string;
  paymentMethods: string[];
  startedAt: string;
  timeRanges: any[];
  type: any;
  govRegister: boolean;
}
