import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Field } from 'redux-form';
import Button from '../../Button';
import TextField from '../../TextField';

const ItemEdit = ({ field, visibleColumns, onCancel, onSave, columnWidths }) => {
  const fields = visibleColumns.map(name => (
    <div key={name} style={{width: columnWidths[name], padding:'4px' }}>
      <Field
        name={`${field}.${name}`}
        component={TextField}
        fullWidth
        marginBottom0
        placeholder={name}
      />
    </div>
  ));
  const actions = (
    <Row end="xs" around="xs">
      <Col xs>
        <Button onClick={onCancel} aria-label="Cancel">Cancel</Button>
        <Button onClick={onSave} aria-label="Save Item">Save</Button>
      </Col>
    </Row>
  );

  return (
    <div style={{display:'flex', justifyContent: 'space-between', maxWidth: '100%',}}>
      {fields}
      <Col xs>{actions}</Col>
    </div>
  );
};

ItemEdit.propTypes = {
  field: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  visibleFields: PropTypes.arrayOf(PropTypes.string),
};

export default ItemEdit;
