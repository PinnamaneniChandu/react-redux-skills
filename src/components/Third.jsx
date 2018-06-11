import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import config from './../config/config.json'
import {addThirdData} from './../actions/Third'

export class Third extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props){
      super(props)
      this.state={
          question1:'',
          answer1:'',
          question2:'',
          answer2:'',
          question3:'',
          answer3:'',
        }
        this.goBack=this.goBack.bind(this)
        this.goNext=this.goNext.bind(this)
  }

  goBack(e){
      this.props.history.push('/Second')
  }
  goNext(e){
      console.log(this.state)
      this.props.addThirdData(this.state)
      this.props.history.push('/Submit')
  }
  onChange(e){
      this.setState  ({[e.target.name]:e.target.value})
  }
  render() {
      let options = 
          config.security_questions.map((question)=>{
          return <option name={question.questionid} >{question.desc}</option>
      }) ;

   
      let firstQuestion = <div>
      <strong>Please select security question one: </strong>
      <select onChange={this.onChange.bind(this)} name='question1' value={this.state.question1} >
          {options}
      </select>
      <br/><br/>
          <input type='text' name='answer1' value={this.state.answer1} onChange={this.onChange.bind(this)}/>
    </div>

     let secondQuestion = <div>
      <strong>Please select security question one: </strong>
      <select onChange={this.onChange.bind(this)} name='question2' value={this.state.question2} >
          {options}
      </select>
      <br/><br/>
          <input type='text' name='answer2' value={this.state.answer2} onChange={this.onChange.bind(this)}/>
    </div>

     let thirdQuestion = <div>
      <strong>Please select security question one: </strong>
      <select onChange={this.onChange.bind(this)} name='question3' value={this.state.question3} >
          {options}
      </select>
      <br/><br/>
          <input type='text' name='answer3' value={this.state.answer3} onChange={this.onChange.bind(this)}/>
    </div>
      
        
    return (
      <div>
        <center>
        <h1>This is Third Page</h1>
        <h3>Please Answer Security Questionss Here</h3>
            {firstQuestion}
            {secondQuestion}
            {thirdQuestion}
            <button onClick={this.goBack}>back</button> <button onClick={this.goNext}>next</button>
        </center>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, {addThirdData})(Third)
