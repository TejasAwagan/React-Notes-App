import "./NotesApp.css";
import  {useState} from 'react';

const AddNote = ({handleAddNote}) =>{

    const [notetext, setNotetext] = useState('');
    const CharacterLimit = 200;

    const handleChange = (event) =>{
        // console.log(event.target.value)
        setNotetext(event.target.value);                 
    };

    const handleSaveClick = () =>{
        if(notetext.trim().length > 0){
            handleAddNote(notetext);
            setNotetext("")
        }
        
    }

    return (
        <div className="new-note">
            <textarea
             rows="8"
             cols="20"
             placeholder="Type to Add Note..."
             onChange={handleChange}
             value={notetext}
            ></textarea>

            <div className="notes-footer">
                <small>{CharacterLimit - notetext.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;