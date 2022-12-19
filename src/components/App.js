import React from "react";
import Note from "./Note";
import notes from "../notes";

function createNote(noteItem) {
    return <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
    />
}

function App() {
    return (
        <div className="keeper-body">
            {notes.map(createNote)}
        </div>
    )
}

export default App;