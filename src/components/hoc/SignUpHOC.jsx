import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function SignUpWrapper(ComposedComponent,filterInfo){
class BaseComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentWillMount(){
      if(!this.props.first.username){
          this.props.history.push('/')
      }      
  }

  render() {
    return (
      <div>
        <ComposedComponent
              {...this.state}
              {...this.props} 
              userName={this.props.first.username}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    first:state.first.first  
})

return connect(mapStateToProps, {})(BaseComponent);
}
export default SignUpWrapper;
