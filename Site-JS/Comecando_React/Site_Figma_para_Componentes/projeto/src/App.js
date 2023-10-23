import Header from './components/header';
import Banner from './components/banner';
import Comodos from './components/comodos';
import Produtos1 from './components/produtos1';
import Produtos2 from './components/produtos2';
import Inspiration from './components/inspiration';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Comodos />
      <Produtos1 />
      <Produtos2 />
      <Inspiration />
    </div>
  );
}

export default App;