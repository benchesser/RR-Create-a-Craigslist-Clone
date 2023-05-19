// Import data
import SearchBar from './Components/SearchBar';
import SideBar from './Components/SideBar';
import Listings from './Components/Listings';

// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar/>
        <SideBar/>
        <Listings/>
      </div>
    </div>
  );
}

export default App;
