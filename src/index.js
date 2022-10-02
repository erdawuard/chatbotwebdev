import React from 'react';
import ReactDOM from 'react-dom';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

import App from './App';
import Postgres from './Postgres';
import './index.css';

Kommunicate.init("27c583cbba7df01cf38e32ab9aa59dd49" , {"popupWidget":true,"automaticChatOpenOnNavigation":true})

ReactDOM.render(<App />, document.getElementById('root'));