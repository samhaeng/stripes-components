import React from 'react';
import Button from '../Button';
import Headline from '../../Headline';

export default () => (
  <div style={{ padding: '20px' }}>
    <Headline>Button Styles</Headline>
    <Button>Primary</Button>
    <Button buttonStyle="secondary">Secondary</Button>
    <Button buttonStyle="error">Error</Button>
    <Button buttonStyle="success">Success</Button>
    <Button buttonStyle="warning">Warning</Button>
    <Button buttonStyle="transparent">Transparent</Button>
    <br />
    <br />
    <hr />
    <br />
    <Headline>Hollow</Headline>
    <Button hollow>Primary</Button>
    <Button hollow buttonStyle="secondary">Secondary</Button>
    <Button hollow buttonStyle="error">Error</Button>
    <Button hollow buttonStyle="success">Success</Button>
    <Button hollow buttonStyle="warning">Warning</Button>
    <br />
    <br />
    <hr />
    <br />
    <Headline>Icon</Headline>
    <Button buttonStyle="primary" icon="left-arrow" iconPlacement="left">Button with icon (left)</Button>
    <Button buttonStyle="primary" icon="right-arrow" iconPlacement="right">Button with icon (right)</Button>
    <br /><br />
    <Button buttonStyle="error" icon="trashBin" iconPlacement="left">Delete</Button>
    <Button hollow buttonStyle="error" icon="trashBin" iconPlacement="left">Delete</Button>
    <Button buttonStyle="transparent" icon="up-caret" iconPlacement="left" marginNone>Transparent with icon</Button>
    <br />
    <br />
    <hr />
    <br />
    <Headline>Full width</Headline>
    <Button fullWidth>Primary</Button>
    <Button fullWidth buttonStyle="secondary">Secondary</Button>
    <Button fullWidth buttonStyle="error">Error</Button>
  </div>
);
