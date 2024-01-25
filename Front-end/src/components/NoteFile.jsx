import React, { useEffect, useState } from "react";
import { NoteCard } from "./NoteCard";
import { getAllNotes } from "../api/note.api";
import Topbar from "./Topbar";

export function NoteFile({ nota }) {
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
      <Topbar valor="Notes file" />
      <div className="grid grid-cols-3 gap3 space-evenly p-2">
        {notas.map((nota) => (
          <NoteCard key={nota.id} nota={nota} />
        ))}
      </div>
    </div>
  );
}
