import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageCard = ({ item }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-[var(--card)] shadow-[0_0_10px_var(--shadow)] transition-transform duration-300 hover:scale-[1.02]">
      {item?.photo && (
        <LazyLoadImage
          src={item.photo}
          alt={item?.prompt || "image"}
          className="w-full h-[200px] object-cover"
          effect="blur"
        />
      )}
      <div className="p-3">
        <p className="text-sm text-[var(--text_primary)] line-clamp-2">{item?.prompt}</p>
        {item?.author && (
          <p className="text-xs text-[var(--text_secondary)] mt-1">— {item.author}</p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
