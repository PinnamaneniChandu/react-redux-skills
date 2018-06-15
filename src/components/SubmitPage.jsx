import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class componentName extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(e){
    this.props.history.push('/Feed')
  }
  render() {
    console.log(this.props.third.third)
    return (
      <div>
        <center>
            <h2>Please find your details</h2>
            Enter First Name: <strong>{this.props.first.first.firstName}</strong><br/><br/>
            Enter Last Name: <strong> {this.props.first.first.lastName} </strong><br/><br/>
            Enter Date of Birth: <strong> {this.props.first.first.dob} </strong><br/><br/>
            Enter Street Details: <strong>{this.props.second.second.street} </strong><br/><br/>
            Enter Apt No or Suit Number: <strong>{this.props.second.second.aptNo}</strong><br/><br/>
            Enter City: <strong> {this.props.second.second.city}</strong><br/><br/>
            Enter State: <strong>{this.props.second.second.state}</strong><br/><br/>
            Enter ZIP: <strong>{this.props.second.second.zipCode} </strong><br/><br/>

            <strong>{this.props.third.third.question1} - {this.props.third.third.answer1}</strong><br/><br/>
            <strong>{this.props.third.third.question2} - {this.props.third.third.answer2}</strong><br/><br/>
            <strong>{this.props.third.third.question3} - {this.props.third.third.answer3}</strong><br/><br/>
            <input type='submit' onClick={this.onClick} value="next"/>
        </center>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  first : state.first,
  second : state.second,
  third:state.third
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(componentName)
