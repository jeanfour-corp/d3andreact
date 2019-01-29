import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import App from "./App";
const app = document.getElementById('app');

Amplify.configure(aws_exports);

ReactDOM.render(React.createElement(App, null), app);