import { db } from './firebase';
import {
  doc,
  addDoc,
  getDoc,
  collection,
  updateDoc,
  query,
  where,
  getDocs,
  orderBy,
  deleteDoc,
} from 'firebase/firestore';
import Post from '../types/Post';
import Comment from '../types/Comment';

const createPost = async (post: Post) => {
  await addDoc(collection(db, 'posts'), post);
};

const getPost = async (id: string) => {
  const postDocumentRef = doc(db, 'posts', id);
  const postResponse = await getDoc(postDocumentRef);
  if (postResponse.exists()) {
    const post = postResponse.data();
    return { ...post, created_at: post.created_at.toDate() } as Post;
  } else {
    return undefined;
  }
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

const createComment = async (comment: Comment) => {
  await addDoc(collection(db, 'comments'), comment);
};

const getComments = async (id: string) => {
  const q = query(collection(db, 'comments'), where('post_id', '==', id), orderBy('created_at'));
  const data = await getDocs(q);
  const fetchedComments = data.docs.map((fetchedDoc) => fetchedDoc.data());
  const formattedComment = fetchedComments.map(
    (comment) =>
      ({
        ...comment,
        created_at: comment.created_at.toDate(),
      } as Comment),
  );
  return formattedComment;
};

const getPostAll = async () => {
  const data = collection(db, 'posts');
  const q = query(data, orderBy('created_at', 'desc'));
  const queryData = await getDocs(q);
  return queryData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const deletePost = async (postId: string) => {
  await deleteDoc(doc(db, 'posts', postId));
};

export {
  createPost,
  getPost,
  updatePost,
  addReactionCount,
  subtractReactionCount,
  createComment,
  getComments,
  getPostAll,
  deletePost,
};
