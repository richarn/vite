import React, { StrictMode } from 'react';
import ReactDOM  from 'react-dom/client';
import { FirstApp } from './FirstApp';

import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render( 
<React.StrictMode>
    <FirstApp title='Es el titulo' name='Rich' />
</React.StrictMode>

);