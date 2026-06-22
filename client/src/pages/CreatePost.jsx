import React, { useState } from "react";
import GenerateImageForm from "../components/cards/GenerateImageForm";
import GeneratedImageCard from "../components/cards/GeneratedImageCard ";

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    <div className="h-full overflow-y-scroll bg-[var(--bg)] p-[30px] pb-[50px] flex flex-col items-center justify-center gap-5 max-[768px]:px-[10px] max-[768px]:py-[6px]">
      <div className="w-full h-fit pt-[50px] max-w-[1200px] gap-[8%] flex justify-center max-[768px]:flex-col">
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          generateImageLoading={generateImageLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </div>
    </div>
  );
};

export default CreatePost;