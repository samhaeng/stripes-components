/**
 * Multiple fields example
 */

import React, { Component } from 'react';
import RepeatableField from '../RepeatableField';
import TextField from '../../TextField';
import RadioButton from '../../RadioButton';
import Label from '../../Label';
import Layout from '../../Layout';
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
        addLabel="Add new member"
        fields={fields}
        onAdd={this.handleAdd}
        onRemove={this.handleRemove}
        renderField={(field, index) => ((
          <Layout className="padding-bottom-gutter full">
            <Row>
              <Col xs>
                <TextField
                  marginBottom0
                  label="Name"
                  name="name"
                  value={field.name}
                  onChange={e => this.handleChange(e.target.value, 'name', index)}
                />
              </Col>
              <Col xs>
                <TextField
                  marginBottom0
                  label="Age"
                  name="age"
                  value={field.age}
                  onChange={e => this.handleChange(e.target.value, 'age', index)}
                />
              </Col>
              <Col xs>
                <TextField
                  marginBottom0
                  label="Location"
                  name="location"
                  value={field.location}
                  onChange={e => this.handleChange(e.target.value, 'location', index)}
                />
              </Col>
              <Layout className="padding-end-gutter padding-start-gutter">
                <Label>
                  Primary
                </Label>
                <RadioButton
                  name="primary"
                  value={field.location}
                  onChange={e => this.handleChange(e.target.value, 'primary', index)}
                  inline
                />
              </Layout>
            </Row>
          </Layout>
        ))}
      />
    );
  }
}
