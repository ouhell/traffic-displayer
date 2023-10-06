import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Button } from './components/ui/button';

function Hello() {
  return (
    <div>
      <Button hidden size="sm" variant="outline">
        Button
      </Button>
      <a href="https://www.google.dz/" target="_blank" rel="noreferrer">
        google
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
