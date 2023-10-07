import React from 'react';
import { useTheme } from 'renderer/components/ThemeProvider';
import { Menu, ArrowBigLeft, Sun, Moon } from 'lucide-react';
import { Button } from 'renderer/components/ui/button';
import { PickingItem } from 'renderer/assets/pickingitemsTypes';
import { cn } from 'renderer/lib/util';
import TrafficPicker from './components/TrafficPicker';

import RoadField, { DisplayedItem } from './components/RoadFeild';
import { ItemSelectionProvider } from './components/TrafficPicker/context/PickingItems';

// type Props = {};

function TrafficDisplayer() {
  const { theme, setTheme } = useTheme();
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [displayedItems, setDisplayedItems] = React.useState<DisplayedItem[]>(
    []
  );
  const [selectedDisplayedItem, setSelectedDisplayedItem] = React.useState<
    string | null
  >(null);
  const [selectedPickingItem, setSelectedPickingItem] =
    React.useState<PickingItem | null>(null);
  const changeTheme = React.useCallback(
    (currentTheme: typeof theme) => {
      if (currentTheme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    },
    [setTheme]
  );

  const selectItem = (item: PickingItem) => {
    setSelectedPickingItem(item);
  };

  const selectDisplayItem = (id: string) => [setSelectedDisplayedItem(id)];

  const clearSelectedItem = () => {
    setSelectedPickingItem(null);
  };
  const clearSelectedDisplayItem = () => {
    setSelectedDisplayedItem(null);
  };

  const addDisplayedItem = (item: DisplayedItem) => {
    setDisplayedItems((old) => [...old, item]);
    setSelectedDisplayedItem(item.id);
  };

  const removeDisplayedItem = (id: string) => {
    setDisplayedItems((old) => old.filter((item) => item.id !== id));
    if (id === selectedDisplayedItem) setSelectedDisplayedItem(null);
  };

  const modifyDisplayedItem = (
    id: string,
    modification: Partial<DisplayedItem>
  ) => {
    setDisplayedItems((old) =>
      old.map((item) => {
        if (item.id === id) {
          return { ...item, ...modification };
        }
        return item;
      })
    );
  };

  return (
    <main className="select-none">
      <ItemSelectionProvider
        value={{
          selectItem,
          clearSelectedItem,
          addDisplayedItem,
          removeDisplayedItem,
          modifyDisplayedItem,
          clearSelectedDisplayItem,
          selectDisplayItem,
        }}
      >
        <TrafficPicker open={pickerOpen} />
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setPickerOpen(!pickerOpen);
          }}
          className={cn(
            'fixed top-2 left-2 z-50',
            pickerOpen &&
              'text-primary-foreground   hover:bg-accent-invert hover:text-accent-foreground-invert'
          )}
        >
          {pickerOpen ? (
            <ArrowBigLeft className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </Button>
        <div className="flex justify-end ">
          <Button
            size="sm"
            onClick={() => {
              changeTheme(theme);
            }}
            variant="default"
            className="fixed top-2 right-2 z-10"
          >
            {theme === 'light' ? (
              <Sun className="h-3 w-3" />
            ) : (
              <Moon className="h-3 w-3" />
            )}
          </Button>
        </div>
        <RoadField
          selectedDisplayedItem={selectedDisplayedItem}
          displayedItems={displayedItems}
          selectedPickingItem={selectedPickingItem}
        />
      </ItemSelectionProvider>
    </main>
  );
}

export default TrafficDisplayer;
