import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Edit(){
	const [data, setData] = useState({})
	let params = useParams()

	useEffect(()=> {

    axios.get(`http://localhost:5000/edit/${params.category}/${params.slug}`)
    .then(res=> console.log(res))

	},[])

	return (
		<p>this is edit page </p>
	)
}