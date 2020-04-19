import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header';
import PropTypes from 'prop-types';
//import UserRequest from './UserRequestAction';
import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 class App  extends React.Component {
  
 
  render(){
    //const { UserRequest } =this.props;
  return (
    
      <Router>
        <Switch>
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/"} component={Header}  />
        </Switch>
      </Router>    
    
  );
  }
}
/* App.propTypes ={
  UserRequest:PropTypes.func.isRequired   
}  */
export default /*  connect(null,{ UserRequest })  */ App;
