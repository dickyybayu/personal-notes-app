import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onArchive, onDelete }) {
    if (notes.length === 0) {
        return <p>No notes found</p>;
    }
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NotesItem
                    key={note.id}
                    note={note}
                    onArchive={onArchive}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default NotesList;