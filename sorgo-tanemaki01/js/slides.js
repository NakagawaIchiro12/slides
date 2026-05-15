/* ===================================================
   夏の緑肥ソルゴー、種まきで失敗する3つのパターン 完全攻略
   100t農家のイチロウ / 全15枚
   動画挿入用 — スマホ動画視聴で見える大文字・装飾控えめ
   =================================================== */

function slide01Cover() {
  return `<section class="slide hero-slide anim-blur-in" data-section="cover" data-anim-fixed
    data-notes="本日のテーマ。 夏の緑肥ソルゴー、 種まきで失敗する3つのパターン完全攻略。 これから蒔く方も、 すでに蒔いた方も、 この3つだけ押さえれば、 ちゃんとした緑肥になる、 という1本にまとめました。">
    <div class="hero">
      <div class="hero-tag">SORGO / SEEDING PATTERN</div>
      <h1 class="hero-title">種まきで<br/><span class="em">失敗する3つ</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">夏の緑肥ソルゴー、 完全攻略。</p>
      <div class="hero-meta">ICHIRO / 100T FARMER</div>
      <div class="big-index">01</div>
    </div>
  </section>`;
}

function slide02Intro() {
  return `<section class="slide hero-slide anim-fade-up" data-section="intro" data-anim-fixed
    data-notes="ソルゴーは扱いやすい作物。 普通に蒔けば普通に育つ。 ただし3つだけ押さえないと、 土壌改良効果が半減する。 今日はその3つを整理します。">
    <div class="hero">
      <div class="hero-tag">3 BIG MISTAKES</div>
      <h1 class="hero-title"><span class="em">3つ</span>だけ<br/>押さえる。</h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">これを外さなければ、 ソルゴーはちゃんとした緑肥になる。</p>
      <div class="hero-meta">SORGO / GREEN MANURE</div>
      <div class="big-index">02</div>
    </div>
  </section>`;
}

function slide03Pattern1Title() {
  return `<section class="slide anim-fade-up" data-section="pattern-1-title"
    data-notes="1つめの失敗。 最低気温15度未満の時期に蒔いてしまう。 ソルゴーはもともと熱帯の作物で、 低温に弱い。 5月の頭から蒔く方がいるけれど、 これは早すぎる。">
    <div class="page-header"><span class="chapter">Pattern 01</span><span class="num">03 / 15</span></div>
    <div class="slide-content">
      <h2>失敗①<br/><span class="g-primary">15度未満で蒔く</span></h2>
      <p class="lead mt-48">ソルゴーは<span class="hl">熱帯の作物</span>。 低温に弱い。</p>
    </div>
  </section>`;
}

function slide04Pattern1Answer() {
  return `<section class="slide anim-fade-up" data-section="pattern-1-answer"
    data-notes="正解は最低気温15度を超えてから蒔く。 地域にもよるけれど、 5月下旬から6月以降が目安。 焦って早く蒔いても、 結局気温が上がってから蒔いた方が早く育つ。 オクラと同じく、 基準は15度。">
    <div class="page-header"><span class="chapter">Pattern 01</span><span class="num">04 / 15</span></div>
    <div class="slide-content">
      <h2>正解は<br/><span class="g-primary">15度を超えてから</span></h2>
      <div class="stat mt-48">
        <div class="stat-label">MINIMUM TEMP / 基準ライン</div>
        <div class="stat-num">15℃</div>
        <div class="stat-unit">5月下旬〜6月以降 / 焦らない</div>
      </div>
    </div>
  </section>`;
}

function slide05Pattern2Title() {
  return `<section class="slide anim-fade-up" data-section="pattern-2-title"
    data-notes="2つめの失敗。 播種量と株間を間違える。 ソルゴーは株間で太さが決まる。 細いソルゴーはすき込みやすい。 太いソルゴーは緑肥量は出るが、 すき込むのが大変になる。">
    <div class="page-header"><span class="chapter">Pattern 02</span><span class="num">05 / 15</span></div>
    <div class="slide-content">
      <h2>失敗②<br/><span class="g-warm">株間を間違える</span></h2>
      <p class="lead mt-48">細い vs 太い、 <span class="hl">すき込みやすさ</span>で決まる。</p>
    </div>
  </section>`;
}

