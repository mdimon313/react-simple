import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import NoMatch from './pages/404page/404page';


export default class App extends React.Component {
  state = {
    isLog: false
  }
  heldelLogin = (isLog)=> this.setState({isLog})

  render(){
    const {isLog} = this.state;
    return (
      <div>
        <Switch>
          {
            !isLog ? 
            <Route exact path="/" render={()=> <Login isLogin={this.heldelLogin}/>}/>
            :
            <Route path="/" render={()=> <Home/>}/>
          }
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
  
}

