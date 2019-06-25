import React, { Component } from 'react'

export class Login extends Component {
   state={
    email: '',
    password: '',
    rememberMe: false
   };

   handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.email]: value });
    this.setState({[input.password]: value });
  };

//   handleFormSubmit = () => {
//     const { user, rememberMe } = this.state;
//     localStorage.setItem('rememberMe', rememberMe);
//     localStorage.setItem('email', rememberMe ? email : '');
//     localStorage.setItem('password', rememberMe ? password : '');
//   };

   onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // const input = event.target;
    // const value = input.type === 'checkbox' ? input.checked : input.value;
 
    // this.setState({ [input.email]: value });
    // this.setState({[input.password]: value });
  }

  onSubmit = (e) => {
    //   e.preventDefault();
    //   if(this.props.onSubmit) this.props.onSubmit(this.state);
    alert('abc')
  }
 


    getStyle = () => {
        return{
            
        }
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
            <h1>Login</h1><br></br>
            <label>
                 Input: <input type='text'
                        name='email'
                         class="log1"
                         placeholder='Email'
                         onChange={e => this.onChange(e)}
                         value={this.state.email} />
            </label>
<br></br>
            <label>
               Password: <input style={this.getStyle()} class="log2"
                       name='password'
                       placeholder='Password'
                       type='password'
                       onChange={e => this.onChange(e)}
                       value={this.state.password} />
            </label>
<br></br>
            <label>
                 <input name="rememberMe" 
                 checked={this.state.rememberMe} 
                 onChange={e => this.onChange(e)}
                 type="checkbox"/> Remember me
            </label>

        <br /><br />
        <button onClick={() => this.onSubmit()} type="button">Login</button>
            
            </form>
            </div>
        );
    }

}



export default Login;
