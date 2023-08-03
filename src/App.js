import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exaxt element={<ProductListing />} />
        <Route path='/product/:productId' exaxt element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>
  );
}

export default App;
