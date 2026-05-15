/* ===================================================
   オクラ植え付けで失敗する3つのパターン 完全攻略
   100t農家のイチロウ / 全5枚
   =================================================== */

function slide01Cover() {
  return `<section class="slide hero-slide anim-blur-in" data-section="cover" data-anim-fixed
    data-notes="本日のテーマは、 オクラの植え付けで失敗する3つのパターンと、 その完全攻略です。 毎年同じ相談が来る現場の声を整理して、 これから植える方も、 すでに植えた方も、 迷いなく夏のオクラを採り続けられる1本にまとめました。 16年現場で野菜を作ってきた経験から、 植え付けの瞬間さえ押さえれば結果が決まるということをお伝えします。">
    <div class="hero">
      <div class="hero-tag">OKURA / PLANTING PATTERN</div>
      <h1 class="hero-title">植え付けで<br/><span class="em">失敗する3つ</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">今が旬・夏ずっと採れるオクラを、 最初の一手で逃さない完全攻略。</p>
      <div class="hero-meta">ICHIRO / 100T FARMER</div>
      <div class="big-index">01</div>
    </div>
  </section>`;
}

function slide02Pattern1() {
  return `<section class="slide" data-section="pattern-1"
    data-notes="1つ目の失敗は、 もったいないからと1株ずつバラして植えてしまうことです。 オクラは根をいじられるのを極端に嫌うので、 無理にバラすと植えた直後に枯れて欠株します。 そこに草が生えて、 本来採れるはずだった場所が何も採れない。 正解は、 根を触らず3株まとめて1穴に植える密植。 1株で20段、 3株密植ならその3倍を採ることも珍しくありません。">
    <div class="page-header"><span class="chapter">Pattern 01</span><span class="num">02 / 05</span></div>
    <div class="slide-content">
      <h2>失敗①<br/><span class="g-primary">バラして植える</span></h2>
      <div class="ba-wrap">
        <div class="ba-box">
          <div class="ba-label">Before / バラ植え</div>
          <div class="ba-num">1株</div>
          <div class="ba-desc">根を傷めて欠株。 採れない<br/>スポットが畑にできる。</div>
        </div>
        <div class="ba-arrow">→</div>
        <div class="ba-box">
          <div class="ba-label">After / 3株密植</div>
          <div class="ba-num ba-num--hot">×3倍</div>
          <div class="ba-desc">根を触らず、 そのまま植える。<br/>1株20段の3倍を狙える。</div>
        </div>
      </div>
      <p class="lead mt-32">オクラは根をいじられるのを嫌う。 <span class="hl">3株まとまったまま</span>が正解。</p>
    </div>
  </section>`;
}

function slide03Pattern2() {
  return `<section class="slide" data-section="pattern-2"
    data-notes="2つ目の失敗は、 最低気温が15度を切る時期に植えてしまうことです。 オクラは低温に敏感で、 15度以下の朝夕に1回当たっただけで葉が茶色くなり数日で枯れます。 ナスやキュウリと違って、 低温ダメージから復活させるのは相当きついです。 焦らなくても大丈夫で、 7月末まで植えれば大豊作を目指せます。 植え付けから1ヶ月10日で収穫が始まります。">
    <div class="page-header"><span class="chapter">Pattern 02</span><span class="num">03 / 05</span></div>
    <div class="slide-content">
      <h2>失敗②<br/><span class="g-warm">15度以下で植える</span></h2>
      <div class="grid-3" style="gap:40px;margin-top:8px">
        <div class="phase-row">
          <div class="phase-title">May</div>
          <div class="step-item"><span style="font-family:var(--font-num);font-weight:700;font-size:36px;color:var(--ink-900)">5/20</span> 植え付け</div>
          <div class="step-item"><span style="font-family:var(--font-num);font-weight:700;font-size:36px;background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">6/30</span> 収穫開始</div>
        </div>
        <div class="phase-row">
          <div class="phase-title">June</div>
          <div class="step-item"><span style="font-family:var(--font-num);font-weight:700;font-size:36px;color:var(--ink-900)">6/20</span> 植え付け</div>
          <div class="step-item"><span style="font-family:var(--font-num);font-weight:700;font-size:36px;background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">7/30</span> 収穫開始</div>
        </div>
        <div class="phase-row">
          <div class="phase-title">July</div>
          <div class="step-item"><span style="font-family:var(--font-num);font-weight:700;font-size:36px;color:var(--ink-900)">7/20</span> 植え付け</div>
          <div class="step-item"><span style="font-family:var(--font-num);font-weight:700;font-size:36px;background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">8/30</span> 収穫開始</div>
        </div>
      </div>
      <p class="lead mt-48">植え付けから<span class="hl">1ヶ月と10日</span>で収穫開始。 <span class="hl">7月末まで</span>植えてOK。</p>
    </div>
  </section>`;
}

