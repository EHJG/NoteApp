import Card from "../components/Card";
import {NoteFile} from "../components/NoteFile";

export function NoteArchived() {
  return (
    <section className="layout h-screen">
      <div className="sidebar">
        <Card />
      </div>
      <div className="body">
        <NoteFile/>
      </div>
    </section>
  );
}
