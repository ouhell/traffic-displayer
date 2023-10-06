import React from 'react';
import { useTheme } from 'renderer/components/ThemeProvider';
import { Menu, ArrowBigLeft, Sun, Moon } from 'lucide-react';
import { Button } from 'renderer/components/ui/button';
import { cn } from 'renderer/lib/util';
import TrafficPicker from './components/TrafficPicker';

// type Props = {};

function TrafficDisplayer() {
  const { theme, setTheme } = useTheme();
  const [pickerOpen, setPickerOpen] = React.useState(false);

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
  return (
    <main className="select-none">
      <TrafficPicker open={pickerOpen} />
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          setPickerOpen(!pickerOpen);
        }}
        className={cn(
          'fixed top-2 left-2',
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
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={() => {
            changeTheme(theme);
          }}
          variant="default"
          className="fixed top-2 right-2"
        >
          {theme === 'light' ? (
            <Sun className="h-3 w-3" />
          ) : (
            <Moon className="h-3 w-3" />
          )}
        </Button>
      </div>
    </main>
  );
}

export default TrafficDisplayer;
