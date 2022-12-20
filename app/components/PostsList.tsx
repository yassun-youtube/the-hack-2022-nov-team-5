'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { getPostAll } from '../../lib/request';
import { Post } from '../../types/Post';
import PostCard from './PostCard';

const PostsList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [filteredPostList, setFilteredPostList] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getPostAll();
      setPostList(posts);
      setFilteredPostList(posts);
    };
    getPosts();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value.toLowerCase();
    setFilteredPostList(postList.filter((post) => post.title.toLowerCase().includes(searchWord)));
  };

  return (
    <div className="w-full pt-9 pl-20 pr-20 space-y-5">
      <div className="w-700 pb-5 mx-auto">
        <p>タイトル検索</p>
        <input
          type="text"
          onChange={handleSearch}
          className="rounded py-2 px-4 text-left border border-gray-400"
        />
      </div>
      {/*{TODO:検索結果が0件だったときにコンテンツないよって表示する}*/}
      {filteredPostList.map((post: Post) => {
        if (post.title.length) {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              article={post.article}
              created_at={post.created_at}
              like_count={post.like_count}
              name={post.name}
              tag={post.tag}
              try_count={post.try_count}
            />
          );
        }
        return;
      })}
    </div>
  );
};

export default PostsList;
