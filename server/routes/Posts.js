import express from "express";
import { getPosts as getAllPosts } from "../controllers/Posts.js";

const router = express.Router();

router.get("/", getAllPosts);
// router.post("/", createPost);

export default router;