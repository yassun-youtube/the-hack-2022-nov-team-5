'use client';
import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';
import { Post } from '../../../../types/Post';
import { getPost, updatePost } from '../../../../lib/request';
const EditPage = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    tag: '',
    name: '',
    article: '',
    created_at: new Date(),
    like_count: 0,
    try_count: 0,
  });
  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await getPost(params.id);
      if (postData) {
        setPost({
          id: params.id,
          title: postData.title,
          tag: postData.tag,
          name: postData.name,
          article: postData.article,
          created_at: postData.created_at,
          like_count: postData.like_count,
          try_count: postData.try_count,
        });
      }
    };
    fetchPostData();
  }, []);
  const onClick = async () => {
    setPost({ ...post, created_at: new Date() });
    await updatePost(params.id, post);
    location.href = '/';
  };
  return (
    <div className="block w-full">
      <input
        type="text"
        className="w-full m-1 p-2 border-solid border border-gray-200"
        placeholder="タイトル"
        value={post.title}
        required
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type="text"
        className="w-full m-1 p-2 border-solid border border-gray-200"
        placeholder="名前"
        value={post.name}
        required
        onChange={(e) => setPost({ ...post, name: e.target.value })}
      />
      <input
        type="text"
        className="w-full m-1 p-2 border-solid border border-gray-200"
        placeholder="タグ（複数入力の際はスペース区切りで入力して下さい）"
        value={post.tag}
        required
        onChange={(e) => setPost({ ...post, tag: e.target.value })}
      />
      <div className="markdownArea flex m-1 justify-center w-full">
        <textarea
          placeholder="Markdown記法を使用することができます。"
          rows={20}
          className="w-1/2 mr-1 p-2 border-solid border border-gray-200"
          value={post.article}
          required
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
        <button className="mx-auto my-4 px-8 py-4 text-white bg-sky-500 rounded" onClick={onClick}>
          更新
        </button>
      </div>
    </div>
  );
};

export default EditPage;
