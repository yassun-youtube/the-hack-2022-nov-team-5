import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';
import Post from '../types/Post';

const createPost = async (post: Post) => {
  await addDoc(collection(db, 'posts'), post);
};

export { createPost };
