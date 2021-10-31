import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddPackage from './pages/AddPackage/AddPackage';
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Packages from './pages/Home/Packages/Packages';
import Login from './pages/Login/Login';
import MyBookings from './pages/MyBookings/MyBookings';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import Signup from './pages/SignUp/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/packages">
            <Packages></Packages>
          </Route>
          <PrivateRoute path="/packages/:id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/mybookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/addPackage">
            <AddPackage></AddPackage>
          </PrivateRoute>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
