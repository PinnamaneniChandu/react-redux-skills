import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
          <h1> Welcome to Clever Developers</h1>
          <h3> Please click continue to go web site </h3>
        <Link to='/First'>SignUp</Link>
      </div>
    )
  }
}
export default Home;
