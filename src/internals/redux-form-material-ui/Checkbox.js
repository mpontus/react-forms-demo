import React from 'react'
import { Field } from 'redux-form/immutable'
import { Checkbox } from 'material-ui'

const renderCheckbox = ({
    input: {
        name,
        checked,
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
}) => {
    return (
        <div>
          <Checkbox
            name={name}
            checked={checked}
            onBlur={onBlur}
            onFocus={onFocus}
            onCheck={(event, isInputChecked) => onChange(isInputChecked)}
            {...rest}
            />
            {(touched || dirty) && error && (
                <div style={{ color: 'red' }}>
                  {error}
                </div>
            )}
        </div>
    )
}

export default ({ name, ...props }) =>
    <Field type="checkbox" name={name} component={renderCheckbox} {...props} />
