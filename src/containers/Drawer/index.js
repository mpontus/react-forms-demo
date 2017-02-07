import React from 'react'
import { Link } from 'react-router'
import { Drawer, MenuItem } from 'material-ui'

const Entry = ({ to, children }) =>
    <MenuItem containerElement={<Link to={to}/>}>{children}</MenuItem>

const DrawerContainer = props => (
    <Drawer open={true} {...props}>
      <Entry to="/connected">Connected Fields Example</Entry>
      <Entry to="/replication">Replication Example</Entry>
      <Entry to="/complex">Complex Form Example</Entry>
    </Drawer>
)

export default DrawerContainer
