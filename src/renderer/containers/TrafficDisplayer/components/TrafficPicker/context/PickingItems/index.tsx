/* eslint-disable no-unused-vars */
import React, { useContext, createContext } from 'react';
import { type PickingItem } from 'renderer/assets/pickingitemsTypes';

import { type DisplayedItem } from '../../../RoadFeild';

type ItemSelectionContextType = {
  selectItem: (item: PickingItem) => void;
  selectDisplayItem: (id: string) => void;

  clearSelectedItem: () => void;
  clearSelectedDisplayItem: () => void;
  addDisplayedItem: (item: DisplayedItem) => void;
  removeDisplayedItem: (id: string) => void;
  modifyDisplayedItem: (
    id: string,
    modification: Partial<DisplayedItem>
  ) => void;
};

const initialState: ItemSelectionContextType = {
  selectItem: () => {},
  clearSelectedItem: () => {},
  addDisplayedItem: () => {},
  removeDisplayedItem: () => {},
  modifyDisplayedItem: () => {},
  clearSelectedDisplayItem: () => {},
  selectDisplayItem: () => {},
};

export const ItemSelectionContext =
  createContext<ItemSelectionContextType>(initialState);

export const ItemSelectionProvider = ItemSelectionContext.Provider;

export const useItemSelection = () => {
  return useContext(ItemSelectionContext);
};
