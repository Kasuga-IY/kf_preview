// 要素を取得
const btn = document.getElementById('more-btn');
const content = document.getElementById('more-content');

// ボタンをクリックした時の動き
btn.addEventListener('click', () => {
  // .is-open クラスを付けたり外したりする
  content.classList.toggle('is-open');
  
  // ボタンの文字を変える（お好みで）
  if (content.classList.contains('is-open')) {
    btn.textContent = '閉じる';
  } else {
    btn.textContent = 'もっと見る';
  }
});