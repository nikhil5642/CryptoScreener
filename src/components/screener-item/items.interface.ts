export interface HeaderItemInterface {
  title: string;
  style: any;
  onClick: (key: string) => any;
}

export interface TickerItemInterface {
  symbol: string;
  name: string;
  price: number;
  change: number;
}
