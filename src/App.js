import Header from './components/Header';
import Monthlist from './components/Monthlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
      <h1 className='main-page-title'>Uk Planting guide</h1>
      <Monthlist />
    </div>
  );
}

export default App;
