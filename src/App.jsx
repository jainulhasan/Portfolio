import React from 'react';
import Main from './Main'
import About from './About'
import {Route, Switch} from 'react-router-dom'
import Portfolio from './Portfolio';
import Contact from './Contact';

const App=()=>{


return (
    <>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        </Switch>
    </>
)
}

export default App;