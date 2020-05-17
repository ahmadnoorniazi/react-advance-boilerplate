import React, {
  lazy, Suspense,
} from 'react';
import { Helmet } from 'react-helmet';
import {
  Switch, Route, BrowserRouter as Router, Link,
} from 'react-router-dom';

const PageOne = lazy(() => import('./containers/PageOne.js'));
const PageTwo = lazy(() => import('./containers/PageTwo.js'));

const App = () => (
  <Suspense fallback={<h1>Loading....</h1>}>
    <div className="app">
      <Helmet titleTemplate="%s - My App" defaultTitle="My App">
        <meta name="description" content="A React.js aapplication" />
      </Helmet>
      <Router>
        <Link to="/pageTwo">Lol</Link>
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/pageTwo" component={PageTwo} />
        </Switch>
      </Router>
    </div>
  </Suspense>
);

export default App;
