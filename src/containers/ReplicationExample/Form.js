import React, { Component, PropTypes, Children } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { TextField, Checkbox } from 'internals/redux-form-material-ui'

import { Row, Col } from 'react-flexbox-grid'
import { Card, CardText } from 'material-ui'

const styles = {
    label: {
        fontSize: 16,
        marginTop: 24,
    }
}

class ReplicableField extends Component {
    static propTypes = {
        target: PropTypes.string,
        enabled: PropTypes.bool,
        disabled: PropTypes.bool,
        // reduxForm's change
        formChange: PropTypes.func,
    }

    get isEnabled() {
        if (this.props.enabled === undefined && this.props.disabled === undefined) {
            return true
        }
        if (this.props.enabled === undefined) {
            return !this.props.disabled
        }
        if (this.props.disabled === undefined) {
            return this.props.enabled
        }
        return this.props.enabled && !this.props.disabled
    }

    render() {
        const { target, formChange, children } = this.props
        const field = Children.only(children)
        return React.cloneElement(field, {
            onChange: (event, newValue) => {
                this.isEnabled && formChange(target, newValue)
            }
        });
    }
}

@reduxForm({ form: 'replication' })
@connect(state => {
    replicationEnabled: formValueSelector('replication')(state, 'copy')
})
export default class Replication extends Component {
    render() {
        const { replicationEnabled } = this.props

        const renderTextField = ({ replicate, ...props }) => {
            const children = <TextField fullWidth={true} {...props}/>
            return replicationEnabled
                ? children
                : <ReplicableField target={replicate}>{children}</ReplicableField>
        }
        return (
            <form>
              <Card>
                <CardText>
                  <Row>
                    <Col xs={12} md={6}>
                      <div style={styles.label}>Legal Address</div>
                      <renderTextField name="address_legal.city" fullWidth={true} floatingLabelText="City" />
                      <renderTextField name="address_legal.street" fullWidth={true} floatingLabelText="Street Name" />
                      <Row>
                        <Col xs={12} sm={6}>
                          <renderTextField name="address_legal.house" fullWidth={true} floatingLabelText="House Number" />
                        </Col>
                        <Col xs={12} sm={6}>
                          <renderTextField name="address_legal.apartment" fullWidth={true} floatingLabelText="Apartment Number" />
                        </Col>
                      </Row>
                      <Checkbox name="copy" style={styles.fieldSpacing} label="Legal Address is the same as Postal Address" />
                    </Col>
                    <Col xs={12} md={6}>
                      <div style={styles.label}>Postal Address</div>
                      <renderTextField name="address_postal.city" fullWidth={true} floatingLabelText="City" />
                      <renderTextField name="address_postal.street" fullWidth={true} floatingLabelText="Street Name" />
                      <Row>
                        <Col xs={12} sm={6}>
                          <renderTextField name="address_postal.house" fullWidth={true} floatingLabelText="House Number" />
                        </Col>
                        <Col xs={12} sm={6}>
                          <renderTextField name="address_postal.apartment" fullWidth={true} floatingLabelText="Apartment Number" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardText>
              </Card>
            </form>
        )
    }
}
