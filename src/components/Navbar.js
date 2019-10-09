import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <div>
               
                <ul className="navbar-nav " style={{backgroundColor:" #2a5298 "}} >
                <a href="#" className="nav-link" onClick={this.onLogout.bind(this)} style={{color:'white'}}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                    {user.name}
                </a>
            </ul>
               
            </div>
           
         )
    const guestLinks = (
      <ul className="navbar-nav " style={{backgroundColor:" #2a5298 "}}>
           
            <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to="/login">Sign In</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light  " style={{backgroundColor:" #2a5298 "}} >
               {/* <button type="button" id="sidebarCollapse" className="btn btn-info" > */}
                {/* <i className="fa fa-align-left" style={{marginLeft:"220px",color:"white",fontSize:"20px"}}></i> */}
                {/* <span>Toggle Sidebar</span>
            </button> */}
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));