import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/cards/ImageCard";
import { GetPosts } from "../api";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    await GetPosts()
      .then((res) => {
        setPosts(res?.data?.data);
        setFilteredPost(res?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPost(posts);
    }
    const filteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt?.toLowerCase().includes(search);
      const authorMatch = post?.author?.toLowerCase().includes(search);

      return promptMatch || authorMatch;
    });

    if (search) {
      setFilteredPost(filteredPosts);
    }
  }, [posts, search]);

  return (
    <div className="px-[30px] py-[30px] pb-[200px] h-full overflow-y-scroll flex flex-col items-center gap-5 max-[768px]:px-[10px] max-[768px]:py-[6px]">
      <div className="text-[34px] font-medium text-[var(--text_primary)] flex items-center flex-col">
        Explore popular posts in the Community!
        <span className="text-[30px] font-extrabold text-[var(--secondary)]">⦾ Generated with AI ⦾</span>
      </div>
      <SearchBar
        search={search}
        handleChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full max-w-[1400px] py-8 flex justify-center items-center">
        {error && <div className="text-red-500">{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 min-[1200px]:grid-cols-4">
            {filteredPost.length > 0 ? (
              <>
                {filteredPost
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <ImageCard key={index} item={item} />
                  ))}
              </>
            ) : (
              <>No Posts Found !!</>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;