import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'

const ReplicationExample = () => (
    <Grid>
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
    </Grid>
)
