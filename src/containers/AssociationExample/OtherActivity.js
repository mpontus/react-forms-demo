import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form/immutable'
import { TextField } from 'internals/redux-form-material-ui'

const selector = formValueSelector('association')

@connect(state => ({
  activities: selector(state, 'activities'),
}))
export default class OtherActivity extends Component {
    render() {
        const { activities } = this.props;

        if (activities === undefined || !activities.get('other')) {
            return null
        }

        return (
            <TextField name="other_activity" fullWidth={true} floatingLabelText="Other Activity" />
        )
    }
}


