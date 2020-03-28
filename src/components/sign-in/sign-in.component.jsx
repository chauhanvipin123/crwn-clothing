import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I alreadt have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                    name="email" 
                    type="email"
                    label = "email" 
                    handleChange={this.handleChange} 
                    value={this.state.email}  
                    required/>
                    <label>Email</label>
                    
                    <FormInput 
                    name="password" 
                    type="password"
                    label = "password" 
                    value={this.state.email}
                    handleChange={this.handleChange}  
                    required/>
                    <label>Password</label>
                    <input type="submit" value="Submit form" />

                </form>
            </div>
        )
    }
}

export default SignIn;