import './App.css';

// import VisitorCounter from './components/VisitorCounter';
// import Pizza from './components/Pizza';
import PizzaReducer from './components/PizzaReducer';

const App = () => {
  return (
    <div className="App">
      <h2>Immutable Update Patterns</h2>

      {/* <VisitorCounter /> */}
      {/* <Pizza /> */}
      <PizzaReducer />
    </div>
  );
};

export default App;
