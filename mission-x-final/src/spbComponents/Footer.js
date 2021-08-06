import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';






export default function Footer2() {
    return (
<Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit">
       LevelUp Works
      </Link>{' '}
      {new Date().getFullYear()}
      
    </Typography>
    )
}