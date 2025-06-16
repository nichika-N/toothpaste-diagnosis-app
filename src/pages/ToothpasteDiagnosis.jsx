// src/pages/ToothpasteDiagnosis.jsx
import { useState } from 'react';

// 質問リスト（9問）
const questions = [
  { text: '糖分を含む飲食の回数が多いですか？', type: 'C' },
  { text: '冷たい飲み物で歯がしみますか？', type: 'Hys' },
  { text: 'コーヒーやお茶、ワインなどを飲む習慣、喫煙などの習慣はありますか？', type: 'W' },
  { text: '歯ぐきが腫れたり、出血したことがありますか？', type: 'P' },
  { text: '炭酸やお酒を頻繁に飲みますか？', type: 'C' },
  { text: '歯ブラシを歯にあてると痛みを感じますか？', type: 'Hys' },
  { text: 'ホワイトニングに興味がありますか？', type: 'W' },
  { text: '歯医者さんで歯周病の指摘をされたことがありますか？', type: 'P' },
  { text: '複数の悩みを一つに絞れないと感じますか？', type: 'Total' },
];

const results = {
  C: {
    type: '虫歯予防タイプ',
    description: `あなたの口腔内にぴったりな歯磨剤は
虫歯予防タイプです。

虫歯になりやすい傾向にあります。
虫歯予防のために「フッ素1450ppm」配合の歯磨剤を使いましょう。

おすすめの製品
🌟一押し🌟：DENT. Check-Up standard（ライオン歯科材）
・クリニカ アドバンテージ ハミガキ（ライオン）
・GUM デンタルペースト（サンスター）
・システマEX ハミガキ（ライオン）
・OCH-TUNE FAST / SLOW（ライオン）`,

    advice: `【虫歯のメカニズム】
チョコやジュース、アメなどには「糖（とう）」が入っています。
お口の中のむし歯菌が砂糖をエサにして、「酸」を出します。
この酸が歯の表面（エナメル質）を少しずつとかしていき、穴があいてしまいます。これが虫歯です。

つまり、酸が原因のためお酒や炭酸水を頻繁に飲む人も注意です。
pH5.5以下で歯のエナメル質は溶けはじめると言われています！`
  },
Hys: {
  type: '知覚過敏予防タイプ',
  description: `あなたの口腔内にぴったりな歯磨剤は
知覚過敏予防タイプです。

冷たいものやブラシの刺激で「歯がしみる」と感じたことがある方は、知覚過敏の傾向にあります。
その場合は、「硝酸カリウム」や「乳酸アルミニウム」などの成分を配合した歯磨剤を選ぶとよいでしょう。

おすすめの製品
🌟一押し🌟：メルサージュ ヒスケアペースト（松風）
・メルサージュ ヒスケア ジェル（松風）
・システマ センシティブ（ライオン歯科材）
・GUM プロケア ハイパーセンシティブ 集中ケア（サンスター）
・シュミテクト（グラクソ・スミスクライン）

おすすめのケア
・ 「硝酸カリウム」や「乳酸アルミニウム」などの有効成分が含まれた歯磨剤を使いましょう
・知覚過敏用歯磨剤は即効性ではなく、継続使用が大切です`,

  advice: `【知覚過敏のメカニズム】
知覚過敏は主に「象牙質が露出」することで起こります。
通常、象牙質はエナメル質によって保護されていますが、エナメル質が薄くなったり、歯ぐきが下がったりすると象牙質が露出してしまいます。
象牙質には「象牙細管」と呼ばれる微細な管が無数に存在し、これらの管は歯の神経（歯髄）につながっています。
象牙質が露出すると、飲食物の温度変化や酸、甘さなどの刺激が象牙細管を通じて神経に伝わり、
痛みやしみる感覚として感じられるのです。`
},

 W: {
  type: 'ホワイトニングタイプ',
  description: `あなたの口腔内にぴったりな歯磨剤は
ホワイトニングタイプです。

コーヒーやお茶、ワインなどを飲む習慣、喫煙などの習慣がある方や
歯の白さや見た目の印象を大切にしたい方は、このタイプに当てはまります。
その場合は、ステイン除去成分が配合された歯磨剤を選ぶとよいでしょう。
なるべく強すぎる研磨剤は避け、毎日コツコツ続けることが大切です。

おすすめの製品
🌟一押し🌟：ルシェロ ホワイト（ジーシー）
・ブリリアントモアW（ライオン）
・メルサージュ ホワイトニングケア（松風）`,
  advice: `【ホワイトニングのメカニズム】

専門的には歯の表面のカルシウムに「ペリクル」とよばれる唾液タンパクが付着し、
その上に着色性の色素、タンパク、金属イオンなどが重なって少しずつ色が濃くなっていくといわれています。

とくにポリフェノールをたくさん含んだ食品は、もっとも着色の原因になるとされています。
最近は健康志向の高いかたも多く、抗酸化作用の高いポリフェノールを積極的に摂る傾向があります。
お茶のカテキン、赤ワインのタンニン、コーヒーのクロロゲン酸、
チョコレートのカカオマスポリフェノール、ブルーベリーのアントシアニンなどが有名です。

炭酸飲料や酢、レモンなど、酸性のものや柑橘系のものを一緒にとると着色しやすくなるともいわれています。

食品以外では、ヤニの原因となるタバコのタール、一部の医薬品、洗口剤、うがい薬なども着色の原因になることがあります。`
},

P: {
  type: '歯周病ケアタイプ',
  description: `あなたの口腔内にぴったりな歯磨剤は
歯周病ケアタイプです。

歯ぐきの腫れ・出血・違和感を感じたことがある方や、
歯科医院で「歯ぐきが下がっている」「歯周ポケットが深い」と言われたことがある方は、このタイプに当てはまります。

その場合は、「IPMP（イソプロピルメチルフェノール）」や「トラネキサム酸」「塩化セチルピリジニウム（CPC）」など、
歯周病予防に有効な薬用成分が含まれた歯磨剤を選びましょう。

おすすめの製品
🌟一押し🌟：システマSP-T ジェル（ライオン）
・GUM デンタルペースト（サンスター）
・コンクール リペリオ（ウエルテック）
・クリーンデンタルL トータルケア（第一三共ヘルスケア）
・シュミテクト 歯周病ダブルケア（GSK）`,
  advice: `【歯周病のメカニズム】

歯周病は、歯と歯ぐきの間にたまったプラーク（歯垢）中の細菌が炎症を引き起こすことで進行します。
初期の段階では歯ぐきの腫れや出血などの症状がみられ、進行すると歯を支える骨（歯槽骨）が溶けてしまうこともあります。

歯周病は自覚症状が少なく、気づかないうちに進行する「沈黙の病気」とも呼ばれます。
早期発見・早期ケアが、歯を守るためにとても重要です。`
},

  Total: {
  type: 'トータルバランスタイプ',
  description: `あなたの口腔内にぴったりな歯磨剤は
トータルバランスタイプです。

悩みや症状が多く、どれか一つに絞れないと感じている方、
または特に気になる症状がなく、お口のバランスがとれている方は、このタイプに当てはまります。

その場合は、フッ素・殺菌成分・ステイン除去成分など、
複数の機能をバランスよく備えた歯磨剤を選ぶとよいでしょう。

おすすめの製品
🌟一押し🌟：おとなのトータルケア歯みがきジェル（ジーシー） 
・メルサージュ プレミアムケア（松風）
・システマ ハグキプラス プレミアム（ライオン）`,

  advice: `【トータルケアのポイント】

口腔内の健康は「虫歯」「知覚過敏」「歯周病」「着色汚れ」など、さまざまな要素が関係しています。
特定の症状に偏らず、すべてをバランスよく予防するためには、総合力の高い歯磨剤と、日々の丁寧なケアが重要です。

また、セルフケアだけでなく、歯科医院での定期的なチェックも、長く健康な口腔環境を保つための鍵となります。`
}

};