function slide06Pattern2Stat() {
  return `<section class="slide anim-fade-up" data-section="pattern-2-stat"
    data-notes="正解は株間5センチから10センチで蒔く。 5センチで蒔けば細いソルゴーになって、 すき込みやすい。 10センチで蒔けば太いソルゴーになって、 緑肥量が出る。 僕の基本は5センチ、 実際の畑だと8センチくらい。">
    <div class="page-header"><span class="chapter">Pattern 02</span><span class="num">06 / 15</span></div>
    <div class="slide-content">
      <h2>株間は<br/><span class="g-primary">5〜10cm</span></h2>
      <div class="ba-wrap">
        <div class="ba-box" style="align-items:center;text-align:center;">
          <div class="ba-label" style="font-size:22px;letter-spacing:0.18em;">細い / すき込み楽</div>
          <div class="ba-num">5cm</div>
        </div>
        <div class="ba-arrow">↔</div>
        <div class="ba-box" style="align-items:center;text-align:center;">
          <div class="ba-label" style="font-size:22px;letter-spacing:0.18em;">太い / 緑肥量出る</div>
          <div class="ba-num ba-num--hot">10cm</div>
        </div>
      </div>
    </div>
  </section>`;
}

function slide07Pattern2Method() {
  return `<section class="slide anim-fade-up" data-section="pattern-2-method"
    data-notes="蒔き方は2パターン。 1つめが筋まき、 筋を引いて種を落としていく方法。 大規模な畑で種の量や株間をしっかり管理したい方は筋まき。 2つめがバラまき、 バラバラっと畑全体に蒔く方法。 家庭菜園レベルならバラまきで全然OK。">
    <div class="page-header"><span class="chapter">Pattern 02</span><span class="num">07 / 15</span></div>
    <div class="slide-content">
      <h2>蒔き方は<br/><span class="g-primary">2パターン</span></h2>
      <div class="grid-2 mt-48">
        <div class="feature-tile" style="min-height:340px;align-items:center;justify-content:center;text-align:center;">
          <div class="tile-num">01</div>
          <div class="tile-title" style="font-size:72px;letter-spacing:0.02em;">筋まき</div>
        </div>
        <div class="feature-tile" style="min-height:340px;align-items:center;justify-content:center;text-align:center;">
          <div class="tile-num">02</div>
          <div class="tile-title" style="font-size:72px;letter-spacing:0.02em;">バラまき</div>
        </div>
      </div>
    </div>
  </section>`;
}

function slide08Pattern3Title() {
  return `<section class="slide anim-fade-up" data-section="pattern-3-title"
    data-notes="3つめの失敗。 水はけが悪い場所で畝を立てずに蒔く。 ソルゴーは水はけ悪い場所でも生えることは生えるが、 大きく育たない。 ヒョロヒョロのまま、 緑肥量がほとんど出ない。 特に粘土土のような重い土は要注意。">
    <div class="page-header"><span class="chapter">Pattern 03</span><span class="num">08 / 15</span></div>
    <div class="slide-content">
      <h2>失敗③<br/><span class="g-primary">畝立てしない</span></h2>
      <p class="lead mt-48">水はけ悪い場所は、 <span class="hl">畝で逃がす</span>。</p>
    </div>
  </section>`;
}

