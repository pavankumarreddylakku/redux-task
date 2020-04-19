import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import Login from './login';
import PropTypes from 'prop-types';
//import axios from 'axios';
import UserRequest from './UserRequestAction';

 class Header extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
           email:"",
           password:"",
           loading:false,
           success:false,
           fail:false,
        }
        
    }
    onChange =(e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e) =>{
        //e.preventDefault();
     //this.setState({email:this.state.email,password:this.state.password});   
     /* this.PropTypes.Login(this.state).then(
      (res) => {alert(1)},
      (err) =>{alert(2)}); */
      this.setState({loading:true}); 
      var data={email:this.state.email,password:this.state.password}
      this.props.UserRequest(data).then(
          (res) => { this.setState({loading:false,success:true})
           window.location.href = '/dashboard'
        },
          (err)=>{this.setState({loading:false,fail:false})

           this.alert1()
              
              //(window.location.href = '')
              }
      );
      //axios.post('/api/login',this.state)
    }
     alert1 =()=>{
        setTimeout(() =>alert("Invalid credentials,Please check your email/password"),1000)
    }
    render(){
        const {email,password} =this.state;
        return(
            <div style={{marginLeft:"200px"}}>
              {this.state.loading ? <h6> Loading... </h6>:""}
              {this.state.success ? <h6> success </h6>:""}
              {this.state.fail ? <h6> Invalid credentials,Please check your email/password </h6>:""}   
             <span>Email</span>   
             <input name="email" onChange={this.onChange}/>
             <br/>
             <br/>
             <br/>
             <br/>
             <span>Password</span> 
             <input name="password" onChange={this.onChange}/>
             <br/>
             <br/>
             <br/>
             <button onClick={this.onSubmit}>Login</button>
            </div>
        )
    }
}
Header.propTypes ={
    UserRequest:PropTypes.func.isRequired   
} 
export default connect(null,{UserRequest})( Header); 