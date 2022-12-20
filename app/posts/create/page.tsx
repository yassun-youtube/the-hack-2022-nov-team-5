'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PostCreate } from '../../../types/Post';
import { createPost } from '../../../lib/request';
import CodeBlock from '../../components/CodeBlock';

const CreatePage = () => {
  const [post, setPost] = useState<PostCreate>({
    title: '',
    tag: '',
    name: '',
    article: '',
    created_at: new Date(),
    like_count: 0,
    try_count: 0,
  });
  const onClick = async () => {
    setPost({ ...post, created_at: new Date() });
    await createPost(post);
    location.href = '/';
  };
  return (
    <div className="block w-full">
      <input
        type="text"
        className="w-full m-1 p-2 border-solid border border-gray-200"
        placeholder="タイトル"
        required
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type="text"
        className="w-full m-1 p-2 border-solid border border-gray-200"
        placeholder="名前"
        required
        onChange={(e) => setPost({ ...post, name: e.target.value })}
      />
      <input
        type="text"
        className="w-full m-1 p-2 border-solid border border-gray-200"
        placeholder="タグ（複数入力の際はスペース区切りで入力して下さい）"
        required
        onChange={(e) => setPost({ ...post, tag: e.target.value })}
      />
      <div className="markdownArea flex m-1 justify-center w-full">
        <div className="markdownArea flex m-1 justify-center w-full">
          <textarea
            placeholder="Markdown記法を使用することができます。"
            rows={20}
            className="w-1/2 mr-1 p-2 border-solid border border-gray-200"
            required
            onChange={(e) => setPost({ ...post, article: e.target.value })}
          ></textarea>
          <div
            id="markDownPreview"
            className="ml-1 p-2 w-1/2 border-solid border border-gray-200 overflow-scroll"
          >
            <ReactMarkdown components={{ code: CodeBlock }}>{post.article}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="buttonArea text-center">
        <button className="mx-auto my-4 px-8 py-4 text-white bg-sky-500 rounded" onClick={onClick}>
          投稿
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
