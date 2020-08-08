import React from 'react';
import classes from './UserInfo.module.css'


class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.profileStatus
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  setStatus = () => {
    this.toggleEditMode();
    this.props.putProfileStatus(this.state.status);
  }

  onChangeStatus = (e) => {
    let status = e.target.value;
    this.setState({
      status
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.profileStatus !== this.props.profileStatus) {
      this.setState({
      status: this.props.profileStatus
    })
    }
  }

  render() {
    return (
      <div className={classes.status}>
        {
          this.state.editMode ?
          <input 
            autoFocus={true} 
            onBlur={this.setStatus} 
            onChange={this.onChangeStatus} 
            type="text" 
            value={this.state.status}
          /> :
          <span onDoubleClick={this.toggleEditMode} >{this.props.profileStatus ? this.props.profileStatus : 'status'}</span>
        }   
      </div>
    );
  }
}

export default UserStatus;
