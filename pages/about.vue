<script lang="ts">
interface SetupReturn {
  showAlternateName: Ref<boolean>;
  name: Ref<string>;
  alternateName: Ref<string>;
  currentName: ComputedRef<string>;
  currentNameKey: ComputedRef<string>;
  toggleName: () => void;
}

export default defineComponent({
  setup() {
    const startAnimation = ref(false);

    onMounted(() => {
      // コンポーネントがマウントされた後に少し遅延してアニメーションを開始
      setTimeout(() => {
        startAnimation.value = true;
      }, 100);
    });
    const showAlternateName = ref(false);
    const name = ref("Iris-Fla");
    const alternateName = ref("メル🔮");

    const currentName = computed(() =>
      showAlternateName.value ? alternateName.value : name.value
    );

    const currentNameKey = computed((): string =>
      showAlternateName.value ? "alternate" : "primary"
    );

    const toggleName = () => {
      showAlternateName.value = !showAlternateName.value;
    };

    return {
      startAnimation,
      showAlternateName,
      name,
      alternateName,
      currentName,
      currentNameKey,
      toggleName,
    };
  },
});
</script>
<template>
  <Container>
    <div>
      
    </div>
    
    <div class="profile-header">
      <div class="profile-icon">
        <img src="/profile.jpg" alt="プロフィールアイコン" />
      </div>
      <div @click="toggleName">
        <transition name="fade" mode="out-in">
          <h1 :key="currentNameKey">
            {{ currentName }} <span class="mini-text">click...?</span>
          </h1>
        </transition>
      </div>
    </div>
    <div class="skills-section mb-4" :class="{ animate: startAnimation }">
      <h2>技術スタック<span class="mini-text">skillicons</span></h2>
      <p align="center">
        <img
          src="https://skillicons.dev/icons?i=ai,pr,xd,nuxtjs,nextjs,azure,python,django,vuejs,react,vite,typescript,javascript,css,html,bootstrap,vscode&theme=light"
          alt="技術スタック"
        />
      </p>
    </div>

    <div class="skills-section about-me" :class="{ animate: startAnimation }">
      <h2>自己紹介</h2>
      <WaveText text="ホバーしてウェーブ!" />
      <p>
        ゼロからアプリケーションやサービスを企画し、自分一人でも実装出来るように色々な範囲を勉強しています。新しい物と技術が好きです。
      </p>
    </div>
    <h2>学歴</h2>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th scope="col"> 卒業年 </b-th>
          <b-th scope="col"> 学校名 </b-th>
          <b-th scope="col"> 取り組んだこと </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>2019年</b-td>
          <b-td>生駒市立生駒中学校</b-td>
          <b-td
            >レゴのマインドストームを使ったロボットコンテストに出場しました。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2022年</b-td>
          <b-td>私立奈良育英高校</b-td>
          <b-td>ARDF競技大会で日本4位で、団体では全国優勝しました。</b-td>
        </b-tr>
        <b-tr>
          <b-td>2026年(見込み)</b-td>
          <b-td>京都デザイン＆テクノロジー専門学校</b-td>
          <b-td>現在に至るまで沢山の言語を学習しています。</b-td>
        </b-tr>
      </b-tbody>
    </b-table>
    <h2>掲載された記事一覧</h2>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th scope="col"> 年月 </b-th>
          <b-th scope="col"> Link </b-th>
          <b-th scope="col"> 取り組んだこと </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>2023年</b-td>
          <b-td
            >マイクロソフト<a
              href="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2023/04/20/mixed-reality-for-professional-education/"
              >(Link)</a
            ></b-td
          >
          <b-td
            >MRデバイス(Hololens2)を用いてサークル用のデモを製作し、新技術の紹介を行いました。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td
            >マイクロソフト<a
              href="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/"
              >(Link)</a
            ></b-td
          >
          <b-td
            >Azure OpenAI
            を使い学内の利便性を向上させる事を目的に学生とキャリアセンターが連携できる就活サイトの開発をチームで行いました。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td
            >インテル<a
              href="https://forest.watch.impress.co.jp/docs/special/1598339.html"
              >(Link)</a
            ></b-td
          >
          <b-td
            >Intel社が開催したOpenVinoとAipcを活用したアプリケーション開発コンテストで最優秀賞を頂き、東京で行われたIntelAiSummitのプログラム内でプレゼンテーションを発表した際の記事です。</b-td
          >
        </b-tr>
      </b-tbody>
    </b-table>
  </Container>
</template>

<style scoped>
h1 {
  color: #000000;
  position: relative;
  padding-bottom: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
}

h3 {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: rgb(29, 166, 190);
}

.mini-text {
  font-size: 0.5em;
}

h1::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  width: 100%;
  background-color: #8bdaff;
  border-radius: 5px;
}

h2 {
  color: rgb(0, 0, 0);
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
}

h2::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: -8px;
  height: 3px;
  width: 100%;
  background-color: #272727;
  border-radius: 3px;
}

p {
  color: rgb(0, 0, 0);
  margin: 0.5px;
}

li {
  margin-top: 1em;
  margin-bottom: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.profile-header {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 5px solid #8bdaff;
  border-radius: 20px;
  margin-bottom: 30px;
}

.profile-icon {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.profile-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-me {
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.about-me p {
  line-height: 1.6;
}

.about-me h2 {
  margin-top: 0px;
}

.skills-section {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s, transform 1s;
}

.skills-section.animate {
  opacity: 1;
  transform: translateX(0);
}

.skills-section img {
  max-width: 90%;
}
</style>
