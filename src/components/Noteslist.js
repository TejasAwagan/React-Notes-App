import React from 'react'
import Notes from './Notes';
import AddNote from './AddNote';

function Noteslist({notes, handleAddNote, handleDeleteNote, ID}) {
  return (
    <div className='notes-list'>
        {notes.map((notes)=>(
          <Notes 
          ID={notes.ID} 
          text={notes.text} 
          date={notes.date}
          handleDeleteNote={handleDeleteNote} />
        ) 
        )}
        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}
export default Noteslist;
