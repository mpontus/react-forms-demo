import React, { Component } from 'react'
import { reduxForm } from 'redux-form/immutable'
import { Card, CardText } from 'material-ui'
import ActivityEnable from './ActivityEnable'
import OtherActivity from './OtherActivity'
import ActivityChart from './ActivityChart'

@reduxForm({ form: 'association' })
export default class Association extends Component {
    render() {
        return (
            <form>
              <Card>
                <CardText>
                  <ActivityEnable />
                  <OtherActivity />
                </CardText>
              </Card>
              <ActivityChart />
            </form>
        )
    }
}
