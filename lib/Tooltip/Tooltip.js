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
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    shortcut: PropTypes.string,
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

  /**
   * Render proximity element for accessibility purposes
   */
  renderProximityElement = () => {
    const { id, label, shortcut } = this.props;
    return (
      <span className="sr-only">
        { label && <span id={`${id}-label`}>{label}</span> }
        { shortcut && <span id={`${id}-shortcut`}>{shortcut}</span> }
      </span>
    )
  }

  render() {
    const { id, label, shortcut, children } = this.props;
    const { open } = this.state;

    const renderProps = {
      'ref': this.triggerRef,
      'aria-labelledby': `${label ? `${id}-label` : ''} ${shortcut ? `${id}-shortcut` : ''}`.trim()
    };

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
        {typeof children === 'function' ? children(renderProps) : null}
        {this.renderProximityElement()}
      </Fragment>
    );
  }
}
