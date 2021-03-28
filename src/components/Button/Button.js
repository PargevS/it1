import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//* import of components and developer packages
import './Button.scss';

const Button = ({children, css, elClassName, hovered, disabled, onClick, ...attrs}) => {
    const classes = classNames('btn', (hovered && 'hovered'),elClassName);
    const elStyles = !hovered ? {...css} : {...css, backgroundColor: null, color: css.backgroundColor || '#fff'};


    const addBgColor = (hovered) => (e) => {
        if(hovered){
            e.target.style.backgroundColor = css.backgroundColor || 'green' || null;
            e.target.style.color = '#fff';
        }
    }

    const removeBgColor = (hovered) => (e) => {
        if(hovered){
            e.target.style.backgroundColor =  null;
            e.target.style.color = css.backgroundColor || '#fff';
        }
    }


    return (
        <button className={classes}
                disabled={disabled}
                style={{...elStyles}}
                onClick={onClick}
                onMouseLeave={removeBgColor(hovered)}
                onMouseOver={ addBgColor(hovered)}
                {...attrs}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    css: PropTypes.object,
    elClassName: PropTypes.string,
    hovered: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};
Button.defaultProps = {
    children: <></>,
    css: {},
    elClassName: '',
    hovered: false,
    disabled: false,
    onClick: () => {}
};

export default Button;