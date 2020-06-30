import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
  return(
    <main className={`main wrap ${classes.dialogs}`}>
      <div className={classes.dialog_list}>
        <div className={`${classes.dialog} ${classes.active}`}>dialog1</div>
        <div className={classes.dialog}>dialog2</div>
      </div>
      <div className={classes.chat}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>what's up man?</div>
      </div>
    </main>
  )
}

export default Dialogs;