import React from "react";

const ProfileContact = ({contactTitle, contact}) => {

    return (
        <div>
            {`${contactTitle}: ${contact}`}
        </div>
    )
    
}

export default ProfileContact;