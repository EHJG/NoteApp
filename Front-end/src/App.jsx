import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotePage } from "./pages/NotePage";
import { NoteArchived } from "./pages/NoteArchived";
import { NoteActive } from "./pages/NoteActive";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/notes-create" element={<NoteActive />} />
          <Route path="/notes/:id" element={<NotePage />} />
          <Route path="/notes-archived" element={<NoteArchived />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
