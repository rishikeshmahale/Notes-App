import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';
import { NoteObject } from './models/note';

import { Box } from "@mui/material";

const App = () => {

  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string))
    }
  }, [])

  const addNotes = (note : NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem('notes' , JSON.stringify([note , ...notes]))
  }

  const deleteNote = (id : number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
  }
  
  return (
    <>
      <Header />
      <Box>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>

    </>
  )
}

export default App
