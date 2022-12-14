'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getPostAll, deletePost } from '../../lib/request';
import Link from 'next/link';
import Post from '../../types/Post';
import { FaHeart, FaHandPointUp } from 'react-icons/fa';

const PostsList = () => {
  const [postList, setPostList] = useState<[]>([]);
  const [searchQuery, setSearchQuery] = useState<[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getPosts = async () => {
      // @ts-ignore
      setPostList(await getPostAll());
    };
    getPosts().then();
  }, []);

  const handleSearch = () => {
    setSearchQuery(
      // @ts-ignore
      postList.filter((posts: Post) => posts.title.toLowerCase().includes(ref.current?.value.toLowerCase())),
    );
  };

  const displayPosts = () => {
    if (ref.current?.value.length === 0) {
      return postList;
    } else if (searchQuery.length === 0) {
      return [];
    } else {
      return searchQuery;
    }
  };
  const displayPostsList = displayPosts();

  return (
    <div className="w-full pt-9 pl-20 pr-20 space-y-5">
      <div className="w-700 pb-5 mx-auto">
        <p>検索</p>
        <input
          type="text"
          ref={ref}
          onChange={() => handleSearch()}
          className="rounded py-2 px-4 text-left border border-gray-400"
        />
      </div>
      {/*{TODO:検索結果が0件だったときにコンテンツないよって表示する}*/}
      {displayPostsList.map((posts: Post) => {
        if (posts.title.length) {
          return (
            <div className="bg-blue-100 rounded-lg space-x-4 space-y-2 justify-center " key={posts.id}>
              <Link href={`/posts/${posts.id}`} className={''}>
                <p className="text-xl text-gray-700 font-bold text-center break-words pr-3 hover:underline underline-offset-4">
                  {posts.title}
                </p>
              </Link>
              <p className="text-base text-gray-500 font-normal flex justify-start pt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#b3b3b3"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                {posts.tag}
              </p>
              <p className="text-base text-gray-400 font-normal">by {posts.name}</p>

              <div className="flex justify-center space-x-10">
                <p className="flex justify-center space-x-2">
                  <FaHeart fill={'red'} size="1.2rem" className="mx-2" />
                  {posts.like_count}
                </p>
                <p className="flex justify-center space-x-2">
                  <FaHandPointUp color={'green'} size="1.2rem" className="mx-2" />
                  {posts.try_count}
                </p>
                <a href={'/'}>
                  {/*{TODO:削除確認ダイアログを表示する}*/}
                  <button
                    onClick={() => deletePost(posts.id)}
                    className={
                      'border rounded-lg border-red-400 bg-red-300 text-white pr-3 pl-3 z-50 hover:bg-red-600 mb-2 mr-3'
                    }
                  >
                    Delete
                  </button>
                </a>
              </div>
            </div>
          );
        }
        return;
      })}
    </div>
  );
};

export default PostsList;
