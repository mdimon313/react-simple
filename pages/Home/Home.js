import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Explore from '../Explore/Explore';
import Message from '../Message/Message';
import NewHome from '../NewHome/NewHome';

const Home = ()=> {
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={NewHome}/>
                <Route exact path='/message' component={Message}/>
                <Route exact path='/explore' component={Explore}/>
            </Switch>
        </div>
    )
}

export default Home;