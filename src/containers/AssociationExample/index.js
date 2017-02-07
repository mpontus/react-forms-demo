import React from 'react'
import Form from './Form'

export default () =>
    <Form onSubmit={values => alert(JSON.stringify(values, null, 2))}/>
