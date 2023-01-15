import React from "react"
import DeleteIcon from '@mui/icons-material/Delete'

const Note = props => {
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={() => {props.onClick(props.id)}}><DeleteIcon /></button>
        </div>
    )
}

export default Note