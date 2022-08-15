import './App.css';
import Countries from './components/countries';
import Order from './components/order';
import CountryDetail from './components/detail';
import { Route, Switch} from 'react-router-dom'
import  AddActiviy  from './components/Activity';
import Navbar from './components/navbar'
import LandingPage from './components/landing/Landing';
import SearchBar from './components/searchbar';
// import NotFound from './components/notfound';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
        <LandingPage/>
      </Route>
        <Route exact path='/home'>
          <Navbar />
          <Order />
          <SearchBar/>
          <Countries/>
        </Route>
        <Route exact path='/activity'>
          <AddActiviy />
        </Route>
        <Route path='/:id'>
          <CountryDetail/>
        </Route>
        {/* <Route path='*'>
         <NotFound/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;