import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Checkbox } from 'internals/redux-form-material-ui'

export default () => (
    <Row>
      <Col xs={12} sm={6} md={3}>
        <Checkbox name="activities.services" label="Services" />
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Checkbox name="activities.trade" label="Trade" />
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Checkbox name="activities.production" label="Production" />
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Checkbox name="activities.other" label="Other" />
      </Col>
    </Row>
)
