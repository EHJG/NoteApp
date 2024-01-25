import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Archive } from "lucide-react";
import Button from "./Button";

export function NoteCard({ nota }) {
  const navigate = useNavigate();
  const [archived, setArchived] = useState(false);
  return (
    <div className=" m-1 border-black border rounded-lg relative" style={{backgroundColor:'white'}}>
      <section className="flex place-content-end border-black border-2" style={{backgroundColor: 'red'}}>
        <Button
          click={() => {
            navigate(`/notes/${nota.id}`);
          }}
        />
      </section>
      <div className="h-4/6 p-5">
        <h1 className="font-bold uppercase text-xl text-center mb-2">
          {nota.title}
        </h1>
        <p className="text-black text-lg">{nota.description}</p>
      </div>
      <div className="flex place-content-end">
        
        <input
          type="checkbox"
          value={nota.archived}
          onChange={(e) => {
            setArchived(e.target.checked);
            console.log(nota.archived);
          }}
        />
        <label htmlFor="archived" className="text-slate-500  ">
          <Archive />
        </label>
      </div>
    </div>
  );
}
