import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        {/* to display <Link> mentioned in Header.js  as it cannot be used outside of BrowserRouter*/}
        <Header />
        {/* switch shows only one route for any path */}
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
