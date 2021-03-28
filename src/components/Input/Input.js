import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid-random';
//* import of components and developer packages
import './Input.scss';

const Input = React.forwardRef(({id, elClassName, label, placeholder,  error, ...attrs}, ref) => {
    const classes = classNames('input-wrapper', elClassName, (error && 'error'));

    return (
        <div className={classes} >
            <label className='input__label'>
                {label && <span className='label__text' >
                    {label}
                    {attrs.required && <span style={{color: 'red', marginLeft: '0.5em'}}>*</span>}
                </span>}
                <input ref={ref} {...attrs}/>
            </label>
            <span className='input__placeholder'>{placeholder}</span>
            <span className='input__error'>{error}</span>
        </div>
    );
});

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    elClassName: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};
Input.defaultProps = {
    elClassName: '',
    label: '',
    placeholder: '',
    error: ''
};

export default Input;