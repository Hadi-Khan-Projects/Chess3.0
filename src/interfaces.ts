import { VNode } from 'snabbdom';
import { Ctrl } from './ctrl';

export type Page = 'home' | 'game' | 'seek' | 'challenge' | 'tv' | 'inventoryaccess';

export type MaybeVNodes = (VNode | string | undefined)[];
export type Renderer = (ctrl: Ctrl) => MaybeVNodes;

export interface Game {
  [key: string]: any;
}
