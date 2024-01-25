import { useCallback, useEffect, useState } from 'react'

export default function useNote() {
    const [notes, setNotes] = useState([]);
      const [currentNote, setCurrentNote] = useState('');
      const [editingIndex, setEditingIndex] = useState(-1);
      const [file, setFile] = useState('File');
      const [previousButtonText, setPreviousButtonText] = useState('');
       
    
      const addNote = () => {
        if (currentNote.trim() !== '') {
          setNotes([...notes, currentNote]);
          setCurrentNote('');
        }
      };
    
      const editNote = (index) => {
        setCurrentNote(notes[index]);
        setEditingIndex(index);
      };
    
      const updateNote = () => {
        if (currentNote.trim() !== '') {
          const updatedNotes = [...notes];
          updatedNotes[editingIndex] = currentNote;
          setNotes(updatedNotes);
          setCurrentNote('');
          setEditingIndex(-1);
        }
      };
    
      const deleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
      };
    
      const fileNote = (e) => {
        if (file === 'File') {
            setPreviousButtonText(file);
            setFile(e.target.innerHTML='Unfile');
          } else {
            setFile(previousButtonText);
          }
        };
      const handleCurrentNote = useCallback((e) => {
        setCurrentNote(e.target.value)

      }, [])
 return{
    setCurrentNote, handleCurrentNote, fileNote, deleteNote, addNote, editNote, currentNote, editingIndex, updateNote, notes, file
 }
}