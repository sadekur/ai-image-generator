import { CircularProgress } from "@mui/material";
import React from "react";

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <div className="flex-1 p-4 border-2 border-dashed border-[#ffcc0090] text-[#AFAFB580] rounded-[20px] flex items-center justify-center gap-4">
      {loading ? (
        <>
          <CircularProgress
            sx={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image . . .
        </>
      ) : src ? (
        <img src={src} className="w-full h-full bg-[#00000050] rounded-[18px] object-cover" />
      ) : (
        <>Write a prompt to generate image</>
      )}
    </div>
  );
};

export default GeneratedImageCard;