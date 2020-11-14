import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './components/Homepage/HomeScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdsForm from './components/Form/AdsForm';
import ProductDetailScreen from './components/ProductDetail/ProductDetailScreen';
import LogoutPost from "./components/Header/LogoutPost"

import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/addyourpost' component={AdsForm} />
          <Route exact path='/item/:id' component={ProductDetailScreen} />
          <Route exact path='/NotLogin' component={LogoutPost} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
