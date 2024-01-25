import React, { useState, useEffect } from "react";
import { NoteCard } from "./NoteCard";
import { getAllNotes } from "../api/note.api";
import Topbar from "./Topbar";

export default function NoteList() {
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    async function loadTask() {
      const res = await getAllNotes();
      setNotas(res.data);
    }
    loadTask();
  }, []);
  return (
    <div>
      <Topbar valor="Active notes" ing={null} />
      <div className="grid grid-cols-3 gap3">
        {notas.map((nota) => (
          <NoteCard key={nota.id} nota={nota} />
        ))}
      </div>
    </div>
  );
}
