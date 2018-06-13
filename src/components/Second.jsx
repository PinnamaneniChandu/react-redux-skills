import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes} from "prop-types";
import {addSecondData} from '../actions/Second'
import store from '../store';

 class Second extends Component {
     constructor(props){
         super(props);;
         this.state={
             street:'',
             aptNo:'',
             city:'',
             state:'',
             zipCode:'',
         }
         this.goBack=this.goBack.bind(this)
         this.goNext=this.goNext.bind(this)
     }
     onChange(e){
         this.setState  ({[e.target.name]:e.target.value})
     }
     goBack(e){
      this.props.history.push('/First');
     }
     goNext(e){
      e.preventDefault();
      this.props.addSecondData(this.state)
      this.props.history.push('/Third');
    }
  render() {
    return (
      <div>
        <center>
        <h1>This is Second Page</h1>
        <h3>Enter Address Details Here</h3>
            <strong>Enter Street Details </strong>
            <input type='text' name='street' value={this.state.street} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter Apt No or Suit Number </strong>
            <input type='text' name='aptNo' value={this.state.aptNo} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter City </strong>
            <input type='text' name='city' value={this.state.city} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter State </strong>
            <input type='text' name='state' value={this.state.state} onChange={this.onChange.bind(this)}/><br/><br/>
            <strong>Enter ZIP </strong>
            <input type='text' name='zipCode' value={this.state.zipCode} onChange={this.onChange.bind(this)}/><br/><br/>
            <button onClick={this.goBack}>back</button> <button onClick={this.goNext}>next</button>
        </center>
      </div>
    )
  }
}
const mapStateToProps = store =>({
  first:store.first.first
});

export default connect(mapStateToProps,{addSecondData}) (Second);