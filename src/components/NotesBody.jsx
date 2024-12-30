import React from "react";
import { showFormattedDate } from "../utils";

function NotesBody({ note }) {
    return (
        <div className="notes-item-body">
            <h3>{note.title}</h3>
            <p>{showFormattedDate(note.createdAt)}</p>
            <p>{note.body}</p>
        </div>
    );
}

export default NotesBody;