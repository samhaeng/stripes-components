import React from 'react';
import Button from '../Button';
import RadioButton from '../../RadioButton';
import Layout from '../../Layout';
import Checkbox from '../../Checkbox';
import TextArea from '../../TextArea';
import TextField from '../../TextField';
import Select from '../../Select';
import NavList from '../../NavList';
import NavListItem from '../../NavListItem';
import NavListSection from '../../NavListSection';
import SearchField from '../../SearchField';
import Icon from '../../Icon';

export default () => (
  <div style={{ maxWidth: '500px', position: 'relative' }}>
  <div style={{
    display: 'block',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '1px',
    backgroundColor: 'red',
    left: '0.5rem',
    opacity: '0.5',
    zIndex: 99,
  }} />
    <Button>Default button</Button><br/>
    <Button buttonStyle="primary">Primary</Button><br/>
    <Button buttonStyle="danger">Danger</Button><br/>
    <Button buttonStyle="success">Success</Button><br/>
    <Button buttonStyle="warning">Warning</Button><br/>
    <RadioButton label="Inline Radio Button 3" name="inline" value="inline1" label="Here's a radio button" />
    <Checkbox label="Here's a checkbox" />
    <TextArea>Here's a text area.</TextArea>
    <TextField value="Here's a text field" />
    <SearchField />
    <Select>
      <option>Here's a select field</option>
    </Select>
    <NavList>
      <NavListSection stripped>
        <NavListItem>
        <Icon icon="duplicate">
          Here's dropdownItem styled button with an icon
        </Icon>
        </NavListItem>
        <NavListItem>Here's a nav list item</NavListItem>
        <NavListItem>Here's a nav list item</NavListItem>
        <NavListItem>Here's a nav list item</NavListItem>
        <NavListItem>Here's a nav list item</NavListItem>
      </NavListSection>
    </NavList>
    <Button buttonStyle="dropdownItem">
      <Icon icon="duplicate">
        Here's dropdownItem styled button with an icon
      </Icon>
    </Button>
    <Button buttonStyle="dropdownItem">Here's a dropdownItem styled button</Button>
    <Button buttonStyle="dropdownItem">Here's a dropdownItem styled button</Button>
    <Button buttonStyle="dropdownItem">Here's a dropdownItem styled button</Button>
    <Button buttonStyle="dropdownItem">Here's a dropdownItem styled button</Button>
  </div>
);
