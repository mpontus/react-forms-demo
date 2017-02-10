import React, { Component } from 'react'
import { Toggle } from 'material-ui'
import Form from './Form'

export default class extends Component {
    state = {
        allowRemovingLastLoan: false,
        preserveEnteredLoans: false,
    }

    render() {
        return (
            <div>
                <br/>
                <Form
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                    allowRemovingLastLoan={this.state.allowRemovingLastLoan}
                    preserveLoans={this.state.preserveEnteredLoans}
                />
                <Toggle
                    label="Allow removing last loan"
                    labelPosition="right"
                    onToggle={(e, isInputChecked) => this.setState({
                        allowRemovingLastLoan: isInputChecked,
                    })}
                />
                <Toggle
                    label="Preserve entered loans"
                    labelPosition="right"
                    onToggle={(e, isInputChecked) => this.setState({
                        preserveEnteredLoans: isInputChecked,
                    })}
                />
            </div>
        )
    }
}