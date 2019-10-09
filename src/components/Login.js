import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import './login.css';
import bug1 from '../image/bug1.png';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(
            // <div style={{width:'100%', height:'100%', backgroundColor:'#3a7bd5',padding: '100px , 100px,100px,100px'}}>
                 <div >
                      <style>{'body { background-color: #2a5298 }'}</style>
                      <div>
                <image  style={{width:'11%',height:'39%',marginLeft:"490px",marginTop:"50px"}}src={bug1}/>
            </div>
                     
      <div className="container" style={{ marginTop: '20px', width: '350px' ,backgroundColor:'#ffffff', position: 'relative', borderRadius: '10px',
     backgroundColor: '#f2f2f2',padding: '20px 20px 30px 20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
             <div><h2 style={{marginBottom: '40px',textAlign:'center'}}>Login</h2></div>
            
            
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group" style={{marginTop:'30px'}}>
                    <input
                    style={{marginTop:'30px'}}
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-md', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    style={{marginTop:'30px'}}
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-md', {
                        'is-invalid': errors.password
                    })} 
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" style={{width:'315px',marginTop:'30px',borderRadius:'20',backgroundColor:"#2a5298"}}>
                        Login 
                    </button>
                </div>
                {/* <div >
                <input type="checkbox" />
                    Remember Me</div> */}
                <div style={{textAlign:"center", marginTop:'20px' ,fontSize:'18px',fontWeight:'bold'}}>
                    <a href='/register'>Register Now!</a>
                </div>
            </form>
        </div>

            

  </div>

                
            // </div>
 

         
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)