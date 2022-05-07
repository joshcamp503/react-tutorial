import './App.css';
import Counter from './components/counter/Counter';
import Header from './components/header/Header';
import Name from './components/name/Name';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Counter />
      <Name />
    </div>
  );
}

export default App;
