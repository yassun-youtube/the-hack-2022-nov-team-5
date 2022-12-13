'use client';

import React from 'react';
import { createComment } from '../../../lib/request';
import Comment from '../../../types/Comment';

export const CommentForm: React.FC<{ id: string }> = ({ id }) => {
  const defaultComment = {
    name: '',
    body: '',
    post_id: id,
    created_at: new Date(),
  };
  const [comment, setComment] = React.useState<Comment>(defaultComment);

  const onClick = () => {
    createComment(comment);
    setComment(defaultComment);
  };

  return (
    <div className="bg-white shadow-lg break-words p-8 rounded-lg">
      <input
        type="text"
        className="w-full border-solid border border-gray-200 mb-4 p-2"
        placeholder="名前"
        value={comment.name}
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
      />
      <textarea
        className="w-full border-solid border border-gray-200 h-32 p-2"
        placeholder="コメント"
        value={comment.body}
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
        style={{ resize: 'none' }}
      />
      <div className="flex">
        <button className="mx-auto my-4 px-8 py-4 text-white bg-sky-500 rounded" onClick={onClick}>
          投稿
        </button>
      </div>
    </div>
  );
};
