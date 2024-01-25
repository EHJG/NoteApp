import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { createNote, deleteNote, getNote, updateNote } from "../api/note.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Topbar from "./Topbar";
import Button from "./Button";
import { NoteCard } from "./NoteCard";

const NoteApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getNote(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateNote(params.id, data);
      toast.success("Note update");
    } else {
      await createNote(data);
      toast.success("Note create");
    }
    navigate("/notes-create");
  });

  return (
    <div className="max-w-500px">
      <div>
        <Topbar valor='Welcome'ing="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
      </div>
      <div className="max-w-xl mx-auto  ">
      <form onSubmit={onSubmit} className="border-2 border-black rounded-lg" style={{backgroundColor: 'grey'}}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
        />

        {errors.title && <span>You forgot a title</span>}

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          className="border-1 border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none p-3 rounded-lg block w-full mb-3"
        ></textarea>

        {errors.description && <span>You forgot a description</span>}
        <div className='text-right'>
          <Button valor='Save'/>
        </div>



      {params.id && (
        <Button
          valor='Delete'
          click={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteNote(params.id);
              navigate("/notes-create");
              toast.success("Note delete");
            }
          }}
        />
      )}
            </form>
      </div>


    </div>


  );
};

export default NoteApp;
