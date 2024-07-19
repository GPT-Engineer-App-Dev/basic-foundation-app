import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;