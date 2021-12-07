import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useState, useEffect} from 'react'
import { Link as RLink } from 'react-router-dom'

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders({ data }) {
  const [rows, setRows] = useState([{
      id: 0,
      date: "16 march",
      title: "here the tile is going on",
      slug: "the-slug-is-going-on-here",
      category: "blog"
    }])

  useEffect(()=> {
    setRows(data)
  })

  return (
    <React.Fragment>
      <Title>Recent Posts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Edit Post</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell align="right"><RLink to={`/edit/${row.category}/${row.slug}`}>Edit</RLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
