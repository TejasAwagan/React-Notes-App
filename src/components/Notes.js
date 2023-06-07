import {MdDeleteForever} from 'react-icons/md';
import "./NotesApp.css";

const Notes = ({ID, text, date, handleDeleteNote}) =>{
    return(
        <div className="notes">
            <span>{text}</span>
            <div className="notes-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={()=> handleDeleteNote(ID)} 
                className='delete-icon' 
                size='1.3em'/>
            </div>
        </div>
    )
}
export default Notes;