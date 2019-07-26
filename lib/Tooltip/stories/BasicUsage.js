/**
 * Avatar: Basic Usage
 */

import React, { Component, createRef } from 'react';
import Tooltip from '../Tooltip';
import IconButton from '../../IconButton';

export default class BasicUsage extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = createRef(null);
  }

  render() {
    return (
      <div>
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
