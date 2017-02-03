import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'

import {
    Card,
    CardTitle,
    CardText,
    TextField,
    SelectField,
    MenuItem,
    DatePicker,
    Checkbox,
    FlatButton,
    RaisedButton,
} from 'material-ui'

import Add from 'material-ui/svg-icons/content/add'
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep'

const styles = {
    label: {
        fontSize: 16,
        marginTop: 40,
        lineHeight: '32px',
        verticalAlign: 'bottom',
    },
    checkboxLabel: {
        fontSize: 16,
        marginTop: 24,
    },
    fieldLabel: {
        fontSize: 16,
        marginTop: 24,
    },
    checkboxGroup: {
        marginTop: 14,
    },
    checkbox: {
        marginTop: 24,
    },
    button: {
        marginTop: 24,
    }
}

const Label = ({ style, ...params }) =>
    <div style={{ ...styles.label, ...style }} {...params} />

class App extends Component {
  render() {
    return (
        <Grid>
          <Card>
            <CardText>
              <Row>
                <Col xs={12} md={6}>
                  <SelectField fullWidth={true} floatingLabelText="Type of Business Entity">
                    <MenuItem value={0} primaryText="Joint-Stock Company" />
                    <MenuItem value={1} primaryText="Sole Proprietorship" />
                    <MenuItem value={2} primaryText="Limited Liability Company" />
                    <MenuItem value={3} primaryText="Public Joint-Stock Company" />
                    <MenuItem value={4} primaryText="Other" />
                  </SelectField>
                  <div style={styles.checkboxLabel}>Types of Business Activity</div>
                  <Row style={styles.checkboxGroup}>
                    <Col xs={12} sm={3}>
                      <Checkbox label="Services" />
                    </Col>
                    <Col xs={12} sm={3}>
                      <Checkbox label="Trade" />
                    </Col>
                    <Col xs={12} sm={3}>
                      <Checkbox label="Production" />
                    </Col>
                    <Col xs={12} sm={3}>
                      <Checkbox label="Other" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true}floatingLabelText="Certificate Number" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <DatePicker floatingLabelText="Registration Date" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <SelectField fullWidth={true} floatingLabelText="Business Duration" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true}floatingLabelText="Classification Code" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <Label>Legal Address</Label>
                  <TextField fullWidth={true}floatingLabelText="City" />
                  <TextField fullWidth={true}floatingLabelText="Street Name" />
                  <Row>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true}floatingLabelText="House Number" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true}floatingLabelText="Apartment Number" />
                    </Col>
                  </Row>
                  <Checkbox style={styles.checkbox} label="Legal Address is the same as Postal Address" />
                </Col>
                <Col xs={12} sm={6}>
                  <Label>Postal Address</Label>
                  <TextField fullWidth={true}floatingLabelText="City" />
                  <TextField fullWidth={true}floatingLabelText="Street Name" />
                  <Row>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true}floatingLabelText="House Number" />
                    </Col>
                    <Col xs={12} sm={6}>
                      <TextField fullWidth={true}floatingLabelText="Apartment Number" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardText>
          </Card>
          <Card>
            <CardTitle title="Business Activity" />
            <CardText>
              <Row>
                <Col xs={12} sm={6} md={3}>
                  <div style={styles.fieldLabel}>Services</div>
                  <TextField fullWidth={true}floatingLabelText="Fraction, %" />
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div style={styles.fieldLabel}>Trade</div>
                  <TextField fullWidth={true}floatingLabelText="Fraction, %" />
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div style={styles.fieldLabel}>Production</div>
                  <TextField fullWidth={true}floatingLabelText="Fraction, %" />
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div style={styles.fieldLabel}>Other</div>
                  <TextField fullWidth={true}floatingLabelText="Fraction, %" />
                </Col>
              </Row>
            </CardText>
          </Card>
          <Card>
            <CardTitle title="Outstanding Loans" />
            <CardText>
              <Row>
                <Col xs={9} sm={11}>
                  <Row>
                    <Col xs={12} sm={4}>
                      <TextField fullWidth={true} floatingLabelText="Bank" />
                    </Col>
                    <Col xs={12} sm={4}>
                      <TextField fullWidth={true} floatingLabelText="Account Number" />
                    </Col>
                    <Col xs={12} sm={4}>
                      <TextField fullWidth={true} floatingLabelText="Amount Due" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={3} sm={1}>
                  <FlatButton
                      secondary={true}
                      icon={<ContentDeleteSweep />}
                      style={{ marginTop: 28 }}
                  />
                </Col>
              </Row>
              <RaisedButton style={styles.button} icon={<Add/>} label="Add" />
            </CardText>
          </Card>
        </Grid>
    );
  }
}

export default App;
