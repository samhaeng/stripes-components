/**
 * Avatar: Basic Usage
 */

import React, { Component, createRef } from 'react';
import Tooltip from '../Tooltip';
import IconButton from '../../IconButton';

export default class BasicUsage extends Component {
  constructor(props) {
    super(props);
    this.triggerRef = createRef(null);
  }

  render() {
    return (
      <div>
        {
          /*
            Option 1: Use an external ref.
            Note: The <Tooltip> should be placed after the toggle
          */
        }
        <IconButton icon="edit" ref={this.triggerRef} />
        <Tooltip
          label="Edit record"
          shortcut="CMD+E"
          triggerRef={this.triggerRef}
        />

        { /* Option 2: Use internal ref passed via. render function */ }
        <Tooltip
          label="Delete record"
          shortcut="CMD+D"
        >
          {({ ref }) => (
            <IconButton
              icon="trash"
              ref={ref}
            />
          )}
        </Tooltip>
      </div>
    );
  }
}
