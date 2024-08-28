<script setup>

useHead({
  title: "メルのプロフィール",
  meta: [
    { property: "og:title", content: "メルのプロフィール" },
    {
      property: "og:description",
      content: "技術スタックや簡単なプロフィールを掲載しています。",
    },
    { property: "og:type", content: "website" },
  ]})

const startAnimation = ref(false)

onMounted(() => {
  // コンポーネントがマウントされた後に少し遅延してアニメーションを開始
  setTimeout(() => {
    startAnimation.value = true
  }, 100)
})

const showAlternateName = ref(false)
const name = ref("Iris-Fla")
const alternateName = ref("メル🔮")

const currentName = computed(() =>
  showAlternateName.value ? alternateName.value : name.value
)

const currentNameKey = computed(() =>
  showAlternateName.value ? "alternate" : "primary"
)

const toggleName = () => {
  showAlternateName.value = !showAlternateName.value
}
</script>
<template>
  <Container>
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
    <div class="skills-section" :class="{ animate: startAnimation }">
      <h2>自己紹介</h2>
      <p>
        ゼロからアプリケーションやサービスを企画し、自分一人でも実装出来るように色々な範囲を勉強しています。新しい物と技術が好きです。
      </p>
    </div>
    <h2>SNS一覧</h2>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th scope="col"> SNS </b-th>
          <b-th scope="col"> URL </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>Github</b-td>
          <b-td><NuxtLink to="https://github.com/Iris-Fla">Link</NuxtLink></b-td>
        </b-tr>
        <b-tr>
          <b-td>X</b-td>
          <b-td><NuxtLink to="https://x.com/Iris_Flandre">Link</NuxtLink></b-td>
        </b-tr>
      </b-tbody>
    </b-table>
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
    <h2>主な活動記録</h2>
    <b-table>
      <b-thead>
        <b-tr>
          <b-th scope="col"> 年月 </b-th>
          <b-th scope="col"> Link </b-th>
          <b-th scope="col"> 取り組んだこと(要約) </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>2023年</b-td>
          <b-td
            >Be,想空間様<NuxtLink
              to="https://www.youtube.com/@DIY-tu9nl" target="_blank"
              >(Youtubeチャンネル)</NuxtLink
            ></b-td
          >
          <b-td
            >株式会社Be,想空間様の施工事例の動画編集・サムネイル制作を1年以上受託しています。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2023年</b-td>
          <b-td
            >ロート製薬様<NuxtLink
              to="https://www.instagram.com/reel/CyQRNNFyxnJ/?igshid=MWZjMTM2ODFkZg%3D%3D" target="_blank"
              >(Instagramリール動画)</NuxtLink
            ></b-td
          >
          <b-td
            >美容化粧品 SKIO VC ホワイトピールセラムのInstagramの宣伝動画を制作しました。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2023年</b-td>
          <b-td
            >マイクロソフト様<NuxtLink
              to="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2023/04/20/mixed-reality-for-professional-education/" target="_blank"
              >(記事)</NuxtLink
            ></b-td
          >
          <b-td
            >MRデバイス(Hololens2)とMicrosoftDynamics365を用いてサークル紹介のデモを制作し、サークルに興味がある人にMRの紹介を行いました。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2023年-(2024/7月 継続中)</b-td>
          <b-td
            >シンプリス株式会社様<NuxtLink
              to="https://usebootstrap.org/" target="_blank"
              >(ドキュメントサイト)</NuxtLink
            ></b-td
          >
          <b-td
            >学生アルバイトでNuxt.js用のパッケージ"usebootstrap"のドキュメントページやデモの制作等を行っています。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td
            >マイクロソフト様<NuxtLink
              to="https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/" target="_blank"
              >(記事)</NuxtLink
            ></b-td
          >
          <b-td
            >Azure OpenAI
            を用いて、学内の利便性を向上させる事を目的に学生とキャリアセンターが連携できる就活サイトの開発をチームで行いました。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td
            >インテル様<NuxtLink
              to="https://www.intel.co.jp/content/www/jp/ja/events/ai-app-dev-using-openvino-contest-for-students.html" target="_blank"
              >(記事)</NuxtLink
            ></b-td

          >
          <b-td
            >株式会社インテル様主催のOpenVinoとAI PC(NPU)を活用した学生アプリケーション開発コンテストで最優秀賞を頂いた際の記事です。</b-td
          >
        </b-tr>
        <b-tr>
          <b-td>2024年</b-td>
          <b-td
            >窓の杜様<NuxtLink
              to="https://forest.watch.impress.co.jp/docs/special/1598339.html" target="_blank"
              >(記事)</NuxtLink
            ></b-td
          >
          <b-td
            >東京で行われたIntelAiSummitのプログラム内で学生コンテストのプレゼンテーションを発表した際の記事です。</b-td
          >
        </b-tr>
      </b-tbody>
    </b-table>
  </Container>
</template>

<style scoped lang="scss">
h1 {
  color: $text-color-black;
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
  color: $color-secondary;
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
  background-color: $color-secondary;
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
  border: 5px solid $color-secondary;
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

.about-me p {
  line-height: 1.6;
}

.about-me h2 {
  margin-top: 0px;
}
</style>
