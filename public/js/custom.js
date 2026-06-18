// 等待页面DOM加载完成再执行
document.addEventListener('DOMContentLoaded', () => {
  // 1. 加载jQuery依赖
  const jqScript = document.createElement('script');
  jqScript.src = "https://myhkw.cn/player/js/jquery.min.js";
  document.body.appendChild(jqScript);

  // 2. jQuery加载完毕再初始化播放器
  jqScript.onload = () => {
    const player = document.createElement('script');
    player.src = "https://myhkw.cn/api/player/demo";
    player.id = "myhk";
    player.setAttribute('key', 'demo');
    player.setAttribute('m', '1');
    player.setAttribute('au', '0');
    player.setAttribute('lr', 'r');
    player.setAttribute('pjax', '1');
    document.body.appendChild(player);
  }
})
