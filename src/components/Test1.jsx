// import { useUserStore } from '../store';

// export default function Test1() {
//   // Storeから必要なものを取り出す
//   const { username, rank, setUsername, addExp, reset } = useUserStore();

//   return (
//     <div className="p-8 bg-black border border-[#D9A333] rounded-lg shadow-xl max-w-md mx-auto my-10">
//       <h1 className="text-2xl font-bold text-[#D9A333] mb-6 border-b border-[#D9A333] pb-2">
//         Gouroku_sait Test
//       </h1>
      
//       <div className="space-y-4 text-white mb-8">
//         <p className="text-lg">
//           ユーザー名: <span className="text-[#E6D8B3] font-semibold">{username || '未設定'}</span>
//         </p>
//         <p className="text-lg">
//           現在のランク: <span className="bg-[#D9A333] text-black px-2 py-1 rounded font-bold">{rank}</span>
//         </p>
//       </div>

//       <div className="flex flex-col gap-4">
//         <input 
//           type="text" 
//           onChange={(e) => setUsername(e.target.value)} 
//           placeholder="名前を入力"
//           className="p-2 bg-[#080c14] border border-[#E6D8B3] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#D9A333] transition-all"
//         />
        
//         <div className="flex gap-2">
//           <button 
//             onClick={() => addExp(10)}
//             className="flex-1 bg-[#D9A333] hover:bg-[#E6D8B3] text-black font-bold py-2 rounded transition-colors"
//           >
//             経験値+10
//           </button>
          
//           <button 
//             onClick={reset}
//             className="px-4 border border-[#AA0000] text-[#AA0000] hover:bg-[#AA0000] hover:text-white py-2 rounded transition-all"
//           >
//             リセット
//           </button>
//         </div>
//       </div>

//       <div className="mt-8 p-4 bg-[#111] rounded border border-dashed border-[#E6D8B3]">
//         <p className="text-[#E6D8B3] text-sm mb-2">💡 オートセーブ確認手順：</p>
//         <ol className="text-xs text-gray-400 list-decimal list-inside space-y-1">
//           <li>名前を入力し、経験値を増やす</li>
//           <li>ブラウザをリロードする</li>
//           <li>表示が維持されていれば成功！</li>
//         </ol>
//       </div>
//     </div>
//   );
// }

import { useUserStore } from '../store';

export default function Test1() {
  // Storeから exp も取り出す
  const { username, rank, exp, setUsername, addExp, reset } = useUserStore();

  // ランクアップまでの目標（例として100に設定）
  const nextRankExp = 1000;
  const progress = Math.min((exp / nextRankExp) * 100, 100);

  return (
    <div className="p-8 bg-black border border-[#D9A333] rounded-lg shadow-xl max-w-md mx-auto my-10 font-sans">
      <h1 className="text-2xl font-bold text-[#D9A333] mb-6 border-b border-[#D9A333] pb-2 text-center">
        Gouroku_sait Dashboard
      </h1>
      
      <div className="space-y-6 text-white mb-8">
        {/* ユーザー情報セクション */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-[#E6D8B3] uppercase tracking-widest">Player</p>
            <p className="text-xl font-bold">{username || 'Guest'}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#E6D8B3] uppercase tracking-widest">Rank</p>
            <p className="text-2xl font-black text-[#D9A333]">{rank}</p>
          </div>
        </div>

        {/* 経験値表示チャンク：ここが追加ポイント */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#E6D8B3]">Experience</span>
            <span>{exp} / {nextRankExp} EXP</span>
          </div>
          {/* 視覚的なプログレスバー */}
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-[#D9A333]/30">
            <div 
              className="h-full bg-gradient-to-r from-[#D9A333] to-[#E6D8B3] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <input 
          type="text" 
          value={username} // 入力欄とデータを同期（双方向バインディング）
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="名前を入力"
          className="p-2 bg-[#080c14] border border-[#E6D8B3] text-white rounded focus:outline-none focus:ring-1 focus:ring-[#D9A333]"
        />
        
        <div className="flex gap-2">
          {/* 経験値+10ボタン */}
          <button 
            onClick={() => addExp(10)}
            className="flex-1 bg-[#D9A333] hover:bg-[#E6D8B3] active:scale-95 text-black font-bold py-2 rounded transition-all shadow-[0_0_10px_rgba(217,163,51,0.3)]"
          >
            経験値を獲得 (+10)
          </button>
          
          <button 
            onClick={reset}
            className="px-4 border border-[#AA0000] text-[#AA0000] hover:bg-[#AA0000] hover:text-white py-2 rounded text-sm transition-all"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}