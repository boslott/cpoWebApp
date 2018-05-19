import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient , HttpLink, InMemoryCache } from 'apollo-boost';
// import { setContext } from 'apollo-link-context';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faTachometerAlt, faHome, faPlusSquare, faClipboardList, faTint, faUserCircle, faSignOutAlt, faQuestionCircle, faChevronDown, faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Font Awesome icons library
fontawesome.library.add(brands, faHome, faTachometerAlt, faPlusSquare, faClipboardList, faTint, faUserCircle, faSignOutAlt, faQuestionCircle, faChevronDown, faPlus, faMinus);

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjg3pd3ei232o0128tnatoefk',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
