import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/navbar';
import Home from './pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;