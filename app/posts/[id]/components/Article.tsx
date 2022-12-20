import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Post } from '../../../../types/Post';

export const Article: React.FC<{ post: Post; id: string }> = ({ post, id }) => {
  const { name, created_at, title, tag, article } = post;
  const tags = tag.replace(' ', ', ');
  const createdAt = moment(created_at).format('YYYY/MM/DD HH:mm');

  return (
    <div className="article-card bg-white shadow-lg break-words p-8 rounded-lg">
      <div className="article-header">
        <div className="mb-2 flex justify-between">
          <div>
            <div className="inline-block mr-4">著者：{name}</div>
            <div className="inline-block">投稿日時：{createdAt}</div>
          </div>
          <div>
            <Link href={`/posts/${id}/edit`} className={'mr-4'}>
              <button className="mx-auto p-1 text-white bg-sky-500 rounded">編集する</button>
            </Link>
            {/* 削除APIをマージしたら削除ボタンを実装 */}
            <button className="mx-auto p-1 text-white bg-red-500 rounded">削除する</button>
          </div>
        </div>
        <h1>{title}</h1>
        <div>tags: {tags}</div>
      </div>
      <hr />
      <section className="article-body my-4">
        <ReactMarkdown>{article}</ReactMarkdown>
      </section>
    </div>
  );
};
