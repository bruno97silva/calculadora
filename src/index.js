import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className="container bg-danger text-center">
        <Calculator />
    </div>
, document.getElementById('root'));
serviceWorker.unregister();
