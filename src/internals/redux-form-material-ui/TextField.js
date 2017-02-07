import React from 'react'
import { Field, submit } from 'redux-form/immutable'
import { TextField } from 'material-ui'

const renderTextField = ({
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
        dispatch,
        form,
    },
    ...rest
}) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(submit(form))
        }
    }

    return (
        <TextField
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          onFocus={onFocus}
          errorText={touched || dirty ? error : undefined}
          {...rest}
          />
    )
}

export default ({ name, ...rest }) =>
    <Field name={name} component={renderTextField} {...rest} />
