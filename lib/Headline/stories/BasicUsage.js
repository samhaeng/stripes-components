/**
 * Headline: Basic Usage
 */

import React from 'react';
import Headline from '../Headline';

const BasicUsage = () => (
  <div style={{ padding: '15px' }}>
    <Headline size="small" margin="large" label="Small Headline" />
    <Headline size="medium" label="Medium Headline" />
    <Headline size="large" label="Large Headline" />
    <hr />
    <Headline size="large" margin="none" faded>
      Faded headline
    </Headline>
    <hr />
    <Headline size="medium" margin="small" label="Here is a nice medium headline with a small margin" />
    <Headline size="small" label="With a nice small faded non-bold sub headline" faded bold={false} tag="h3" />
    <hr />
  </div>
);

export default BasicUsage;
