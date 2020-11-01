import { useObserver } from 'mobx-react';
import React from 'react';
import './App.css';
import CounterComponent from './counter/component';
import { useCounterStore } from './counter/context';
import NewNoteForm from './note/NewNoteForm';
import { useNoteStore } from './note/NotesContext';
import SimpleCounter from './SimpleCounter';

function App() {
  // const noteStore = useNoteStore();

  return (
    <CounterComponent />
  )

  // return useObserver( () =>
  //   <SimpleCounter />
  // );
  // return useObserver( () => 
  //   <>
  //     <ul>
  //       {noteStore().notes.map((note, idx) => 
  //         <li key={idx}>{note}</li>
  //       )}
  //     </ul>
  //     <NewNoteForm />
  //   </>
  // );
}

export default App;
