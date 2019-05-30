import React from 'react';
import Button from '../Button';
import Icon from '../../Icon';
import Headline from '../../Headline';

export default () => (
  <div>
    <Headline size="large">Colors</Headline>
    <Button>Default</Button>
    <Button buttonStyle="primary">Primary</Button>
    <Button buttonStyle="danger">Danger</Button>
    <Button buttonStyle="success">Success</Button>
    <Button buttonStyle="warning">Warning</Button>
    <hr />
    <Headline size="large">Mega</Headline>
    <Button buttonStyle="default mega">Default</Button>
    <Button buttonStyle="primary mega">Primary</Button>
    <Button buttonStyle="danger mega">Danger</Button>
    <Button buttonStyle="success mega">Success</Button>
    <Button buttonStyle="warning mega">Warning</Button>
    <hr />
    <Headline size="large">With icon</Headline>
    <Button buttonStyle="primary">
      <Icon icon="archive" size="small">
        Archive
      </Icon>
    </Button>
    <Button buttonStyle="primary">
      <Icon icon="trash" size="small" iconPosition="end">
        Delete
      </Icon>
    </Button>
    <hr />
    <Headline size="large">Full width</Headline>
    <Button fullWidth>Default</Button>
    <Button fullWidth buttonStyle="primary">Primary</Button>
    <Button fullWidth buttonStyle="danger">Danger</Button>
    <hr />
    <Headline size="large">Alignment</Headline>
    <Button align="start" fullWidth buttonStyle="primary">Start</Button>
    <Button align="center" fullWidth buttonStyle="primary">Center (default)</Button>
    <Button align="end" fullWidth buttonStyle="primary">End</Button>
    <hr />
    <Headline size="large">Dropdown Item</Headline>
    <Button buttonStyle="dropdownItem">
      <Icon icon="trash">Delete</Icon>
    </Button>
    <Button buttonStyle="dropdownItem">
      <Icon icon="edit">Batch edit</Icon>
    </Button>
    <Button buttonStyle="dropdownItem">
      <Icon icon="bookmark">Bookmark</Icon>
    </Button>
    <Button buttonStyle="dropdownItem">
      <Icon icon="duplicate">Duplicate</Icon>
    </Button>
    <Button buttonStyle="dropdownItem" disabled>
      <Icon icon="select-all">Select all (disabled)</Icon>
    </Button>
  </div>
);
