/**
 * Nav List Item
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import css from './NavListItem.css';
import Button from '../Button';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

const NavListItem = ({ children, className, isActive, ...rest }) => (
  <Button
    buttonStyle="navItem"
    buttonClass={classnames(
      css.NavListItem,
      { [css.isActive]: isActive },
      className
    )}
    {...rest}
  >
    {children}
  </Button>
);

NavListItem.propTypes = propTypes;

export default NavListItem;
