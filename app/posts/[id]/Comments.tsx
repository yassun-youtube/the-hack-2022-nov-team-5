'use client';

import React from 'react';
import { getComments } from '../../../lib/request';
import { CommentItem } from './CommentItem';
import Comment from '../../../types/Comment';

export const Comments: React.FC<{ id: string }> = ({ id }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      // FIXME: 初回レンダリング時に'get'アクセスが２回行われる
      const comments = await getComments(id);
      setComments(comments);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {comments ? (
        <div className="bg-white shadow-xl break-words p-8 rounded-lg">
          <p>コメント</p>
          <hr />
          {comments.map((comment) => (
            <div key={comment.body} className="mt-4">
              <CommentItem comment={comment} />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
