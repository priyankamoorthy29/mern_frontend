import React, { Component } from 'react';
import { connect } from 'react-redux';


class Content extends Component {
render(){
    return(
        <div>
        <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginLeft:'300px',marginTop:"50px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}>  </div>
  <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginLeft:'550px',marginTop:"-80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>
  <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginLeft:'800px',marginTop:"-80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>
  <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginLeft:'1050px',marginTop:"-80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>

<div className="rectangle" style={{height: "300px",width: "550px", backgroundColor: "white",marginLeft:'300px',marginTop:"50px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>

<div className="rectangle" style={{height: "300px",width: "420px", backgroundColor: "white",marginLeft:'860px',marginTop:"-300px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>

  </div>
    )
}
   
}
export default Content;