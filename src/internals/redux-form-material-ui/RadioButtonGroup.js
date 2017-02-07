import React from 'react'
import { Field } from 'redux-form/immutable'
import { RadioButtonGroup } from 'material-ui'

const renderCheckbox = ({
    input: {
        name,
        value,
        onBlur,
        onChange,
        onFocus,
    },
    meta: {
        touched,
        dirty,
        error,
    },
    ...rest
}) => (
    <RadioButtonGroup
        name={name}
        valueSelected={value}
        onChange={(event, newSelection) => onChange(newSelection)}
        {...rest}
    />
)

export default ({ name, ...props }) =>
    <Field type="checkbox" name={name} component={renderCheckbox} {...props} />
