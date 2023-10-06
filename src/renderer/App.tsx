import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/cairo/300.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/700.css';
import './App.css';

import { ThemeProvider } from './components/ThemeProvider';
import TrafficDisplayer from './containers/TrafficDisplayer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <Router>
        <Routes>
          <Route path="/" element={<TrafficDisplayer />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
