import moment from 'moment';
import React from 'react';
import Comment from '../../../types/Comment';

export const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  const createdAt = moment(comment.created_at).format('YYYY/MM/DD HH:mm');

  return (
    <div>
      <div className="flex flex-row justify-between mb-2">
        <div>投稿者：{comment.name}</div>
        <div className="text-gray-500">{createdAt}</div>
      </div>
      <div className="break-words">{comment.body}</div>
      <hr />
    </div>
  );
};
