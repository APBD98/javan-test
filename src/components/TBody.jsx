import React from 'react'

export default function TBody(props) {
  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.desc}</td>
    </tr>
  )
}
