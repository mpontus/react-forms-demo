import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
    Card,
    CardText,
    CardTitle,
    Checkbox,
    TextField,
} from 'material-ui'

const ConnectedFields = () => (
    <Grid>
      <Card>
        <CardText>
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
)
