import React, { useState } from 'react';
import { useNoteStore } from './NotesContext';

function NewNoteForm() {
    const [ noteText, setNoteText ] = useState('');
    const notesStore = useNoteStore();

    return ( 
    <>
        <input value={noteText} onChange={(e) => setNoteText(e.target.value)} type="text"/>
        <button onClick={(e) =>
            notesStore().addNote(noteText)
        }>
            Add Notes
        </button>    
    </>
    )
}

export default NewNoteForm;