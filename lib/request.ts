import { db } from './firebase';
import { doc, addDoc, getDoc, collection, updateDoc } from 'firebase/firestore';
import Post from '../types/Post';

const createPost = async (post: Post) => {
  await addDoc(collection(db, 'posts'), post);
};

const getPost = async (id: string) => {
  const postDocumentRef = doc(db, 'posts', id);
  const postResponse = await getDoc(postDocumentRef);
  return postResponse.exists() ? (postResponse.data() as Post) : undefined;
};

const updatePost = async (id: string, post: Post) => {
  const postDocumentRef = doc(db, 'posts', id);
  await updateDoc(postDocumentRef, post);
};

const addReactionCount = async (id: string, reactionType: 'like' | 'try', currentCount: number) => {
  const docRef = doc(db, 'posts', id);
  const reactionKey = `${reactionType}_count`;
  await updateDoc(docRef, { [reactionKey]: currentCount + 1 });
};

const subtractReactionCount = async (
  id: string,
  reactionType: 'like' | 'try',
  currentCount: number,
) => {
  const docRef = doc(db, 'posts', id);
  const reactionKey = `${reactionType}_count`;
  await updateDoc(docRef, { [reactionKey]: currentCount - 1 });
};

export { createPost, getPost, updatePost, addReactionCount, subtractReactionCount };