function slide04Pattern3() {
  return `<section class="slide" data-section="pattern-3"
    data-notes="3つ目の失敗は、 YouTubeなどで見るプロのはや植えを準備なしで真似してしまうことです。 プロはハウスと温度監視と応急処置の準備が整った状態でリスクを取っているので、 それを抜きで真似するとほぼ枯れます。 トンネルやハウスがなければ、 最低気温15度を超えてから安心して植えてください。 苗が終わってもホームセンターには種が置いてあるので、 自分の畑の気温に合わせて植え付けタイミングを作れます。">
    <div class="page-header"><span class="chapter">Pattern 03</span><span class="num">04 / 05</span></div>
    <div class="slide-content">
      <h2>失敗③<br/><span class="g-warm">はや植えを浅く真似</span></h2>
      <div class="grid-2">
        <div class="card card--hot">
          <div class="card-title">プロのはや植えは</div>
          <div class="card-body">ハウス・温度監視・応急処置の準備が先に整っている。 リスクを取って早く植えているだけ。 これを準備なしで真似すると、 ほぼ枯れる。</div>
        </div>
        <div class="card card--secondary">
          <div class="card-title">焦らなくていい</div>
          <div class="card-body">トンネルやハウスがなければ、 最低気温15度を超えてから植える。 苗が終わってもホームセンターには種があり、 畑の気温に合わせられる。</div>
        </div>
      </div>
      <p class="lead mt-32"><span class="hl">焦って早く植えない</span>。 これだけで失敗は大きく減る。</p>
    </div>
  </section>`;
}

function slide05Closing() {
  return `<section class="slide hero-slide anim-fade-up" data-section="closing" data-anim-fixed
    data-notes="今日の3つを守るだけで、 オクラ栽培の最初の壁は超えられます。 バラさず3株、 15度を超えてから、 無理に早植えしない、 この3つです。 その先、 採れたオクラをどう続けるか、 どう収入につなげるか。 家庭菜園レベルでもプロ農家でも、 段階に合わせて公式LINEで答えます。 最後までご覧いただき、 ありがとうございました。">
    <div class="hero">
      <div class="hero-tag">NEXT STAGE</div>
      <h1 class="hero-title">最初の壁は<br/><span class="em">超えられます</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">採れたオクラを どう続けるか、 どう収入につなげるか。 次のステージのお話なら、 公式LINEから相談できます。</p>
      <div class="hero-meta">ICHIRO / 100T FARMER</div>
      <div class="big-index">05</div>
    </div>
  </section>`;
}

window.slideFactories = [
  slide01Cover,
  slide02Pattern1,
  slide03Pattern2,
  slide04Pattern3,
  slide05Closing,
];

window.agendaItems = [
  { id: 'cover',     label: '表紙' },
  { id: 'pattern-1', label: '失敗① バラ植え' },
  { id: 'pattern-2', label: '失敗② 15度以下' },
  { id: 'pattern-3', label: '失敗③ はや植え' },
  { id: 'closing',   label: '次のステージへ' },
];
