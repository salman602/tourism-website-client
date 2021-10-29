import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
