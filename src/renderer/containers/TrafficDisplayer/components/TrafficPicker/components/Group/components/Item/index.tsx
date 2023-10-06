import React from 'react';
import { PickingItem } from 'renderer/assets/pickingitemsTypes';
import { Button } from 'renderer/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'renderer/components/ui/tooltip';

function Item({ name, src: Comp }: PickingItem) {
  return (
    <div className="hover:bg-accent/10 rounded-sm p-1 cursor-pointer">
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
