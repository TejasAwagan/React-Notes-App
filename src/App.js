import React, { useEffect } from 'react'
import Notelist from './components/Noteslist';
import "./components/NotesApp.css";
import { useState }  from 'react';
import {nanoid} from 'nanoid'
import Search from './components/Search';

const App = () =>{

const [notes, setNotes] = useState([
  {
    ID:nanoid(),
    text: "This is my first Notes",
    date:"12/12/12"
  },
  {
    ID:nanoid(),
    text: "This is my Second Notes",
    date:"14/12/12"
  },
  {
    ID:nanoid(),
    text: "This is my third Notes",
    date:"11/12/12"
  },
  {
    ID:nanoid(),
    text: "This is my fourth Notes",
    date:"17/12/12"
  }
]);

const [searchtext, setSearchText] = useState("");

useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if(savedNotes){
    setNotes(savedNotes);
  }
},[]);

useEffect(() =>{
  localStorage.setItem(
    'react-notes-app-data',
     JSON.stringify(notes)
    );
},[notes]);

const addNote = (text) =>{
  // console.log(text);
  const date = new Date();
  const newNote = {
    ID:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes);
};

const deleteNote = (ID) =>{
  const newNotes = notes.filter((note)=>note.ID !== ID);
  setNotes(newNotes);
}



  return(
    <div className='container'>
      <label className='heading'>Keep Notes</label>
      <Search handleSearchNote={setSearchText}/>
      <Notelist 
      notes={notes.filter((note)=> note.text.toLowerCase().includes(searchtext))} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    </div>
    
  )
}
export default App;