import React, { PropTypes } from 'react'

const defaultStyle = {
    fontSize: 16,
    marginTop: 24,
}

const FieldLabel = ({ style, ...props }) =>
    <div style={{ ...defaultStyle, ...style }} {...props} />

FieldLabel.displayName = 'FieldLabel'

FieldLabel.propTypes = {
    style: PropTypes.object,
}

export default FieldLabel
