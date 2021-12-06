import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ value }) {
  return (
    <React.Fragment>
      <Title>Total Articles</Title>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        in all directories
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Links
        </Link>
      </div>
    </React.Fragment>
  );
}
