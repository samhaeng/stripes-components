/**
 * Nav List Item
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import css from './NavListItem.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

const NavListItem = React.forwardRef(({ children, className, isActive, ...rest }, ref) => {
  let Element = 'button';
  const props = {
    className: classnames(css.NavListItem, { [css.isActive]: isActive }, className),
    ...rest,
    ref,
  };

  if (rest.href) {
    Element = 'a';
  }

  if (rest.to) {
    Element = Link;

    // React router dom's <Link> component
    // receives ref via. the "innerRef"-prop
    delete props.ref;
    props.innerRef = ref;
  }

  return (
    <Element {...props}>
      <div className={css.NavListItemInner}>
        {children}
      </div>
    </Element>
  );
});

NavListItem.propTypes = propTypes;

export default NavListItem;
