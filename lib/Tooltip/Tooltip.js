/**
 * Tooltip
 */

import React, { Component, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import Popper from '../Popper';
import css from './Tooltip.css';

export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.func,
    label: PropTypes.node,
    shortcut: PropTypes.node,
    triggerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType })
    ]),
  }

  constructor(props) {
    super(props);
    this.triggerRef = props.triggerRef || createRef(null);
    this.portal = document.getElementById('OverlayContainer');
  }

  state = {
    open: false,
  }

  componentDidMount() {
    if (this.triggerRef && this.triggerRef.current) {
      this.triggerRef.current.addEventListener('mouseover', this.show, true);
      this.triggerRef.current.addEventListener('mouseout', this.hide, true);
      this.triggerRef.current.addEventListener('focus', this.show, true);
      this.triggerRef.current.addEventListener('focusout', this.hide, true);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    if (this.triggerRef && this.triggerRef.current) {
      this.triggerRef.current.removeEventListener('mouseover', this.show, true);
      this.triggerRef.current.removeEventListener('mouseout', this.hide, true);
      this.triggerRef.current.removeEventListener('focus', this.show, true);
      this.triggerRef.current.removeEventListener('focusout', this.hide, true);
    }
  }

  toggle = (bool) => {
    const { open } = this.state;
    if (bool !== open) {
      this.setState({
        open: bool,
      });
    }
  }

  show = () => {
    this.timeout = setTimeout(() => this.toggle(true), 70);
  }

  hide = () => {
    clearTimeout(this.timeout);
    this.toggle(false);
  }

  render() {
    const { label, shortcut, children } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Popper
          isOpen={open}
          anchorRef={this.triggerRef}
          portal={this.portal}
        >
          <div className={css.tooltip} aria-hidden>
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
