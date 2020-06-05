import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { loginUser } from '../../redux/reducer';
import faceLogo from '../../images/face_logo.png';

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''

        }
    }

   handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        axios.post('/auth/login', this.state)
        .then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Could not log in')
        })
    }

    register = (e) => {
        e.preventDefault();
        axios.post('/auth/register', this.state)
        .then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err.response.data)
            alert(err.response.data)
        })
    }

    render(){
        const {username, password} = this.state
        return(
            <div className="Auth">
                <div className="auth-container">
                    <img src={faceLogo} alt='logo' />
                    <h1 className="auth-title">Helo</h1>

                    <div className="auth-input-box">
                        <p>Username:</p>
                        <input type="text" placeholder="username..."
                            name="username" value={username}
                            onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className="auth-input-box">
                        <p>Password:</p>
                        <input type="password" placeholder="password..."
                            name="password" value={password}
                            onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className='auth_button_container'>
                        <button className='auth-button' onClick={(e) => this.login(e)}> Login </button>
                        <button className='auth-button' onClick={(e) => this.register(e)}> Register </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {loginUser})(Auth)