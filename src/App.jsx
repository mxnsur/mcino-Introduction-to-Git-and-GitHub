import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page background-image">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful indoor
          plants and greenery.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>

        <AboutUs />
      </div>
    </div>
  );
}

export default App;
