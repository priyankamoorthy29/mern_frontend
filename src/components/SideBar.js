import React, { Component } from 'react';
//import bug from '../image/bug.png';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class SideBar extends Component {

    render() {
        return (
            <div  >
              
     
       <div className="sidebarr" style={{  background:" #FFF8DC",width: "220px",
  float: "left",height: "100vh", marginRight: "-300px", position: "absolute", top: 0, left: 0,backgroundColor:"white",
    boxShadow: "5px 10px 18px #888888",textAlign:"center"}} >
      <div>
      <Link className="navbar-brand" style={{color:'#2a5298',marginLeft:"20px",marginTop:"12px",fontWeight:"bold",fontSize:"22px",fontFamily:"Comic Sans MS, cursive, sans-serif"}} to="/">Defect Tracker</Link>
      </div>
  
  <ul className="navbar-nav mr-light" style={{paddingTop:"100px", fontSize:"16px"}} >
    
       <li className="nav-item">
                  <Link to={'/Project'} className="nav-link" style={{color:"#818181"}}><i class="fa fa-th-list"></i>Project</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Defect'} className="nav-link" style={{color:"#818181"}}>Defect</Link>
                </li>
                
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link" style={{color:"#818181"}}>Setting</Link>
                </li>
              </ul>
      
            
  </div>
  </div>
  
 
 

            
        );
    }
}