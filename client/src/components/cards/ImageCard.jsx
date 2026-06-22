import React from "react";
import FileSaver from "file-saver";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";

const ImageCard = ({ item, heights }) => {
  return (
    <div className="relative flex rounded-[20px] gap-2.5 cursor-pointer transition-all duration-300 ease bg-[var(--card)] shadow-[1px_2px_40px_8px_rgba(0,0,0,0.38)] hover:shadow-[1px_2px_40px_8px_rgba(0,0,0,0.5)] hover:scale-105 [&:nth-child(7n+1)]:col-span-2 [&:nth-child(7n+1)]:row-span-2 group">
      <LazyLoadImage
        alt={item?.prompt}
        width="100%"
        src={item?.photo}
        style={{ borderRadius: "12px" }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start gap-0.5 justify-end flex-col backdrop-blur-[2px] bg-black/50 rounded-[6px] opacity-0 p-4 transition-opacity duration-300 ease text-[var(--white)] group-hover:opacity-100">
        <div className="font-normal text-[15px] text-[var(--white)] line-clamp-2">• {item?.prompt}</div>
        <div className="w-full flex items-center justify-between">
          <div className="font-semibold text-sm flex gap-2 items-center text-[var(--white)]">
            <Avatar sx={{ background: "green", width: "32px", height: "32px" }}>
              {item?.name[0]}
            </Avatar>{" "}
            {item?.name}
          </div>
          <DownloadRounded
            onClick={() => FileSaver.saveAs(item?.photo, `download.jpg`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;