function slide09Pattern3Stat() {
  return `<section class="slide anim-fade-up" data-section="pattern-3-stat"
    data-notes="正解は畝を立ててから蒔く。 水はけが普通のところなら畝の高さは5センチでもOK。 粘土土のような水はけが悪いところは、 15センチから20センチしっかり立てる。 僕の畑は粘土土なので、 普通に20センチ立てて蒔いています。">
    <div class="page-header"><span class="chapter">Pattern 03</span><span class="num">09 / 15</span></div>
    <div class="slide-content">
      <h2>畝の高さは<br/><span class="g-primary">5cm 〜 20cm</span></h2>
      <div class="ba-wrap">
        <div class="ba-box" style="align-items:center;text-align:center;">
          <div class="ba-label" style="font-size:22px;letter-spacing:0.18em;">水はけ普通</div>
          <div class="ba-num">5cm</div>
        </div>
        <div class="ba-arrow">→</div>
        <div class="ba-box" style="align-items:center;text-align:center;">
          <div class="ba-label" style="font-size:22px;letter-spacing:0.18em;">粘土土・水はけ悪い</div>
          <div class="ba-num ba-num--hot">20cm</div>
        </div>
      </div>
    </div>
  </section>`;
}

function slide10Timing() {
  return `<section class="slide anim-fade-up" data-section="timing"
    data-notes="すき込みは種まきから2ヶ月。 5月下旬に蒔けば7月下旬から8月上旬。 6月に蒔けば8月上旬から中旬。 大事なのは穂が出る前。 穂が出ると茎が固くなって、 すき込みにくくなる。 機械なしで作業する方は、 穂が出る前に早めにすき込む。">
    <div class="page-header"><span class="chapter">Timing</span><span class="num">10 / 15</span></div>
    <div class="slide-content">
      <h2>すき込みは<br/><span class="g-primary">2ヶ月後</span></h2>
      <p class="lead mt-48"><span class="hl">穂が出る前</span>に。 固くなる前なら、 すき込みも分解も楽。</p>
    </div>
  </section>`;
}

function slide11Recap() {
  return `<section class="slide anim-fade-up" data-section="recap"
    data-notes="ここで一度整理。 ソルゴーの種まきで失敗する3つのパターン。 1つめ、 最低気温15度未満で蒔く。 2つめ、 株間を間違える。 3つめ、 水はけ悪い場所で畝立てしない。 この3つを避けて、 2ヶ月で穂が出る前にすき込む。 これだけ押さえればちゃんとした緑肥になる。">
    <div class="page-header"><span class="chapter">Recap</span><span class="num">11 / 15</span></div>
    <div class="slide-content">
      <h2>3つの<br/><span class="g-primary">失敗パターン</span></h2>
      <ol class="ordered mt-48" style="gap:36px;">
        <li style="font-size:48px;line-height:1.5;">15度未満で 蒔く</li>
        <li style="font-size:48px;line-height:1.5;">株間を 間違える</li>
        <li style="font-size:48px;line-height:1.5;">畝立て しない</li>
      </ol>
    </div>
  </section>`;
}

function slide12Mileage() {
  return `<section class="slide anim-fade-up" data-section="mileage"
    data-notes="僕自身、 16年やってきて、 ソルゴーで失敗したという経験は正直ない。 普通に蒔けば普通に育つ。 ただ水はけだけは最初の年に気をつけてほしい。 大きくならないなと思ったら、 次の年から畝を立てて蒔く。 それだけで緑肥の質がまったく違ってくる。">
    <div class="page-header"><span class="chapter">Mileage</span><span class="num">12 / 15</span></div>
    <div class="slide-content">
      <h2>普通に蒔けば、<br/><span class="g-warm">普通に育つ</span>。</h2>
      <div class="stat mt-48">
        <div class="stat-label">FAILURE COUNT / 16年の実績</div>
        <div class="stat-num">0</div>
        <div class="stat-unit">ソルゴーで 失敗ゼロ</div>
      </div>
    </div>
  </section>`;
}

