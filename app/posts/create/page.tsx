import React from 'react';

const createPage = () => {
  return (
    <div className="block w-full text-center">
      <input
        type="text"
        className="w-full m-1 border-solid border border-gray-200"
        placeholder="タイトル"
      />
      <input
        type="text"
        className="w-full m-1 border-solid border border-gray-200"
        placeholder="名前"
      />
      <input
        type="text"
        className="w-full m-1 border-solid border border-gray-200"
        placeholder="タグ（複数入力の際はスペース区切りで入力して下さい）"
      />
      <div className="markdownArea flex m-1 justify-center w-full">
        <textarea
          name="article"
          placeholder="Markdown記法を使用することができます。"
          rows={20}
          className="w-1/2 mr-1 border-solid border border-gray-200"
        ></textarea>
        <div className="markdownPreview ml-1 w-1/2 border-solid border border-gray-200 overflow-scroll">
          Markdown記法を使用することができます。
        </div>
      </div>

      <button className="mx-auto my-4 px-8 py-4 text-white bg-sky-500 rounded">投稿</button>
    </div>
  );
};

export default createPage;
