import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Homepage from './Component/homepage/homepage';

function App() {
  return (

<BrowserRouter>
    
    <Switch>

     <Route path="/home" exact component={Homepage}/>
     
     </Switch>

</BrowserRouter>

  );
}

export default App;
