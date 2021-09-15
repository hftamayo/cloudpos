import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* el spread operator es para estar seguro que el
            ultimo valor es qel que se utilizara y que interactua con
            los demas componentes padres */}
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;