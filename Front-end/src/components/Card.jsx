import React from "react";
import { useNavigate } from "react-router-dom";
import { FolderArchive, LayoutDashboard } from "lucide-react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function Card() {
  const navigate = useNavigate();
  return (
    <>
    <div className=" text-sky-50">
      <Navigation
        activeItemId='/'
        onSelect={({ itemId }) => {
          
          navigate(itemId);
          

        }}
        items={[
          {
            title: "Create note",
            itemId: "/",
            elemBefore: () => <LayoutDashboard />,
          },
          {
            title: "Archived notes",
            itemId: "/notes-archived",
            elemBefore: () => <FolderArchive />,
          },
          ,
          ,
        ]}
      />
      </div>
    </>
  );
}

export default Card;
