import React from "react";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

function App() {
    return (
        <div>

            <Note
                title="This is the note title"
                content="This is the note content"
            />
        </div>
    )
}

export default App;