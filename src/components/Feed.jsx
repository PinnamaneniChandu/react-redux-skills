import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class componentName extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        Welcome to {this.props.first.firstName}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fisrt:state.first.first
})

export default connect(mapStateToProps, {})(componentName)
