import React from 'react';
import classes from './Aside.module.css';
import { Friends } from './Friends/Friends';
import MenuItem from './MenuItem/MenuItem';
import { connect } from 'react-redux';

const Aside = (props) => {
  let menuElements = props.menu.map((menuElem) => {
    return(
      <MenuItem key={menuElem.id} menuElem={menuElem} />
    )
  })
  return (
    <aside className={`${classes.aside} wrap`}>
      <div className={classes.menu}>
      {menuElements}
      </div>      
      <Friends friends={props.friends} />
    </aside>
  ) 
};

class AsideContainer extends React.Component {
  render() {
    return (
      <Aside {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  menu: state.aside.menu,
  friends: state.aside.friends
})

export default connect(mapStateToProps)(AsideContainer)