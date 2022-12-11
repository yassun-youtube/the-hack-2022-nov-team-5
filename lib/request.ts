import { db } from './firebase';
import { doc, addDoc, getDoc, collection, updateDoc } from 'firebase/firestore';
import Post from '../types/Post';

const createPost = async (post: Post) => {
  await addDoc(collection(db, 'posts'), post);
};

const getPost = async (id: string) => {
  const postDocumentRef = doc(db, 'posts', id);
  const postResponse = await getDoc(postDocumentRef);
  return postResponse.data();
};

const updatePost = async (id: string, post: Post) => {
  const postDocumentRef = doc(db, 'posts', id);
  await updateDoc(postDocumentRef, post);
};

export { createPost, getPost, updatePost };
