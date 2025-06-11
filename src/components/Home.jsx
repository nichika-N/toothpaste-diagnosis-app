import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4">
      <div className="p-8 max-w-5xl w-full bg-white rounded-xl shadow-md animate-fadeIn">
        {/* 画像部分 */}
        <img
          src="/images/1.png"
          alt="診断イメージ"
          className="w-full h-72 object-cover rounded-md mb-6"
        />

        {/* テキスト・ボタン部分 */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          歯磨剤診断へようこそ！
        </h1>
        <p className="mb-6 text-gray-700 text-center">
          以下の質問に「はい」「いいえ」で答えると、あなたの口腔内にぴったりの歯磨剤が見つかる！
        </p>

        {/* 説明文 */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6 text-sm text-gray-800 leading-relaxed">
          <p className="font-semibold mb-2">歯磨剤とは？</p>
          <p className="mb-4">
            歯磨剤（いわゆる歯磨き粉）は、歯垢や着色などの歯の汚れを除去し、虫歯や歯周病の予防に役立つオーラルケア用品です。
          </p>

          <p className="font-semibold mb-2">歯磨剤には何が入っているの？</p>
          <p className="mb-4">
            歯磨剤の成分は、基本成分と薬用成分に分けられます。<br />
            基本成分は歯磨剤の性状や香り、泡立ちなどを決めるもので、研磨剤、湿潤剤、発泡剤、粘結剤、香味剤、保存料などがあります。<br />
            薬用成分は歯磨剤の効能や効果を決めるもので、目的に合わせて配合されます。
          </p>

          <p>
            日本薬事法により、基本成分だけの歯磨剤は「化粧品」、薬用成分が加えられている歯磨剤は「医薬部外品」と表示されます。<br />
            市販されている歯磨剤の約90％は、薬用成分の入った医薬部外品です。<br />
            歯磨剤を購入する時は、「化粧品」か「医薬部外品」をチェックしてみてください！<br />
            「化粧品」の場合は薬用成分は残念ながら入っていません。
          </p>
        </div>

        {/* ボタン（枠の外に配置） */}
        <div className="flex justify-center -mb-12">
          <Link
            to="/diagnosis"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-lg"
          >
            診断を始める
          </Link>
        </div>
      </div>
    </div>
  );
}
