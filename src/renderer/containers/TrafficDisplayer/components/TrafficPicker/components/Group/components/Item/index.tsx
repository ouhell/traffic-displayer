/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { PickingItem } from 'renderer/assets/pickingitemsTypes';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'renderer/components/ui/tooltip';
import { useItemSelection } from '../../../../context/PickingItems';

function Item({ name, src: Comp, comp, props }: PickingItem) {
  const { selectItem } = useItemSelection();
  return (
    <div
      className="hover:bg-accent/10 rounded-sm p-1 cursor-pointer"
      onMouseDown={() => {
        selectItem({
          name,
          src: Comp,
          comp,
          props,
        });
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Comp key={name} height={50} width={50} />
          </div>

          {/* <Button>hover</Button> */}
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export default Item;
