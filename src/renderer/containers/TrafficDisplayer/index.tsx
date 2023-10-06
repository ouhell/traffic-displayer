import React from 'react';
import { useTheme } from 'renderer/components/ThemeProvider';
import { Button } from 'renderer/components/ui/button';
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
    <main>
      <TrafficPicker open={pickerOpen} close={() => setPickerOpen(false)} />
      <div>
        <Button
          size="sm"
          onClick={() => {
            changeTheme(theme);
          }}
        >
          {theme}
        </Button>
        <Button
          size="sm"
          onClick={() => {
            setPickerOpen(true);
          }}
        >
          open
        </Button>
      </div>
    </main>
  );
}

export default TrafficDisplayer;
