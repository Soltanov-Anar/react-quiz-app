import React from 'react';
import classes from './MenyToggle.module.css';

const MenyToggle = props => {
    const cls = [
        classes.MenyToggle,
        'fa',
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i className={cls.join(' ')}
            onClick={props.onToggle}>

        </i>
    )

}

export default MenyToggle;
