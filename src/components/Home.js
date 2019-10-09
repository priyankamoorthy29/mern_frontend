import React, { Component } from 'react';
//import bug from '../image/bug.png';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Content from './content';

export default class Home extends Component {

    render() {
        return (
            <div  >
              
                <Navbar/>
                <SideBar/>
                <Content/>
     
     
  
 
 </div>



            
        );
    }
}