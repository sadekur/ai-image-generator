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
    <Container>
      <HeadLine>
        Explore popular posts in the Community!
        <Span>⦾ Generated with AI ⦾</Span>
      </HeadLine>
      <SearchBar
        search={search}
        handleChange={(e) => setSearch(e.target.value)}
      />
      <Wrapper>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
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
          </CardWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;