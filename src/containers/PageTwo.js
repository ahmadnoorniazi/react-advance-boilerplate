import React from 'react';
import { Helmet } from 'react-helmet';

const PageTwo = () => (
  <div className="page-two">
    <Helmet>
      <title>Page 2</title>
      <meta
        name="description"
        content="This is a different description for this route." />
    </Helmet>
    <h1>Page 2</h1>
  </div>
);

export default PageTwo;
