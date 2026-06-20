import React from "react";
import Button from "./buttons/button";
import { useLocation, useNavigate } from "react-router";
import { AddRounded, WebRounded } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  const gotoCreatePost = () => {
    navigate("/post");
  };
  const gottoHome = () => {
    navigate("/");
  };
  console.log(path);
  return (
    <div className="flex-1 bg-[var(--navbar)] text-[var(--menu_primary_text)] font-bold text-[22px] flex items-center justify-between px-[50px] py-[14px] shadow-[0_0_10px_rgba(0,0,0,0.15)] max-[600px]:px-3 max-[600px]:py-[10px]">
      GemAI
      {path[1] === "post" ? (
        <Button
          text="Explore Posts"
          leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
          onClick={gottoHome}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={gotoCreatePost}
        />
      )}
    </div>
  );
};

export default Navbar;