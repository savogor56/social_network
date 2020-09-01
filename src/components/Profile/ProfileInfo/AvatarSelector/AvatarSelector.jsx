import React from 'react';
import classes from './AvatarSelector.module.css';

const AvatarSelector = ({avatarSelect}) => {
    const fileInput = React.createRef();
    const fileSelect = () => {
        fileInput.current.click();
    }
    return (
        <div className={classes.avatar_selector}>
            <input type="file" onChange={avatarSelect} ref={fileInput} />
            <button onClick={fileSelect}>Change avatar</button>
        </div>
    )
}

export default AvatarSelector;