import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Deposits from '../Deposits'
import {useState, useEffect} from 'react'

export default function DepositsUI(props){
  const [number, setNumber] = useState(0)

  useEffect(()=> {
    fetch("http://localhost:5000/total_post").then((res) => res.json()).then(res=> setNumber(res))
  },[])

	return (
		<Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
      <Deposits value={number} />
      </Paper>
   </Grid>
	)
}