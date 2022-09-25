import React, { StrictMode } from 'react';
import ReactDOM  from 'react-dom/client';
import { FirstApp } from './FirstApp';

import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render( 
<React.StrictMode>
    <FirstApp title="Hello this is my 1rs react program" nmro={123}/>
</React.StrictMode>

);