import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import routes from './routes.jsx';

var $ = require('jQuery');
require('./styles/style.scss');


render((routes), document.getElementById('root'));
