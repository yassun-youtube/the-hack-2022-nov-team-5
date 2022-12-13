import React from 'react';
import { getPost } from '../../../lib/request';
import { Article } from './components';
import { CommentForm } from './CommentForm';
import { Comments } from './Comments';
import { Reactions } from './Reactions';

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = async ({ params: { id } }: Props) => {
  const post = await getPost(id);

  return (
    <div className="h-full bg-gray-200">
      {post ? (
        <>
          <article className="container mx-auto p-8 w-3/5">
            <Article post={post} id={id} />
            <div className="mt-4">
              <Reactions id={id} likeCount={post.like_count} tryCount={post.try_count} />
            </div>
            <div className="mt-12">
              <CommentForm id={id} />
              <div className="mt-4">
                <Comments id={id} />
              </div>
            </div>
          </article>
        </>
      ) : (
        <div>記事が見つかりません。</div>
      )}
    </div>
  );
};

export default DetailPage;
