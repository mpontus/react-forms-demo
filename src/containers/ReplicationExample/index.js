import React, { Component } from 'react'
import { Toggle } from 'material-ui'
import Form from './Form'

export default class extends Component {
    state = {
        bidirectional: false,
    }

    render() {
        return (
            <div>
                <Form
                    bidirectional={this.state.bidirectional}
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                />
                <br/>
                <Toggle
                    label="Bidirectional"
                    labelPosition="right"
                    onToggle={(e, isInputChecked) => this.setState({
                        bidirectional: isInputChecked,
                    })}
                />
            </div>
        )
    }
}