import { Link } from 'react-router-dom';

const title = '歯磨剤診断へようこそ！';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4">
      {/* 右上に常に表示される固定ボタン */}
      <Link
        to="/diagnosis"
        className="fixed top-4 right-4 px-4 py-2 bg-pink-500 text-white font-semibold rounded shadow-lg z-50 hover:bg-pink-600 transition"
      >
        診断へGO
      </Link>

      <div className="p-8 max-w-5xl w-full bg-white rounded-xl shadow-md animate-fadeIn relative">
        {/* タイトル（ふわっと1文字ずつ） */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          {title.split('').map((char, i) => (
            <span
              key={i}
              className="fade-char"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* 画像 */}
        <img
          src="/images/1.png"
          alt="診断イメージ"
          className="w-full h-60 object-cover rounded-md mb-6"
        />

        {/* 説明文 */}
        <p className="mb-4 text-gray-700 text-center text-lg font-semibold">
          以下の質問に「はい」「いいえ」で答えると、あなたの口腔内にぴったりの歯磨剤が見つかる！
        </p>

        {/* 歯磨剤の説明 */}
        <div className="bg-gray-50 p-6 rounded-lg mt-6 text-sm leading-relaxed text-gray-800">
          <h2 className="text-lg font-bold mb-2">歯磨剤とは？</h2>
          <p className="mb-4">
            歯磨剤（いわゆる歯磨き粉）は、歯垢や着色などの歯の汚れを除去し、虫歯や歯周病の予防に役立つオーラルケア用品です。
          </p>

          <h2 className="text-lg font-bold mb-2">歯磨剤には何が入っているの？</h2>
          <p className="mb-2">
            歯磨剤の成分は、<strong>基本成分</strong>と<strong>薬用成分</strong>に分けられます。
          </p>
          <p className="mb-2">
            基本成分は歯磨剤の性状や香り、泡立ちなどを決めるもので、研磨剤、湿潤剤、発泡剤、粘結剤、香味剤、保存料などがあります。
          </p>
          <p className="mb-2">
            薬用成分は歯磨剤の効能や効果を決めるもので、目的に合わせて配合されます。
          </p>
          <p className="mb-4">
            日本薬事法により、<strong>基本成分だけ</strong>の歯磨剤は「化粧品」、<strong>薬用成分が加えられている</strong>歯磨剤は「医薬部外品」と表示されます。
            市販されている歯磨剤の約90％は、薬用成分の入った医薬部外品です。
          </p>
          <p>
            歯磨剤を購入する時は、「化粧品」か「医薬部外品」をチェックしてみてください！<br />
            「化粧品」の場合は薬用成分は残念ながら入っていません。
          </p>
        </div>

        {/* 通常の診断ボタン（カードの下に配置） */}
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
          <Link
            to="/diagnosis"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            診断を始める
          </Link>
        </div>
      </div>
    </div>
  );
}
