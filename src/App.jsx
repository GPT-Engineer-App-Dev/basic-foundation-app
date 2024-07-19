import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-500 p-4 text-white">
          <h1 className="text-2xl font-bold">Your Company</h1>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;