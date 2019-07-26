/**
 * Tooltip
 */

import React, { Component, createRef, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Popper from '../Popper';
import css from './Tooltip.css';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.triggerRef = createRef();
  }

  state = {
    open: false,
  }

  componentDidMount() {
    if (this.triggerRef && this.triggerRef.current) {
      this.triggerRef.current.addEventListener('mouseover', this.onMouseOver);
      this.triggerRef.current.addEventListener('mouseout', this.onMouseOut);
      this.triggerRef.current.addEventListener('focus', this.onFocus);
      this.triggerRef.current.addEventListener('focusout', this.onFocusOut);
    }
  }

  onMouseOver = (e) => {
    this.timeout = setTimeout(() => {
      this.toggle(true);
    }, 70);
  }

  onMouseOut = (e) => {
    clearTimeout(this.timeout);
    this.toggle(false);
  }

  onFocus = () => {
    this.toggle(true);
  }

  onFocusOut = () => {
    this.toggle(false);
  }

  toggle = (bool) => {
    const { open } = this.state;
    if (bool !== open) {
      this.setState({
        open: bool,
      });
    }
  }

  render() {
    const { label, shortcut, children } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Popper
          isOpen={open}
          anchorRef={this.triggerRef}
        >
          <div className={css.tooltip}>
            <div className={css.label}>
              {label}
            </div>
            <div className={css.shortcut}>
              {shortcut}
            </div>
          </div>
        </Popper>
        {typeof children === 'function' ? children({ ref: this.triggerRef }) : null}
      </Fragment>
    );
  }
}
