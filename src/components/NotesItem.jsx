import React from "react";
import NotesButton from "./NotesButton";
import NotesBody from "./NotesBody";

function NotesItem({ note, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NotesBody note={note} />
            <NotesButton id={note.id} onDelete={onDelete} onArchive={onArchive} note={note} />
        </div>
    );
}

export default NotesItem;