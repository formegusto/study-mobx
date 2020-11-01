import React from 'react';
import { createNotesStore } from './notesStore';
import { useLocalStore } from 'mobx-react';

const NotesContext = React.createContext(createNotesStore);

export function NotesProvider({children} : any) {
    const notesStore = useLocalStore(createNotesStore);

    return (
        <NotesContext.Provider value={() => notesStore}>
            {children}
        </NotesContext.Provider>
    );
}

export const useNoteStore = () => React.useContext(NotesContext);