import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form/immutable'
import { Row, Col } from 'react-flexbox-grid'
import { Card, CardTitle, CardText } from 'material-ui'
import { TextField } from 'internals/redux-form-material-ui'

const styles = {
    label: {
        fontSize: 16,
        marginTop: 24,
    }
}

const selector = formValueSelector('association')

@connect(state => ({
    activities: selector(state, 'activities'),
}))
export default class ActivityChart extends Component {
    render() {
        const { activities } = this.props

        if (activities === undefined || !activities.includes(true)) {
            return null
        }

        const isEnabled = activity =>
            activities === undefined ? false : activities.get(activity)

        return (
            <Card>
              <CardTitle title="Business Activity" />
              <CardText>
                <Row>
                  {isEnabled('services') && (
                       <Col xs={12} sm={6} md={3}>
                         <div style={styles.fieldLabel}>Services</div>
                         <TextField name="activity_chart.services" fullWidth={true}floatingLabelText="Fraction, %" />
                       </Col>
                   )}
                  {isEnabled('trade') && (
                       <Col xs={12} sm={6} md={3}>
                         <div style={styles.fieldLabel}>Trade</div>
                         <TextField name="activity_chart.trade" fullWidth={true}floatingLabelText="Fraction, %" />
                       </Col>
                   )}
                  {isEnabled('production') && (
                       <Col xs={12} sm={6} md={3}>
                         <div style={styles.fieldLabel}>Production</div>
                         <TextField name="activity_chart.production" fullWidth={true}floatingLabelText="Fraction, %" />
                       </Col>
                   )}
                  {isEnabled('other') && (
                       <Col xs={12} sm={6} md={3}>
                         <div style={styles.fieldLabel}>Other</div>
                         <TextField name="activity_chart.other" fullWidth={true}floatingLabelText="Fraction, %" />
                       </Col>
                   )}
                </Row>
              </CardText>
            </Card>
        )
    }
}

