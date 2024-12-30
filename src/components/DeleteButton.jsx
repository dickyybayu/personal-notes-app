import React from "react";

function DeleteButton({id, onDelete }) {
    return <button onClick={() => onDelete(id)}>Delete</button>
}

export default DeleteButton;