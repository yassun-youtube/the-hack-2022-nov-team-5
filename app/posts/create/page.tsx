'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Post from '../../../types/Post';
import { createPost } from '../../../lib/request';
import { useRouter } from 'next/navigation';

const CreatePage = () => {
  const router = useRouter();

  const [post, setPost] = useState<Post>({
    title: '',
    tag: '',
    name: '',
    article: '',
    created_at: new Date(),
    like_count: 0,
    try_count: 0,
  });
  const submitPost = () => {
    setPost({ ...post, created_at: new Date() });
    createPost(post);
    router.push('/');
  };
  return (
    <div className="block w-full">
      <input
        type="text"
        className="w-full m-1 border-solid border border-gray-200"
        placeholder="タイトル"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type="text"
        className="w-full m-1 border-solid border border-gray-200"
        placeholder="名前"
        onChange={(e) => setPost({ ...post, name: e.target.value })}
      />
      <input
        type="text"
        className="w-full m-1 border-solid border border-gray-200"
        placeholder="タグ（複数入力の際はスペース区切りで入力して下さい）"
        onChange={(e) => setPost({ ...post, tag: e.target.value })}
      />
      <div className="markdownArea flex m-1 justify-center w-full">
        <textarea
          name="article"
          placeholder="Markdown記法を使用することができます。"
          rows={20}
          className="w-1/2 mr-1 border-solid border border-gray-200"
          onChange={(e) => setPost({ ...post, article: e.target.value })}
        ></textarea>
        <div
          id="markDownPreview"
          className="ml-1 w-1/2 border-solid border border-gray-200 overflow-scroll"
        >
          <ReactMarkdown>{post.article}</ReactMarkdown>
        </div>
      </div>
      <div className="buttonArea text-center">
        <button
          className="mx-auto my-4 px-8 py-4 text-white bg-sky-500 rounded"
          onClick={(e) => submitPost()}
        >
          投稿
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
