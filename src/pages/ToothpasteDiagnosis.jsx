// src/pages/ToothpasteDiagnosis.jsx
import { useState } from 'react';

// 質問リスト（9問）
const questions = [
  { text: '糖分を含む飲食の回数が多いですか？', type: 'C' },
  { text: '冷たい飲み物で歯がしみますか？', type: 'Hys' },
  { text: 'コーヒーやお茶を飲む習慣がありますか？', type: 'W' },
  { text: '歯ぐきが腫れたり、出血したことがありますか？', type: 'P' },
  { text: '炭酸やお酒を頻繁に飲みますか？', type: 'C' },
  { text: '歯ブラシを歯にあてると痛みを感じますか？', type: 'Hys' },
  { text: 'ホワイトニングに興味がありますか？', type: 'W' },
  { text: '歯医者さんで歯周病の指摘をされたことがありますか？', type: 'P' },
  { text: '複数の悩みを一つに絞れないと感じますか？', type: 'Total' },
];

// 診断結果データ
const results = {
  C:     { type: '虫歯予防タイプ',      description: '虫歯になりやすい方向けの歯磨剤です。' },
  Hys:   { type: '知覚過敏タイプ',      description: '冷たいものがしみる方向けのケアタイプです。' },
  W:     { type: 'ホワイトニングタイプ',description: '歯の白さを意識する方向けです。' },
  P:     { type: '歯周病ケアタイプ',    description: '歯ぐきのトラブルを防ぎたい方向けです。' },
  Total: { type: 'トータルバランスタイプ',description: '総合的にバランスの取れたタイプです。' },
};

export default function ToothpasteDiagnosis() {
  const [step, setStep]             = useState(0);
  const [scores, setScores]         = useState({ C:0, Hys:0, W:0, P:0, Total:0 });
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult]         = useState({ top1:null, top2:null });

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

  // ← ← ← 新しい診断ロジック（同点多数に対応）ここ！
  const calculateResult = () => {
    const entries = Object.entries(scores).filter(([k]) => k !== 'Total');
    const maxScore = Math.max(...entries.map(([, v]) => v));

    if (maxScore === 0) {
      return { top1: results.Total, top2: null };
    }

    const topTypes = entries.filter(([, v]) => v === maxScore);

    if (topTypes.length >= 3) {
      return { top1: results.Total, top2: null };
    }

    const sorted = topTypes.sort((a, b) => a[0].localeCompare(b[0]));
    return {
      top1: results[sorted[0][0]],
      top2: sorted[1] ? results[sorted[1][0]] : null,
    };
  };

  if (isFinished) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">診断結果</h2>
        <p className="mb-2 font-semibold">第1位：{result.top1.type}</p>
        <p className="text-gray-700 mb-4">{result.top1.description}</p>
        {result.top2 && (
          <>
            <p className="mt-4 font-semibold">第2位：{result.top2.type}</p>
            <p className="text-gray-700">{result.top2.description}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto mt-10">
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
    </div>
  );
}
