import React, { PropTypes } from 'react'
import Label from './Label'

const styles = {
    root: {
        marginTop: 14,
    },
    container: {
        marginTop: 14,
    }
}

const Segment = ({
    style,
    label,
    labelStyle,
    containerStyle,
    children,
    ...props,
}) => (
    <div style={{ ...styles.root, style }} {...props}>
      <Label style={labelStyle}>{label}</Label>
      <div styles={{ ...styles.container, ...containerStyle }}>
        {children}
      </div>
    </div>
)

Segment.displayName = 'Segment'

Segment.propTypes = {
    style: PropTypes.object,
    label: PropTypes.node.isRequired,
    labelStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    children: PropTypes.node.isRequired,
}

export default Segment
