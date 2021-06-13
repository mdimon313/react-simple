import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg';
import './Login.css';

export default class Login extends React.Component {
    state = {
        email: '',
        pwd: '',
    }

    changeHendeler = (e)=> {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    submitHendeler = (e)=> {
        e.preventDefault();
        this.props.isLogin(true);
    }


    render() {
        return (
            <div className="div-login">
                <div className="login-logo">
                    <Logo/>
                </div>
                <div>
                    <form onSubmit = {this.submitHendeler}>
                        <input type="email" name="email" placeholder="eamil...." required onChange={this.changeHendeler}/>
                        <input type="password" name="pwd" placeholder="password...." required onChange={this.changeHendeler}/>
                        <button onSubmit>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}