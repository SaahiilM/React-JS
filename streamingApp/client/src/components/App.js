import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      Page One
      {/* used in place of <a></a> too avoid dumping of all state and redux data as it makes a request to the server and updated index.html is fetched loaded*/}
      <Link to="/page2">Go to Page 2</Link>
      {/* still shows up as <a></a> when inspected in browser */}
    </div>
  );
};
const Page2 = () => {
  return (
    <div>
      Page 2<Link to="/">Go to Page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" component={Page2} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
