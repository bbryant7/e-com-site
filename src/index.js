import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Garden from './components/Garden.js';
import Kitchen from './components/Kitchen.js';
import Living from './components/Living.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import BaseLayout from './components/BaseLayout.js';


ReactDOM.render(

  <BrowserRouter>
   <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Garden" component={Garden}/>
        <Route path="/kitchen" component={Kitchen}/>
        <Route path="/living" component={Living}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About} />
      </Switch>
    </BaseLayout>
    </BrowserRouter>



,document.getElementById('root'));
registerServiceWorker();
