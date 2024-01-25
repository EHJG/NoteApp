import React from "react";

export default function Topbar({valor, ing}) {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="flex justify-between">
          <div className="">
            <h1 className="font-medium text-4xl">{valor}</h1>
          </div>
          <div className="flex gap-3">
            {ing && <img
              className="h-12 w-12 mr-2"
              src={ing}
            />}
          </div>
        </div>
      </div>
    </>
  );
}
