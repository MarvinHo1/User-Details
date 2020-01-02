import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li 
          key={user.id}
          onClick={() => this.props.selectUser(user)}
        >
          {user.first} {user.last}
        </li>
      )
    })
  }
  render() {
    return(
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}
//takes a piece of state from the store and sends it to the component as props.
function mapStateToProps(state){
  return {
    users: state.users
  }
}


//line below is to connect our actions to redux the slectUser: selectUser is the actions and the dispatch is used for redux in the backend
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}


//Line below makes the class aware of the of the store and the data by using connect
export default connect(mapStateToProps, matchDispatchToProps)(UserList);