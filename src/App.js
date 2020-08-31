import React from 'react';
import FirstPage from './components/FirstPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import { connect } from 'react-redux';
import * as reactStore from './store/actions/actions';
import HouseSummary from './components/houses/HouseSummary';
import Error from './components/Error';
import Footer from './components/Footer';
import CreateHouse from './components/houses/CreateHouse';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/second-page" component={SecondPage} />
        <Route path="/third-page" component={ThirdPage} />
        <Route path="/fourth-page" component={FourthPage} />
        <Route path="/house/:id" component={HouseSummary} />
        <Route path="/create" component={CreateHouse} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHouses: (e) => dispatch(reactStore.fetchHouses(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
