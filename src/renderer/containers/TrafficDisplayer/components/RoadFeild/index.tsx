/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { v4 } from 'uuid';

import { PickingItem } from 'renderer/assets/pickingitemsTypes';
import { useItemSelection } from '../TrafficPicker/context/PickingItems';

export type DisplayedItem = {
  id: string;
  item: PickingItem;
  position: {
    x: number;
    y: number;
  };
  state: {
    rotation: number;
  };
};

type Props = {
  displayedItems: DisplayedItem[];
  selectedPickingItem: PickingItem | null;
  selectedDisplayedItem: string | null;
};

function RoadField({
  displayedItems,
  selectedPickingItem,
  selectedDisplayedItem,
}: Props) {
  const {
    clearSelectedItem,
    addDisplayedItem,
    removeDisplayedItem,
    selectDisplayItem,
    clearSelectedDisplayItem,
    modifyDisplayedItem,
  } = useItemSelection();
  const moveSelectedDisplayedItem = React.useCallback(
    (x: number, y: number) => {
      if (!selectedDisplayedItem) return;
      modifyDisplayedItem(selectedDisplayedItem, {
        position: {
          x,
          y,
        },
      });
    },
    [selectedDisplayedItem, modifyDisplayedItem]
  );
  return (
    <div
      className="h-screen w-screen relative "
      onMouseMove={(e) => moveSelectedDisplayedItem(e.clientX, e.clientY)}
      onMouseLeave={clearSelectedDisplayItem}
      onMouseUp={clearSelectedDisplayItem}
      onMouseEnter={(e) => {
        if (selectedPickingItem) {
          addDisplayedItem({
            id: v4(),
            item: selectedPickingItem,
            position: {
              x: e.clientX,
              y: e.clientY,
            },
            state: {
              rotation: 0,
            },
          });
          clearSelectedItem();
        }
      }}
    >
      {displayedItems.map((ditem) => {
        return (
          <div
            className="absolute translate-x-[-50%] translate-y-[-50%] cursor-pointer"
            style={{
              top: ditem.position.y,
              left: ditem.position.x,
            }}
            onMouseDown={() => selectDisplayItem(ditem.id)}
            onContextMenu={(e) => {
              e.preventDefault();
              removeDisplayedItem(ditem.id);
            }}
          >
            <ditem.item.src
              key={ditem.id}
              height={ditem.item.props?.dimensions?.height ?? 80}
              width={ditem.item.props?.dimensions?.width ?? 80}
            />
            {/* {ditem.item.name} */}
          </div>
        );
      })}
    </div>
  );
}

export default RoadField;
