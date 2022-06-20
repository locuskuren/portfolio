import About from './components/About/About';
import BottomBar from './components/BottomBar/BottomBar';
import Connect from './components/Connect/Connect';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Work />
      <About />
      <Connect />
      <BottomBar />
    </div>
  );
}

export default App;
