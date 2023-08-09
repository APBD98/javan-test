import React from 'react'

export const THead = (props) => {
  return (
    <thead style={{border:'1px solid black'}}>
        <tr>
            <th>{props.nomor}</th>
            <th>{props.title}</th>
            <th>{props.desc}</th>
        </tr>
    </thead>
  )
}
