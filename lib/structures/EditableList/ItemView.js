import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../../Button';

const ItemView = ({ item, field, visibleColumns, onEdit, onDelete, columnWidths }) => {
  const fields = visibleColumns.map(name => (
    <div key={name} style={{width: columnWidths[name], padding:'4px' }}>
      {item[name]}
    </div>
  ));
  const actions = (
    <Row end="xs" around="xs">
      <Col xs>
        <Button onClick={onEdit} aria-label="Edit Item">Edit</Button>
        <Button onClick={onDelete} aria-label="Delete Item">Delete</Button>
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


ItemView.propTypes = {
  item: PropTypes.object.isRequired,
  actionSuppression: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  visibleFields: PropTypes.arrayOf(PropTypes.string),
};

export default ItemView;
