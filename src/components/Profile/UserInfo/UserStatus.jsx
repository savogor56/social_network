import React from 'react';
import classes from './UserInfo.module.css'


class UserStatus extends React.Component {
  state = {
    editMode: false
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    return (
      <div className={classes.status}>
        {
          this.state.editMode ?
            <input autoFocus={true} onBlur={this.toggleEditMode} type="text" value={this.props.profileStatus} /> :
            <span onDoubleClick={this.toggleEditMode} >{this.props.profileStatus}</span>
        }   
      </div>
    );
  }
}

export default UserStatus;
