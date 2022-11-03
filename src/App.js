import Card from './components/Card'
import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
     <Header/>
     <Card />
     <Pagination/>
    </div>
  );
}

export default App;
