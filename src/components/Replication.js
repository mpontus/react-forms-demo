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

const styles = {
    label: {
        fontSize: 16,
    },
    sectionSpacing: {
        marginTop: 24,
    },
    fieldSpacing: {
        marginTop: 24,
    }
}

const ReplicationExample = () => (
    <Grid>
      <Card>
        <CardText>
          <Row>
            <Col xs={12} sm={6}>
              <div style={styles.label}>Legal Address</div>
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
              <Checkbox style={styles.fieldSpacing} label="Legal Address is the same as Postal Address" />
            </Col>
            <Col xs={12} sm={6}>
              <div style={styles.label}>Postal Address</div>
              <TextField fullWidth={true} floatingLabelText="City" />
              <TextField fullWidth={true} floatingLabelText="Street Name" />
              <Row>
                <Col xs={12} sm={6}>
                  <TextField fullWidth={true} floatingLabelText="House Number" />
                </Col>
                <Col xs={12} sm={6}>
                  <TextField fullWidth={true} floatingLabelText="Apartment Number" />
                </Col>
              </Row>
            </Col>
          </Row>
        </CardText>
      </Card>
    </Grid>
)

export default ReplicationExample
