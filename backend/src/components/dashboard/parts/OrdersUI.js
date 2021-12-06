import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../Orders'

export default function OrderUI({ data }) {
	return (
		<Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Orders data={data} />
        </Paper>
     </Grid>
	)
}