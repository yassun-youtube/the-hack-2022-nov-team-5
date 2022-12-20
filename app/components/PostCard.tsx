import React, { useState } from 'react';
import Link from 'next/link';
import { FaHandPointUp, FaHeart } from 'react-icons/fa';
import { deletePost } from '../../lib/request';
import { Post } from '../../types/Post';

const PostCard = (post: Post) => {
  const [postStatus, setPostStatus] = useState<boolean>(true);

  const deleteHandle = () => {
    deletePost(post.id).then(() => {
      setPostStatus(false);
    });
  };
  return (
    <div className="bg-blue-100 rounded-lg space-x-4 space-y-2 justify-center " key={post.id}>
      {postStatus ? (
        <>
          <Link href={`/posts/${post.id}`}>
            <p className="text-xl text-gray-700 font-bold text-center break-words pr-3 hover:underline underline-offset-4">
              {post.title}
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
            {post.tag}
          </p>
          <p className="text-base text-gray-400 font-normal">by {post.name}</p>

          <div className="flex justify-center space-x-10">
            <p className="flex justify-center space-x-2">
              <FaHeart fill={'red'} size="1.2rem" className="mx-2" />
              {post.like_count}
            </p>
            <p className="flex justify-center space-x-2">
              <FaHandPointUp color={'green'} size="1.2rem" className="mx-2" />
              {post.try_count}
            </p>
            {/*{TODO:削除確認ダイアログを表示する}*/}
            <button
              onClick={deleteHandle}
              className={
                'border rounded-lg border-red-400 bg-red-300 text-white pr-3 pl-3 z-50 hover:bg-red-600 mb-2 mr-3'
              }
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostCard;
