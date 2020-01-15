import { Description } from './description.model';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    descriptions: Description[];
  }