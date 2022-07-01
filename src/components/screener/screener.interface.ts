import {TickerItemInterface} from './../screener-item/items.interface';
export interface ScreenerInterface {
  loading: boolean;
  tokenList: TickerItemInterface[];
}

export type ScreenerParams = Record<string, null>;
