type rtnType = {
    notes: note;
    addNote: (text:string) => void;
};

type note = string[];

export function createNotesStore(): rtnType{
    return {
        notes: [],
        addNote(text:string) {
            this.notes.push(text);
        },
    }
}