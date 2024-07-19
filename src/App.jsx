import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;