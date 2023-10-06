/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { motion as m } from 'framer-motion';
// import { Collapsible } from 'renderer/components/ui/collapsible';
import { Settings } from 'lucide-react';

import { ScrollArea } from 'renderer/components/ui/scroll-area';
import { Button } from 'renderer/components/ui/button';
import { TooltipProvider } from 'renderer/components/ui/tooltip';

import { PickingItemGroup } from 'renderer/assets/pickingitemsTypes';
import { PickingItemsData } from 'renderer/assets/pickingitems';
import Group from './components/Group';

type Props = {
  open: boolean;
};

const groups: PickingItemGroup[] = PickingItemsData;

function TrafficPicker({ open }: Props) {
  return (
    <m.nav
      className="w-[20rem] h-full fixed top-0 left-0 bg-primary flex flex-col text-popover  "
      animate={{
        x: open ? '0' : '-100%',
        opacity: open ? 1 : 0.1,
        transition: {
          opacity: {
            duration: 0.2,
          },
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      //
    >
      <div className="h-[3rem] flex justify-end items-center pr-2 ">
        <Button
          variant="ghost"
          className="text-primary-foreground   hover:bg-accent-invert hover:text-accent-foreground-invert"
          size="sm"
        >
          <Settings className="h-3 w-3" />
        </Button>
      </div>

      <ScrollArea className="flex flex-col flex-1 " inverted>
        <TooltipProvider>
          {groups.map((grp, i) => {
            return (
              <Group
                name={grp.groupname}
                items={grp.items}
                key={grp.groupname}
                separator={i !== groups.length - 1}
              />
            );
          })}
        </TooltipProvider>
      </ScrollArea>
    </m.nav>
  );
}

export default TrafficPicker;
