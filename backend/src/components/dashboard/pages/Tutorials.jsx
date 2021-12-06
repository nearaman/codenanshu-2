import React from 'react'
import { DashboardContent } from '../Dashboard'
import OrdersUI from '../parts/OrdersUI'

export default function Blog(){
const [data, setData] = React.useState([])

	React.useEffect(()=> {
		fetch("http://localhost:5000/all_articles/tutorial").then(res=> res.json()).then(res=> setData(res))
	})

	return (
		<DashboardContent>
			<OrdersUI data={data} />
		</DashboardContent>
	)
}