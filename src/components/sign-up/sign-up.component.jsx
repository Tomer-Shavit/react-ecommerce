import React from 'react';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor() {
        super();

        this.state={
            'displayName': '',
            'email':'',
            'password':'',
            'confirmedPassword':'',
            'passwordMatch':false
        }
    };

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmedPassword} = this.state;

        if(password !== confirmedPassword){
            alert("Passwords didn't matched");
            return;
        }
        try{  
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                'displayName': '',
                'password':'',
                'email':'',
                'confirmedPassword':''
            });
        } catch (error){
            console.error(error);
        }
    };

    handleChange= event =>{
        const {name, value} = event.target;
        this.setState({[name]:value}, () => (
            (event.target.name === 'confirmedPassword') ? this.passwordMatch() : ""
        ));
    };

    passwordMatch=()=>{ 
        console.log(this.state.password, this.state.confirmedPassword, this.state.passwordMatch)       
        if(this.state.password === this.state.confirmedPassword && this.state.password){
            return this.setState({passwordMatch:true});
        } else this.setState({passwordMatch:false});
    }

    render(){
        const {displayName, email,password,confirmedPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>Sign Up</h2>
                <form className='sign-up-form' >
                    <FormInput type='text' label='Name' name='displayName' value={displayName} handleChange={this.handleChange} required/>
                    <FormInput type='email' label='Email' name='email' value={email} handleChange={this.handleChange} required/>
                    <FormInput type='password' label='Password' name='password' passwordMatch={this.state.passwordMatch} value={password} handleChange={this.handleChange} required/>
                    <FormInput type='password' label='Confirm Password' passwordMatch={this.state.passwordMatch} name='confirmedPassword' value={confirmedPassword} handleChange={this.handleChange} required/>
                    <CustomButton type='submit' onClick={this.handleSubmit}>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;