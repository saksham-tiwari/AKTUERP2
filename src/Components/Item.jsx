import React from 'react'

export default function Item(props) {
    return (
        <div>
            <tr>
                <th>{props.name}</th>
                <th>{props.roll}</th>
                <th>{props.nos}</th>
            </tr>            
        </div>
    )
}
