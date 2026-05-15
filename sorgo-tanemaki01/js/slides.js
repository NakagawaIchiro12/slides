/* ===================================================
   夏の緑肥ソルゴー、種まきで失敗する3つのパターン 完全攻略
   100t農家のイチロウ / 全15枚 v2
   スマホYouTube視聴最優先：全テキスト100px超／1スライド1メッセージ
   基準＝「公式LINEから相談できます」(hero-title=168px)
   =================================================== */

/* 全15枚 hero-slide ベースで統一。
   page-header / hero-tag / hero-meta / big-index は撤去
   （13〜36px の小要素はスマホYouTubeで判読不能なため）
*/

const HEROBASE_STYLE = "justify-content:center;align-items:flex-start;gap:36px;padding:130px 150px;";
const LEAD_STYLE = "font-size:96px;font-weight:700;color:var(--ink-700);line-height:1.1;letter-spacing:0.01em;";
const SUB_STYLE = "font-size:96px;font-weight:800;color:var(--ink-900);line-height:1.15;letter-spacing:-0.01em;";

function slide01Cover() {
  return `<section class="slide hero-slide anim-blur-in" data-section="cover" data-anim-fixed
    data-notes="本日のテーマ。 夏の緑肥ソルゴー、 種まきで失敗する3つのパターン、 完全攻略。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <h1 class="hero-title" style="font-size:200px;line-height:1.04;">夏の緑肥<br/><span class="em">ソルゴー</span></h1>
      <div class="hero-rule" style="width:240px;height:10px;"></div>
      <p style="${SUB_STYLE}font-size:128px;">完全攻略</p>
    </div>
  </section>`;
}

function slide02Intro() {
  return `<section class="slide hero-slide anim-fade-up" data-section="intro" data-anim-fixed
    data-notes="種まきで失敗する3つのパターン。 これを外さなければ、 ソルゴーはちゃんとした緑肥になる。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">種まきで失敗する</p>
      <h1 class="hero-title" style="font-size:240px;line-height:1.02;"><span class="em">3つ</span>の<br/>パターン</h1>
    </div>
  </section>`;
}

function slide03Pattern1Title() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-1-title" data-anim-fixed
    data-notes="1つめの失敗。 最低気温15度未満の時期に蒔いてしまう。 ソルゴーは熱帯の作物で、 低温に弱い。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}font-size:120px;color:var(--orange);font-weight:800;">失敗 ①</p>
      <h1 class="hero-title" style="font-size:180px;line-height:1.06;"><span class="em">15度未満</span><br/>で蒔く</h1>
    </div>
  </section>`;
}

function slide04Pattern1Answer() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-1-answer" data-anim-fixed
    data-notes="正解は、 最低気温15度を超えてから蒔く。 5月下旬から6月以降が目安。 オクラと同じで、 基準は15度。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">正解は</p>
      <h1 class="hero-title" style="font-size:360px;line-height:1.0;letter-spacing:-0.04em;"><span class="em">15℃</span></h1>
      <p style="${SUB_STYLE}">を超えてから</p>
    </div>
  </section>`;
}

function slide05Pattern2Title() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-2-title" data-anim-fixed
    data-notes="2つめの失敗。 株間を間違える。 細いソルゴーはすき込みやすい。 太いソルゴーは緑肥量は出るが、 すき込みが大変になる。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}font-size:120px;color:var(--orange);font-weight:800;">失敗 ②</p>
      <h1 class="hero-title" style="font-size:180px;line-height:1.06;"><span class="em">株間</span>を<br/>間違える</h1>
    </div>
  </section>`;
}

function slide06Pattern2Stat() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-2-stat" data-anim-fixed
    data-notes="正解は、 株間5センチから10センチ。 5センチで蒔けば細くてすき込みやすい。 10センチで蒔けば太くて緑肥量が出る。 僕の基本は5センチ。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">株間は</p>
      <h1 class="hero-title" style="font-size:260px;line-height:1.0;letter-spacing:-0.04em;"><span class="em">5 〜 10</span><span style="font-size:140px;font-weight:700;color:var(--ink-900);-webkit-text-fill-color:var(--ink-900);background:none;"> cm</span></h1>
      <p style="${SUB_STYLE}">基本は5cm</p>
    </div>
  </section>`;
}

function slide07Pattern2Method() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-2-method" data-anim-fixed
    data-notes="蒔き方は2つ。 1つめが筋まき、 大規模で管理したい方向け。 2つめがバラまき、 家庭菜園レベルなら全然OK。">
    <div class="hero" style="${HEROBASE_STYLE}gap:48px;">
      <p style="${LEAD_STYLE}">蒔き方は2つ</p>
      <p style="font-size:180px;font-weight:800;color:var(--ink-900);line-height:1.05;letter-spacing:-0.02em;"><span class="em" style="background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">筋</span>まき</p>
      <p style="font-size:180px;font-weight:800;color:var(--ink-900);line-height:1.05;letter-spacing:-0.02em;"><span class="em" style="background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">バラ</span>まき</p>
    </div>
  </section>`;
}

function slide08Pattern3Title() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-3-title" data-anim-fixed
    data-notes="3つめの失敗。 水はけ悪い場所で、 畝を立てずに蒔く。 生えはするが大きく育たない、 緑肥量がほとんど出ない。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}font-size:120px;color:var(--orange);font-weight:800;">失敗 ③</p>
      <h1 class="hero-title" style="font-size:180px;line-height:1.06;"><span class="em">畝立て</span><br/>しない</h1>
    </div>
  </section>`;
}

