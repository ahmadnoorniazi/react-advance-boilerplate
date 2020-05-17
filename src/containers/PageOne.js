import React from 'react';
import { Helmet } from 'react-helmet';

const PageOne = () => (
  <div className="page-two">
    <Helmet>
      <title>Page 1</title>
      <meta
        name="description"
        content="This is a different description for this route." />
    </Helmet>
    <h1>Page 1</h1>
  </div>
);

export default PageOne;
