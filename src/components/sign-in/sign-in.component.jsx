import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'password':'',
            'email':''
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({password:'', email:''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    };

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} label='email' type='email' handleChange={this.handleChange} required></FormInput>       
                    <FormInput name='password' value={this.state.password} label='password' type='password' handleChange={this.handleChange} required></FormInput>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    };
};

export default SignIn;