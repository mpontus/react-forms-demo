import React, { PropTypes } from 'react'

const defaultStyle = {
    fontSize: 16,
    marginTop: 40,
    lineHeight: '32px',
    verticalAlign: 'bottom',
}

const Label = ({ style, ...props }) =>
    <div style={{ ...defaultStyle, ...style }} {...props} />

Label.displayName = 'Label'

Label.propTypes = {
    style: PropTypes.object,
}

export default Label
