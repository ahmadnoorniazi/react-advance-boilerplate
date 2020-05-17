import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';
import { Button } from './css';

const HelloWorld = ({ title }) => (
  <div className={style['hello-world']}>
    {title}
    <Button>Hello Styled Components</Button>
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