function slide09Pattern3Stat() {
  return `<section class="slide hero-slide anim-fade-up" data-section="pattern-3-stat" data-anim-fixed
    data-notes="水はけ普通なら畝の高さ5センチ。 粘土土なら15から20センチ、 しっかり立てる。 僕の畑は粘土土なので、 普通に20センチ立てて蒔いている。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">畝の高さ</p>
      <h1 class="hero-title" style="font-size:220px;line-height:1.0;letter-spacing:-0.04em;"><span class="em">5 〜 20</span><span style="font-size:130px;font-weight:700;color:var(--ink-900);-webkit-text-fill-color:var(--ink-900);background:none;"> cm</span></h1>
      <p style="${SUB_STYLE}">粘土土は<span class="em" style="background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">20cm</span></p>
    </div>
  </section>`;
}

function slide10Timing() {
  return `<section class="slide hero-slide anim-fade-up" data-section="timing" data-anim-fixed
    data-notes="すき込みは種まきから2ヶ月後。 大事なのは、 穂が出る前に。 固くなる前なら、 すき込みも分解も楽。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">すき込みは</p>
      <h1 class="hero-title" style="font-size:300px;line-height:1.0;letter-spacing:-0.03em;"><span class="em">2ヶ月</span>後</h1>
      <p style="${SUB_STYLE}">穂が出る前に</p>
    </div>
  </section>`;
}

function slide11Recap() {
  return `<section class="slide hero-slide anim-fade-up" data-section="recap" data-anim-fixed
    data-notes="ここで一度、 整理。 失敗する3つのパターン。 1つめ、 15度未満で蒔く。 2つめ、 株間を間違える。 3つめ、 畝立てしない。">
    <div class="hero" style="${HEROBASE_STYLE}gap:32px;">
      <p style="${LEAD_STYLE}">失敗の<span class="em" style="background:var(--grad-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">3つ</span></p>
      <p style="font-size:120px;font-weight:800;color:var(--ink-900);line-height:1.15;letter-spacing:-0.01em;"><span style="color:var(--orange);">①</span> 15度未満</p>
      <p style="font-size:120px;font-weight:800;color:var(--ink-900);line-height:1.15;letter-spacing:-0.01em;"><span style="color:var(--orange);">②</span> 株間ミス</p>
      <p style="font-size:120px;font-weight:800;color:var(--ink-900);line-height:1.15;letter-spacing:-0.01em;"><span style="color:var(--orange);">③</span> 畝立てなし</p>
    </div>
  </section>`;
}

function slide12Mileage() {
  return `<section class="slide hero-slide anim-fade-up" data-section="mileage" data-anim-fixed
    data-notes="16年、 現場で野菜を作ってきて、 ソルゴーで失敗した経験は正直ない。 普通に蒔けば、 普通に育つ。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}font-size:120px;font-weight:800;color:var(--ink-900);">16年で</p>
      <h1 class="hero-title" style="font-size:320px;line-height:1.0;letter-spacing:-0.04em;"><span class="em">失敗ゼロ</span></h1>
    </div>
  </section>`;
}

function slide13NextStage() {
  return `<section class="slide hero-slide anim-blur-in" data-section="next-stage" data-anim-fixed
    data-notes="3つを守れば最初の壁は超えられる。 その先で出てくるのは、 緑肥を畑全体の戦略にどう組み込むかという壁。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">ここから先は</p>
      <h1 class="hero-title" style="font-size:240px;line-height:1.02;"><span class="em-warm">畑の<br/>戦略</span></h1>
    </div>
  </section>`;
}

function slide14Action() {
  return `<section class="slide hero-slide anim-fade-up" data-section="action" data-anim-fixed
    data-notes="個別相談でお話しした方の中には、 その日のうちに、 明日、 営農センターへ顔を出してきますと、 次の一歩を決めて動き始める方がいる。 そういう方は半年後にまったく違う景色を見ている。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">動ける方だけ、</p>
      <h1 class="hero-title" style="font-size:200px;line-height:1.05;"><span class="em">来年が<br/>変わる</span></h1>
    </div>
  </section>`;
}

function slide15CTA() {
  return `<section class="slide hero-slide anim-fade-up" data-section="closing" data-anim-fixed
    data-notes="そういう次のステージのお話なら、 公式LINEから相談できます。 家庭菜園レベルでも、 プロ農家でも、 どの段階の方でも、 僕の方で見て返事します。 最後までご覧いただき、 ありがとうございました。">
    <div class="hero" style="${HEROBASE_STYLE}">
      <p style="${LEAD_STYLE}">公式LINEから</p>
      <h1 class="hero-title" style="font-size:200px;line-height:1.05;"><span class="em">相談<br/>できます</span></h1>
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
  { id: 'intro',             label: '3つのパターン' },
  { id: 'pattern-1-title',   label: '失敗① 15度未満' },
  { id: 'pattern-1-answer',  label: '正解 15℃' },
  { id: 'pattern-2-title',   label: '失敗② 株間' },
  { id: 'pattern-2-stat',    label: '5〜10cm' },
  { id: 'pattern-2-method',  label: '筋まき / バラまき' },
  { id: 'pattern-3-title',   label: '失敗③ 畝立て' },
  { id: 'pattern-3-stat',    label: '5〜20cm' },
  { id: 'timing',            label: 'すき込み 2ヶ月' },
  { id: 'recap',             label: '3つの失敗' },
  { id: 'mileage',           label: '16年失敗ゼロ' },
  { id: 'next-stage',        label: '畑の戦略' },
  { id: 'action',            label: '動ける方だけ' },
  { id: 'closing',           label: '公式LINE' },
];
