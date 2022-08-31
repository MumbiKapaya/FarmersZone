import React from 'react'
import Post from "./Post/Post"

import { useSelector } from "react-redux";

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    return (
        <>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </>
  )
}

export default Posts