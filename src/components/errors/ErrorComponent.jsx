import React, { Component } from 'react'

class ErrorComponent extends Component {
  render() {
    return (
      <div>
        <ul>
            {this.props.errors.map((error)=>{
                return <li>{error.msg}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default ErrorComponent;
