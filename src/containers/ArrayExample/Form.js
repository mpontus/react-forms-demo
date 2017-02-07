import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, FieldArray, formValueSelector } from 'redux-form/immutable'
import { Row, Col } from 'react-flexbox-grid'
import {
    Card,
    CardTitle,
    CardText,
    CardActions,
    FlatButton,
    RaisedButton,
    RadioButton,
} from 'material-ui'
import Add from 'material-ui/svg-icons/content/add'
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep'
import {
    TextField,
    RadioButtonGroup,
} from 'internals/redux-form-material-ui'

const styles = {
    addButton: {
        marginTop: 24,
    },
    removeButton: {
        marginTop: 28,
    },
    submitButton: {
        marginTop: 14,
        float: 'right',
    },
    inlineRadioButtonGroup: {
        display: 'flex',
    },
    inlineRadioButton: {
        flex: '0 0 0',
    }
}

const renderFieldArray = ({ allowRemovingLast, onRemoveLast, fields }) => {

    const handleRemove = index => {
        const prevCount = fields.length

        fields.remove(index);

        if (prevCount === 1 && typeof onRemoveLast === 'function') {
            onRemoveLast();
        }
    }

    return (
        <div>
            {fields.map((loan, loanIndex) => (
                <Row key={loanIndex}>
                    <Col xs={9} sm={10} md={11}>
                        <Row>
                            <Col xs={12} sm={4}>
                                <TextField name={`${loan}.bank`} fullWidth={true} floatingLabelText="Bank" />
                            </Col>
                            <Col xs={12} sm={4}>
                                <TextField name={`${loan}.account`} fullWidth={true} floatingLabelText="Account Number" />
                            </Col>
                            <Col xs={12} sm={4}>
                                <TextField name={`${loan}.amount`} fullWidth={true} floatingLabelText="Amount Due" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} sm={2} md={1}>
                        <FlatButton
                            disabled={!allowRemovingLast && fields.length === 1}
                            onClick={() => handleRemove(loanIndex)}
                            secondary={true}
                            icon={<ContentDeleteSweep />}
                            style={styles.removeButton}
                        />
                    </Col>
                </Row>
            ))}
            <RaisedButton
                onClick={() => fields.push({})}
                style={styles.addButton}
                icon={<Add/>}
                label="Add" />
        </div>
    )
}

const selector = formValueSelector('array')

@reduxForm({
    form: 'array',
    destroyOnUnmount: false,
    pure: false,
})
@connect(state => ({
    loans: selector(state, 'loans'),
    loansExist: selector(state, 'loans_exist'),
}))
export default class Form extends Component {
    static defaultProps = {
        preserveLoans: false,
        allowRemovingLastLoan: false,
    }

    static normalizeFormData

    render() {
        const {
            // own props
            allowRemovingLastLoan,
            preserveLoans,
            // connected props
            loans,
            loansExist,
            // reduxForm props
            handleSubmit,
            change,
            array: { push, removeAll },
        } = this.props
        console.log(this.props)

        // TODO: Extract LoanExists into its own component?
        // Isolating the component can remove several dependencies from this file:
        // - imports
        // - Styles
        // - Connected props
        // - Handler
        const handleLoanExistsChange = (event, newValue) => {
            if (newValue) {
                // Ensure there is at least one loan when radio is checked
                console.log('loans', loans)
                if (loans === undefined || loans.size === 0) {
                    push('loans', {})
                }
            } else if (!preserveLoans) {
                removeAll('loans')
            }
        }

        const handleRemoveLastLoan = () => {
            change('loans_exist', false)
        }

        return (
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardTitle title="Presence of outstanding loans in other banks" />
                    <CardText>
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <RadioButtonGroup
                                    name="loans_exist"
                                    onChange={handleLoanExistsChange}
                                    style={styles.inlineRadioButtonGroup}
                                >
                                    <RadioButton value={true} label="Yes" style={styles.inlineRadioButton} />
                                    <RadioButton value={false} label="No"style={styles.inlineRadioButton} />
                                </RadioButtonGroup>
                            </Col>
                        </Row>
                        {loansExist && (
                            <FieldArray
                                name="loans"
                                component={renderFieldArray}
                                allowRemovingLast={allowRemovingLastLoan}
                                onRemoveLast={handleRemoveLastLoan}
                            />
                        )}
                    </CardText>
                </Card>
                <RaisedButton style={styles.submitButton} primary type="submit">Submit</RaisedButton>
            </form>
        )
    }
}