function slide13NextStage() {
  return `<section class="slide hero-slide anim-blur-in" data-section="next-stage" data-anim-fixed
    data-notes="3つを守れば、 最初の壁は超えられる。 その先、 本当に大事になってくるのは、 ソルゴーで作った土を次の作物にどうつなげていくか。 畑全体の輪作計画にどう組み込むか。 家庭菜園で楽しみたい方も、 プロ農家として伸ばしたい方も、 この壁にみんなぶつかる。">
    <div class="hero">
      <div class="hero-tag">NEXT STAGE</div>
      <h1 class="hero-title">ここから先は<br/><span class="em-warm">畑の戦略</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">緑肥の先、 ソルゴーで作った土を、 次の作物にどうつなげるか。</p>
      <div class="hero-meta">ICHIRO / 100T FARMER</div>
      <div class="big-index">13</div>
    </div>
  </section>`;
}

function slide14Action() {
  return `<section class="slide anim-fade-up" data-section="action"
    data-notes="ここからはご自身の畑で実際に動かす方向けの話。 個別相談でお話しした方の中には、 その日のうちに『明日、 営農センターへ顔を出してきます』と、 次の一歩を決めて動き始める方がいる。 そういう方は半年後にはまったく違う景色を見ている。 動画を見て『なるほど』で終わってしまうと、 来年の畑は今年と同じ。">
    <div class="page-header"><span class="chapter">Move Now</span><span class="num">14 / 15</span></div>
    <div class="slide-content">
      <h2>動ける方だけ、<br/><span class="g-primary">来年が変わる</span></h2>
      <div class="quote mt-48" style="font-size:48px;line-height:1.55;border-left-width:6px;padding:16px 0 16px 48px;">
        明日、 営農センターへ<br/>顔を出してきます。
      </div>
    </div>
  </section>`;
}

function slide15CTA() {
  return `<section class="slide hero-slide anim-fade-up" data-section="closing" data-anim-fixed
    data-notes="そういう次のステージのお話なら、 公式LINEから相談できます。 ご自身の状況や、 どこを目指したいかを送っていただければ、 家庭菜園レベルでも、 プロ農家でも、 どの段階の方でも、 僕の方で見て返事します。 最後までご覧いただき、 ありがとうございました。">
    <div class="hero">
      <div class="hero-tag">CONTACT</div>
      <h1 class="hero-title">公式LINEから<br/><span class="em">相談できます</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">家庭菜園レベルでも、 プロ農家でも。 どの段階の方でも。</p>
      <div class="hero-meta">ICHIRO / 100T FARMER</div>
      <div class="big-index">15</div>
    </div>
  </section>`;
}

window.slideFactories = [
  slide01Cover,
  slide02Intro,
  slide03Pattern1Title,
  slide04Pattern1Answer,
  slide05Pattern2Title,
  slide06Pattern2Stat,
  slide07Pattern2Method,
  slide08Pattern3Title,
  slide09Pattern3Stat,
  slide10Timing,
  slide11Recap,
  slide12Mileage,
  slide13NextStage,
  slide14Action,
  slide15CTA,
];

window.agendaItems = [
  { id: 'cover',             label: '表紙' },
  { id: 'intro',             label: '3つだけ押さえる' },
  { id: 'pattern-1-title',   label: '失敗① 15度未満' },
  { id: 'pattern-1-answer',  label: '正解 15度以上' },
  { id: 'pattern-2-title',   label: '失敗② 株間' },
  { id: 'pattern-2-stat',    label: '5cm vs 10cm' },
  { id: 'pattern-2-method',  label: '筋まき / バラまき' },
  { id: 'pattern-3-title',   label: '失敗③ 畝立て' },
  { id: 'pattern-3-stat',    label: '畝 5cm vs 20cm' },
  { id: 'timing',            label: 'すき込み 2ヶ月' },
  { id: 'recap',             label: '3つの失敗 整理' },
  { id: 'mileage',           label: '16年 失敗ゼロ' },
  { id: 'next-stage',        label: '次のステージへ' },
  { id: 'action',            label: '動ける方だけ' },
  { id: 'closing',           label: '公式LINE' },
];
