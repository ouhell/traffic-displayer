import React from 'react';
import { ItemSvgProps } from './svgs/types';

export type PickingItem = {
  name: string;
  src: React.FC<ItemSvgProps>;
  comp?: boolean;
  props?: {
    dimensions?: {
      height: number;
      width: number;
    };
    zIndex?: number;
    rotation?: number;
  };
};

export type PickingItemGroup = {
  groupname: string;
  items: PickingItem[];
};
