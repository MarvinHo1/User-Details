import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{
  render() {
    if (!this.props.user) {
      return (<h4> Please select a user...</h4>)
    }
    return (
      <div>
        <h2>{this.props.user.first} {this.props.user.last}</h2>
        <h3>AGE: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>

    );
  }
}

//this gives it the "user information for the component sooo it lets this.props.user wor esscentially"
function mapStateToProps(state){
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetails);


