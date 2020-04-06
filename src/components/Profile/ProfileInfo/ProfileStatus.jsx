import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMode} > {status || "Status is empty"}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status} />
                </div>
            }
        </div>
    </>
}

export default ProfileStatus;