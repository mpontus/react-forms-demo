import React, { Component, PropTypes, Children } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form/immutable'
import { TextField, Checkbox } from 'internals/redux-form-material-ui'

import { Row, Col } from 'react-flexbox-grid'
import { Card, CardText } from 'material-ui'

const REPLICATION_FLAG_FIELD_NAME = 'copy'

const styles = {
    label: {
        fontSize: 16,
        marginTop: 24,
    }
}

class ReplicatingField extends Component {
    static propTypes = {
        target: PropTypes.string,
        formChange: PropTypes.func,
    };

    render() {
        const { target, formChange, children } = this.props
        return React.cloneElement(Children.only(children), {
            onChange: (event, newValue) => formChange(target, newValue)
        });
    }
}


@reduxForm({ form: 'replication' })
@connect(state => ({
    replicationEnabled: formValueSelector('replication')(state, REPLICATION_FLAG_FIELD_NAME),
    legalAddress: formValueSelector('replication')(state, 'address_legal'),
}))
export default class ReplicationExample extends Component {

    static defaultProps = {
        bidirectional: false,
    }

    render() {
        const {
            bidirectional,
            replicationEnabled,
            legalAddress,
            change,
        } = this.props

        const replicationsFromTo = ['city', 'street', 'house', 'apartment']
            .reduce((memo, key) => ({
                ...memo,
                [`address_legal.${key}`]: `address_postal.${key}`,
            }), {})

        // Flip replicationsFromTo around
        const replicationsToFrom = Object.keys(replicationsFromTo)
            .reduce((memo, key) => ({
                ...memo,
                [replicationsFromTo[key]]: key,
            }), {})

        const renderTextField = ({ label, name }) => {
            const field = <TextField fullWidth={true} floatingLabelText={label} name={name} />

            if (replicationEnabled) {
                if (replicationsFromTo[name]) {
                    return React.cloneElement(field, {
                        onChange: (event, newValue) => change(replicationsFromTo[name], newValue)
                    })
                }
                if (replicationsToFrom[name]) {
                    if (bidirectional) {
                        return React.cloneElement(field, {
                            onChange: (event, newValue) => change(replicationsToFrom[name], newValue)
                        })
                    } else {
                        return React.cloneElement(field, {
                            onChange: (event, newValue) => change('copy', false)
                        })
                    }
                }
            }

            return field
        }

        const handleReplicationFlagChange = (event, isInputChecked) =>
            isInputChecked && change('address_postal', legalAddress)

        return (
            <form>
                <Card>
                    <CardText>
                        <Row>
                            <Col xs={12} md={6}>
                                <div style={styles.label}>Legal Address</div>
                                {renderTextField({ name: 'address_legal.city', label: 'City' })}
                                {renderTextField({ name: 'address_legal.street', label: 'Street Name' })}
                                <Row>
                                    <Col xs={12} sm={6}>
                                        {renderTextField({ name: 'address_legal.house', label: 'House Number' })}
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        {renderTextField({
                                            name: 'address_legal.apartment',
                                            label: 'Apartment Number'
                                        })}
                                    </Col>
                                </Row>
                                <Checkbox name="copy" style={styles.fieldSpacing}
                                          label="Legal Address is the same as Postal Address"
                                          onChange={handleReplicationFlagChange}/>
                            </Col>
                            <Col xs={12} md={6}>
                                <div style={styles.label}>Postal Address</div>
                                {renderTextField({ name: 'address_postal.city', label: 'City' })}
                                {renderTextField({ name: 'address_postal.street', label: 'Street Name' })}
                                <Row>
                                    <Col xs={12} sm={6}>
                                        {renderTextField({ name: 'address_postal.house', label: 'House Number' })}
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        {renderTextField({
                                            name: 'address_postal.apartment',
                                            label: 'Apartment Number'
                                        })}
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
