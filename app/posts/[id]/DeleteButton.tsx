'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { deletePost } from '../../../lib/request';

export const DeleteButton: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();

  const onClick = async () => {
    const isConformed = await confirm('削除しますか？');
    if (isConformed) deletePost(id).then(() => router.push('/'));
  };

  return (
    <button onClick={onClick} className="mx-auto p-1 text-white bg-red-500 rounded">
      削除する
    </button>
  );
};
