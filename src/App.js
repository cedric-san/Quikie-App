import React from 'react';
import './style.css';
import Header from './Components/Header';
import Home from '/Components/Home/Home';
import View from './Components/View/View';
import CardList from '/Components/Home/CardLists';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CardList />
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/view" component={View} exact />
      <Route />
    </BrowserRouter>
  );
}
