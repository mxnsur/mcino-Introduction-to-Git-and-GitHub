import './App.css';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful indoor
          plants and greenery.
        </p>

        <button className="get-started-btn">
          Get Started
        </button>

        <AboutUs />
      </div>
    </div>
  );
}

export default App;
