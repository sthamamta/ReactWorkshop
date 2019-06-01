import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import MovieEdit from './components/MovieEdit'
import MovieDetail from './components/MovieDetail'


function App() {
  return (
     <BrowserRouter>
     <Header/>
      <Switch>
        <Route exact path='/'component={MovieList}/>
        <Route exact path='/add-movie'component={MovieAdd}/>
        <Route exact path='/movie-edit/:id'component={MovieEdit}/>
         <Route exact path='/movie-detail/:id'component={MovieDetail}/>

        
      </Switch>
     </BrowserRouter>
  );
}

export default App;
