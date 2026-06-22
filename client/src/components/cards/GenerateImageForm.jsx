import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { CreatePost, GenerateImageFromPrompt } from "../../api";
import TextInput from "../Imput/TextInput";
import Button from "../buttons/button";


const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setGenerateImageLoading,
  generateImageLoading,
  setCreatePostLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateImageFromPrompt({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpeg;base64,${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };
  const createPostFun = async () => {
    setCreatePostLoading(true);
    await CreatePost(post)
      .then((res) => {
        setCreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
      });
  };
  return (
    <div className="flex-1 flex flex-col justify-center px-5 py-4 gap-[9%]">
      <div className="flex flex-col gap-1.5">
        <div className="text-[28px] font-medium text-[var(--text_primary)]">Generate Image with prompt</div>
        <div className="text-[17px] font-normal text-[var(--text_secondary)]">
          Write your prompt according to the image you want to generate!
        </div>
      </div>
      <div className="flex flex-col gap-[18px] text-xs font-normal text-[var(--text_secondary)]">
        <TextInput
          label="Author"
          placeholder="Enter your name.."
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image . . . "
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        ** You can post the AI Generated Image to the Community **
      </div>
      <div className="flex-1 flex gap-2">
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => createPostFun()}
        />
      </div>
    </div>
  );
};

export default GenerateImageForm;