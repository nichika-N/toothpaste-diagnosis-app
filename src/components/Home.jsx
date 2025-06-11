import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6 max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">歯磨剤診断へようこそ！</h1>
      <p className="mb-4 text-gray-700">
        以下の質問に「はい」「いいえ」で答えると、あなたにぴったりの歯磨剤タイプをおすすめします。
      </p>
      <Link
        to="/diagnosis"
        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      >
        診断を始める
      </Link>
    </div>
  );
}
