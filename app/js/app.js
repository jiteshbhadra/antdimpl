import React from 'react';
import ReactDOM from 'react-dom';
import  AppContainer from './containers/app.container';

// By Default Ant Framework loads in Chinese, Importing Locale to display controls in English
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


ReactDOM.render(
    <LocaleProvider locale={enUS}> 
    <AppContainer />
    </LocaleProvider>,
    document.getElementById('app')
);