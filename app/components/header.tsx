import Link from 'next/link';
import CreatePostButton from './create-post-button';

const Header = () => {
  return (
    <header className="flex justify-center bg-gray-300 p-4 space-x-7">
      <div className={'flex justify-start'}>
        <Link href="/" className="rounded bg-blue-400 px-3 py-2 text-white hover:bg-gray-500">
          The Hack -Team5-
        </Link>
      </div>
      <div className={'flex justify-right'}>
        <CreatePostButton />
      </div>
    </header>
  );
};

export default Header;
