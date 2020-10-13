import React from 'react';
import classes from './ProfileStatus.module.css'

type PropsType = {
  putProfileStatus: (status: string) => void
  profileStatus: string
}

type StateType = {
  editMode: boolean
  status: string
} 

class ProfileStatusClass extends React.Component<PropsType, StateType> {
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

  onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    let status = e.target.value;
    this.setState({
      status
    })
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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
          <span onDoubleClick={this.toggleEditMode} >{this.props.profileStatus ? this.props.profileStatus : 'default status'}</span>
        }   
      </div>
    );
  }
}

export default ProfileStatusClass;
