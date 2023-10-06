/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import { Plus, Minus } from 'lucide-react';
import {
  CollapsibleTrigger,
  Collapsible,
  CollapsibleContent,
} from 'renderer/components/ui/collapsible';
import React from 'react';
import { Separator } from 'renderer/components/ui/separator';
import { PickingItem } from 'renderer/assets/pickingitemsTypes';
import { Button } from 'renderer/components/ui/button';
import Item from './components/Item';

type Props = {
  name: string;
  items: PickingItem[];
  separator?: boolean;
};

function Group({ name, items, separator = false }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex justify-between items-center px-2">
          <h2 className="font-bold text-sm">{name}</h2>
          <CollapsibleTrigger asChild>
            <Button size="sm" variant="ghost" className="rounded-none">
              {isOpen ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-wrap gap-4 p-4 bg-muted-foreground">
            {items.map((item) => {
              return <Item {...item} key={item.name} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
      {separator && !isOpen && (
        <div className="px-2">
          <Separator orientation="horizontal" decorative />
        </div>
      )}
    </>
  );
}

export default Group;
