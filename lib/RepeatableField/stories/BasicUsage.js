import React, { Component, Fragment } from 'react';
import RepeatableField from '../RepeatableField';
import TextField from '../../TextField';
import { Row, Col } from '../../LayoutGrid';

export default class BasicUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    };
  }

  handleAdd = () => {
    this.setState(({ fields }) => ({
      fields: fields.concat({})
    }));
  }

  handleRemove = (index) => {
    this.setState(({ fields }) => ({
      fields: [...fields.slice(0, index), ...fields.slice(index + 1)]
    }));
  }

  handleChange = (value, name, index) => {
    this.setState(({ fields }) => ({
      fields: fields.map((row, i) => {
        if (i === index) {
          return { ...row, [name]: value };
        }
        return row;
      })
    }));
  }

  render() {
    const { fields } = this.state;
    return (
      <RepeatableField
        addLabel="+ Add author"
        fields={fields}
        onAdd={this.handleAdd}
        onRemove={this.handleRemove}
        renderField={(field, index) => ((
          <Row style={{ width: '100%' }}>
            <Col xs>
              <TextField
                label="Name"
                name="name"
                value={field.name}
                onChange={e => this.handleChange(e.target.value, 'name', index)}
              />
            </Col>
            <Col xs>
              <TextField
                label="Age"
                name="age"
                value={field.age}
                onChange={e => this.handleChange(e.target.value, 'age', index)}
              />
            </Col>
            <Col xs>
              <TextField
                label="Location"
                name="location"
                value={field.location}
                onChange={e => this.handleChange(e.target.value, 'location', index)}
              />
            </Col>
          </Row>
        ))}
      />
    );
  }
}
