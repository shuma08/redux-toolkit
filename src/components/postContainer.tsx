import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost';
import { useCreatePostMutation, useDeletePostMutation, useFetchAllPostsQuery, useUpdatePostMutation } from '../services/PostService'
import PostItem from './postItem'

const PostContainer = () => {
  const [fetchData, setFetchData] = useState(true);
  const { data: posts, isLoading, error } = useFetchAllPostsQuery(100, {
    skip: fetchData
  });
  console.log("🚀 ~ PostContainer ~ posts", posts)
  const [createPost, { }] = useCreatePostMutation();
  const [updatePost, { }] = useUpdatePostMutation();
  const [deletePost, { }] = useDeletePostMutation();

  const fetchPosts = () => setFetchData(false)

  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }
  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }
  return (
    <div className="post__list">
      <button onClick={fetchPosts}>Fetch Posts</button>
      <button onClick={handleCreate}>Add newpost</button>
      {/* {error&& <p>{error.status}</p>} */}
      {isLoading && <p>Loading...</p>}

      {posts && posts.map(post =>
        <PostItem
          key={post.id}
          remove={handleRemove}
          update={handleUpdate}
          post={post}
        />
      )}
    </div>
  )
}

export default PostContainer