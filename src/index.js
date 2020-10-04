import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import App from './App';
Amplify.configure(aws_exports);

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);