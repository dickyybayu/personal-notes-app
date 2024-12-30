import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NotesButton({ id, onArchive, onDelete, note }) {
    return (
        <div className="note-actions">
            <ArchiveButton id={id} onArchive={onArchive} note={note} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NotesButton;