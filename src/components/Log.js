import React, { Component } from 'react'
import '../App.css';
export class Log extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false
      };
      
    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
    };
     
    handleFormSubmit = () => {};

    handleFormSubmit = () => {
        const { email,password, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('email', rememberMe ? email : '');
        localStorage.setItem('password', rememberMe ? password : '');
    };

    render() {
        return (
            <div id="demo">
                 <div id="buttons">
                        <p id="signupButton" >Sign Up</p>
                        <p id="loginButton" > Login</p>
                </div>
                      
                <div id="signup">
                        <input type="text" id="first" placeholder="First Name"/>
                        <input type="text" id="last" placeholder="Last Name"/>
                        <input type="email" id="email" placeholder="Email"/>
                        <input type="password" id="password" placeholder="Password"/>
                        <input type="password" id="confirm" placeholder="Confirm Password"/>
                        <button id="send">Send</button>
                </div>

              <div id="login">
                 <form onSubmit={this.handleFormSubmit}>
        
                           <label>
                              Email: <input name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                           </label><br />
                           <label>
                           password: <input name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                           </label><br />
                           <label>
                               <input name="rememberMe" id="password" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
                           </label><br />
                           <button type="submit">Sign In</button>
                 </form>          
             </div>
 
 
 </div>
        )
    }


}

export default Log;
