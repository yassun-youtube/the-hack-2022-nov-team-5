import React from 'react';
import { getPost } from '../../../lib/request';
import { Article } from './components';
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
        <article className="container mx-auto p-8">
          <Article post={post} id={id} />
          <Reactions likeCount={post.like_count} tryCount={post.try_count} />
        </article>
      ) : (
        <div>記事が見つかりません。</div>
      )}
    </div>
  );
};

export default DetailPage;
