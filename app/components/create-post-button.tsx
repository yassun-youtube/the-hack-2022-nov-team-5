import Link from 'next/link';

const CreatePostButton = () => {
  return (
      <Link
        href={'posts/create'}
        className="rounded bg-blue-400 px-3 py-2 text-white hover:bg-gray-500 flex justify-right"
      >
        投稿する
      </Link>
  );
};

export default CreatePostButton;
