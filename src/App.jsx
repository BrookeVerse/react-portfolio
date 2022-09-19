import './App.scss';

import NavBar from './components/NabBar/NavBar';
import Banner from "./components/Banner/Banner";
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
