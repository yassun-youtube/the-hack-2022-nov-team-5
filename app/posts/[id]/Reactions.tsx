'use client';

import React from 'react';
import { FaHeart, FaHandPointUp } from 'react-icons/fa';

export const Reactions: React.FC<{ likeCount: number; tryCount: number }> = ({
  likeCount,
  tryCount,
}) => {
  return (
    <div className="flex flex-row reactions mt-4">
      <button
        className="flex flex-row h-12 w-32 bg-red-500 rounded-lg mr-4"
        style={{ alignItems: 'center' }}
      >
        <FaHeart color="white" size="1.2rem" className="mx-2" />
        <p className="text-white">{likeCount} いいね！</p>
      </button>
      <button
        className="flex flex-row h-12 w-32 bg-green-500 rounded-lg"
        style={{ alignItems: 'center' }}
      >
        <FaHandPointUp color="white" size="1.2rem" className="mx-2" />
        <p className="text-white">{tryCount} 試した！</p>
      </button>
    </div>
  );
};
