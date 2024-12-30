import React from "react";

function ArchiveButton({ id, onArchive, note }) {
    return <button onClick={() => onArchive(id)}>{note.archived ? "Unarchive" : "Archive"}</button>;

}

export default ArchiveButton;