'use client';

import React from 'react';
import { FaHeart, FaHandPointUp } from 'react-icons/fa';
import { addReactionCount, subtractReactionCount } from '../../../lib/request';

export const Reactions: React.FC<{ id: string; likeCount: number; tryCount: number }> = ({
  id,
  likeCount,
  tryCount,
}) => {
  const [likeCountState, setLikeCountState] = React.useState(likeCount);
  const [tryCountState, setTryCountState] = React.useState(tryCount);

  const defaultLikeStyle = {
    isClicked: false,
    iconColor: 'red',
    textColor: 'text-black',
    bgColor: 'bg-white',
  };

  const defaultTryStyle = {
    isClicked: false,
    iconColor: 'green',
    textColor: 'text-black',
    bgColor: 'bg-white',
  };

  const [likeStyle, setLikeStyle] = React.useState(defaultLikeStyle);
  const [tryStyle, setTryStyle] = React.useState(defaultTryStyle);

  const onClickLike = () => {
    if (likeStyle.isClicked) {
      subtractReactionCount(id, 'like', likeCountState);
      setLikeStyle(defaultLikeStyle);
      setLikeCountState(likeCountState - 1);
    } else {
      addReactionCount(id, 'like', likeCount);
      setLikeStyle({
        isClicked: true,
        iconColor: 'white',
        textColor: 'text-white',
        bgColor: 'bg-red-500',
      });
      setLikeCountState(likeCountState + 1);
    }
  };

  const onClickTry = () => {
    if (tryStyle.isClicked) {
      subtractReactionCount(id, 'try', tryCountState);
      setTryStyle(defaultTryStyle);
      setTryCountState(tryCountState - 1);
    } else {
      addReactionCount(id, 'try', tryCount);
      setTryStyle({
        isClicked: true,
        iconColor: 'white',
        textColor: 'text-white',
        bgColor: 'bg-green-500',
      });
      setTryCountState(tryCountState + 1);
    }
  };

  return (
    <div className="flex flex-row reactions mt-4">
      <button
        className={`flex flex-row h-12 w-36 rounded-lg mr-4 ${likeStyle.bgColor}`}
        style={{ alignItems: 'center' }}
        onClick={onClickLike}
      >
        <FaHeart color={likeStyle.iconColor} size="1.2rem" className="mx-2" />
        <p className={likeStyle.textColor}>{likeCountState} いいね！</p>
      </button>
      <button
        className={`flex flex-row h-12 w-36 rounded-lg ${tryStyle.bgColor}`}
        style={{ alignItems: 'center' }}
        onClick={onClickTry}
      >
        <FaHandPointUp color={tryStyle.iconColor} size="1.2rem" className="mx-2" />
        <p className={tryStyle.textColor}>{tryCountState} 試した！</p>
      </button>
    </div>
  );
};
