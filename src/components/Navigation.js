import React from 'react'
import { withRouter, Link } from 'react-router'
import { Menu, Drawer, MenuItem } from 'material-ui'

const routes = [
  'association',
  'array',
  'replication',
  'complex',
]

const labels = {
  association: "Association Example",
  array: "Form Array Example",
  replication: "Repliation Example",
  complex: "Complex Form Example",
}

const Navigation = ({ location: { pathname }}) => (
  <Drawer open={true} docked={true}>
    <Menu value={pathname}>
      {routes.map(route => {
        const href = `/${route}`
        return (
          <MenuItem
            key={route}
            containerElement={<Link to={href}/>}
            value={href}
          >
            {labels[route]}
          </MenuItem>
        )
      })}
    </Menu>
  </Drawer>
)
export default withRouter(Navigation)