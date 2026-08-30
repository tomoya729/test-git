// 問題文に混入した管理用ラベルを表示しないための共通クリーナー
window.cleanQuestionText=function(text){
  return String(text||'')
    .replace(/【(?:確認問題|追加演習|演習)\s*[^】]*】/g,'')
    .replace(/(?:確認問題|追加演習|演習)\s*\d+(?:[-ー]\d+)?/g,'')
    .replace(/\s{2,}/g,' ')
    .trim();
};
