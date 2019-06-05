import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';


ReactDOM.render(<SnackbarProvider autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}><App /></SnackbarProvider>, document.getElementById('root'));
