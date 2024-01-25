import Card from "../components/Card";
import NoteApp from "../components/Note";

export function NotePage() {
  return (
    <section className="layout h-screen ">
      <div className="sidebar">
        <Card />
      </div>
      <div className="body background-color:#808080 ">
        <NoteApp />
      </div>
    </section>
  );
}
