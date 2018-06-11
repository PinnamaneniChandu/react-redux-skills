import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes} from "prop-types";
import {addFirstData} from '../actions/First'
import store from '../store';
import ErrorComponent from './errors/ErrorComponent'
import config from './../config/config.json'

 class First extends Component {
     constructor(props){
         super(props);
         this.state={
             firstName:'',
             lastName:'',
             dob:'',
             username:'',
             password:'',
             repassword:'',
             errors:[]
         }
         this.validateInput = this.validateInput.bind(this)
     }
     onChange(e){
         this.setState  ({[e.target.name]:e.target.value})
     }
     validateInput(){
        let errors= new Set()
        this.setState({errors:[]})
         if(this.state.firstName.length < 5){
             errors.add({key:'firstName',msg:'First Name must be at least five characters'});
         }
         if(this.state.lastName.length < 5){
            errors.add({key:'lastName',msg:'Last Name must be at least five characters'});
        }
        if(this.state.dob.length < 5){
            errors.add({key:'dob',msg:'DOB must be at least five characters'});
        }
        if(this.state.username.length < 5){
            errors.add({key:'username',msg:'Username must be at least five characters'});
        }
        if(this.state.password.length < 5){
            errors.add({key:'password',msg:'password must be at least five characters'});
        }
        if(this.state.repassword !== this.state.password){
            errors.add({key:'repassword',msg:'password does not match'});
        }
         this.setState({errors:Array.from(errors)})
         if(errors.size>0 && config.errors.enable){
             return false
         }
         return true
     }
     saveData(e){
         e.preventDefault();
         if(this.validateInput())
         {
         this.props.addFirstData(this.state)
         this.props.history.push('/Second');
         }
     }
  render() {
    return (
      <div>
        <center>
        <h1>This is First Page</h1>
        
        <form onSubmit={this.saveData.bind(this)}>
        <ErrorComponent errors={this.state.errors}/><br/>
            <strong>Enter First Name </strong>
            <input type='text' name='firstName' value={this.state.firstName} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter Last Name </strong>
            <input type='text' name='lastName' value={this.state.lastName} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter Date of Birth </strong>
            <input type='Date' name='dob' value={this.state.dob} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter Username </strong>
            <input type='text' name='username' value={this.state.username} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter Password </strong>
            <input type='password' name='password' value={this.state.password} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Re Enter Password </strong>
            <input type='password' name='repassword' value={this.state.repassword} onChange={this.onChange.bind(this)}/><br/><br/>
            <input type='submit' value="next"/>
        </form>
        </center>
      </div>
    )
  }
}
const mapStateToProps = store =>({

});

export default connect(mapStateToProps,{addFirstData}) (First);