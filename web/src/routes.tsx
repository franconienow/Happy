import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/';

import Landing from "./pages/Landing"
import OrphanageMap from "./pages/OrphanageMap"
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanageMap}/>
        <Route path="/orphanages/create" component={CreateOrphanage}/>
        <Route path="/orphanages/:id" component={Orphanage}/>
      </Switch>
    </BrowserRouter>
  );
};