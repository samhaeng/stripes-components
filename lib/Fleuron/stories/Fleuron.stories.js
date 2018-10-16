import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Readme from '../readme.md';
import BasicUsage from './BasicUsage';

storiesOf('Fleuron', module)
  .addDecorator(withReadme(Readme))
  .add('Basic usage', BasicUsage);