export default function ToothpasteDiagnosis() {
  const [step, setStep]             = useState(0);
  const [scores, setScores]         = useState({ C:0, Hys:0, W:0, P:0, Total:0 });
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult]         = useState({ top1:null, top2:null });

  const handleAnswer = (answer) => {
    const t = questions[step].type;
    if (answer === 'yes') {
      setScores(prev => ({ ...prev, [t]: prev[t] + 1 }));
    }
    if (step + 1 === questions.length) {
      setResult(calculateResult());
      setIsFinished(true);
    } else {
      setStep(step + 1);
    }
  };

  const calculateResult = () => {
    const entries = Object.entries(scores).filter(([k]) => k !== 'Total');
    const maxScore = Math.max(...entries.map(([, v]) => v));
    if (maxScore === 0) return { top1: results.Total, top2: null };

    const topTypes = entries.filter(([, v]) => v === maxScore);
    if (topTypes.length >= 3) return { top1: results.Total, top2: null };

    const sorted = topTypes.sort((a, b) => a[0].localeCompare(b[0]));
    return {
      top1: results[sorted[0][0]],
      top2: sorted[1] ? results[sorted[1][0]] : null,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4">
      <div className="p-8 bg-white rounded-xl shadow-md max-w-5xl w-full">
        {isFinished ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">診断結果</h2>

            <div className="mb-4 text-lg">
              <p className="font-semibold">第1位：{result.top1.type}</p>
              <p className="text-gray-700 whitespace-pre-line">{result.top1.description}</p>
              {result.top1.advice && (
                <p className="text-gray-700 mt-4 whitespace-pre-line">

                  {result.top1.advice}
                </p>
              )}

              {result.top1.type === '虫歯予防タイプ' && (
                <table className="w-full mt-6 border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border px-4 py-2 text-left">飲み物の種類</th>
                      <th className="border px-4 py-2 text-left">pH（目安）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-4 py-2">コーラ</td><td className="border px-4 py-2">2.5</td></tr>
                    <tr><td className="border px-4 py-2">ワイン（赤・白）</td><td className="border px-4 py-2">2.9～3.5</td></tr>
                    <tr><td className="border px-4 py-2">チューハイ・カクテル</td><td className="border px-4 py-2">3.0～4.0</td></tr>
                    <tr><td className="border px-4 py-2">ジュース（果汁100%）</td><td className="border px-4 py-2">3.0～4.0</td></tr>
                    <tr><td className="border px-4 py-2">スポーツドリンク</td><td className="border px-4 py-2">3.0～4.0</td></tr>
                    <tr><td className="border px-4 py-2">炭酸ジュース（サイダーなど）</td><td className="border px-4 py-2">3.0～4.0</td></tr>
                    <tr><td className="border px-4 py-2">ビール</td><td className="border px-4 py-2">4.0～5.0</td></tr>
                    <tr><td className="border px-4 py-2">日本酒</td><td className="border px-4 py-2">4.5～5.0</td></tr>
                    <tr><td className="border px-4 py-2">無糖炭酸水</td><td className="border px-4 py-2">4.5～5.0</td></tr>
                    <tr><td className="border px-4 py-2">焼酎・ウイスキー（ストレート）</td><td className="border px-4 py-2">6.0～7.0</td></tr>
                    <tr><td className="border px-4 py-2">水・お茶</td><td className="border px-4 py-2">6.5～7.5</td></tr>
                  </tbody>
                </table>
              )}
            </div>

            {result.top2 && (
              <div className="mt-6 text-lg">
                <p className="font-semibold">第2位：{result.top2.type}</p>
                <p className="text-gray-700 whitespace-pre-line">{result.top2.description}</p>

              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4">
              質問 {step + 1}/{questions.length}
            </h2>
            <p className="text-gray-800 mb-6">{questions[step].text}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('yes')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                はい
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                いいえ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
