import React from "react";
import { Component } from "react";
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input";

class Auth extends Component {

    loginHandler = () => {

    }
    signupHandler = () => {

    }
    submitHandler = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input label="Email" />
                        <Input label="Password" />
                        <Button
                            type="success"
                            onClick={this.loginHandler}>Sign in</Button>
                        <Button
                            type="primary"
                            onClick={this.signupHandler}>Sign up</Button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Auth
