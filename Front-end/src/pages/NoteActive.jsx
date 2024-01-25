import Card from "../components/Card";
import NoteApp from "../components/Note";
import NoteList from "../components/NoteList";

export function NoteActive() {
  return (
    <section className="layout h-screen">
      <div className="sidebar">
        <Card />
      </div>
      <div className="body">
        <NoteApp />
        <NoteList/>
      </div>
    </section>
  );
}
