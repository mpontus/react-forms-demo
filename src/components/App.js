import React from 'react';
import { Grid } from 'react-flexbox-grid'
import Navigation from './Navigation'

export default ({ children }) => (
  <Grid>
    <Navigation />
    <div style={{ marginLeft: 256, marginTop: 32 }}>
      {children}
    </div>
  </Grid>
)
