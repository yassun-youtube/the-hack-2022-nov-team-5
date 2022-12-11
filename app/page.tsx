'use client';

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'tests'));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents font-bold underline" key={post.id}>
            {post.context}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
