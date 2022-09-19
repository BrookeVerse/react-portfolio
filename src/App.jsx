import './App.scss';

import NavBar from './components/NabBar/NavBar';
import Banner from "./components/Banner/Banner";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
